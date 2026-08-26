#!/usr/bin/env bash
#
# 把 team-website 部署到 /srv/projects/team-website，并以子路径 /team/ 挂到宿主机 nginx。
#
# 用法：
#     sudo ./deploy/install.sh          # 首次部署 / 重新部署
#
# 前置：
#   - 需要 root（要写 /srv/projects 与 /etc/nginx，以及 reload nginx）
#   - 宿主机 nginx 的默认站点需为 /etc/nginx/sites-available/smart-tender
#
# 脚本做的事：
#   1. 把源码(排除 node_modules/dist/.git)复制到 /srv/projects/team-website
#   2. npm ci + npm run build 生成 dist
#   3. 在 smart-tender 的 server 块内插入 location ^~ /team/（幂等，可重复跑）
#   4. nginx -t 校验并 reload
#
set -euo pipefail

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="/srv/projects/team-website"
NGINX_SITE="/etc/nginx/sites-available/smart-tender"
DIST="$APP_DIR/dist"

if [ "$(id -u)" -ne 0 ]; then
   echo "❌ 请用 sudo 运行（需要写 /srv/projects 和 /etc/nginx）" >&2
   exit 1
fi

echo "==> 复制源码到 $APP_DIR（排除 node_modules/dist/.git）"
mkdir -p "$APP_DIR"
rsync -a \
   --exclude node_modules --exclude dist --exclude .git \
   "$SRC_DIR"/ "$APP_DIR"/

echo "==> 安装依赖并构建"
cd "$APP_DIR"
if [ ! -d node_modules ]; then
   npm ci --no-audit --no-fund
fi
npm run build

echo "==> 写入 nginx location /team/"
if grep -q '^    location ^~ /team/' "$NGINX_SITE"; then
   echo "    /team/ 已存在，跳过"
else
   cp "$NGINX_SITE" "$NGINX_SITE.bak.$(date +%s)"
   python3 - "$NGINX_SITE" <<'PY'
import sys
path = sys.argv[1]
block = '''    # team-website 前端静态(子路径 /team/)
    location ^~ /team/ {
        alias /srv/projects/team-website/dist/;
        try_files $uri $uri/ /team/index.html;
    }

'''
with open(path) as f:
    content = f.read()
# 在 server 块最后一个 } 之前插入 location
idx = content.rstrip().rfind('}')
content = content.rstrip()[:idx] + block + content.rstrip()[idx:] + '\n'
with open(path, 'w') as f:
    f.write(content)
PY
   echo "    已插入 location，原文件备份为 $NGINX_SITE.bak.*"
fi

echo "==> 校验并重载 nginx"
nginx -t
systemctl reload nginx

echo ""
echo "✅ 部署完成："
echo "   http://<host>/team/          首页"
echo "   http://<host>/team/members   成员"
echo "   静态目录: $DIST"
