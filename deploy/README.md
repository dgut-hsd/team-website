# 子路径部署说明（/team/）

本项目作为**纯静态站**部署在宿主机 nginx 的子路径 `http://host/team/` 下，
与 `ai-bid-old`（`/aibidold/`）同一套 nginx 静态托管模式。

## 一、为什么需要改代码（子路径必改）

本站没有用 react-router，路由是 `window.location.pathname` 精确匹配，
导航锚点也是写死的根路径（`href='/members'` 等）。只改 Vite 的 `base`
只影响**构建产物的资源 URL**，不会改这些运行时路径，所以必须把路由和锚点
改成子路径自适应。本次修改（对 `/team/` 与根路径都适用）：

| 文件 | 改动 |
|---|---|
| `vite.config.js` | `base: '/team/'`（改子路径只需改这里） |
| `src/base.js`（新增） | `ROUTE_BASE`/`rp(path)`，基于 `import.meta.env.BASE_URL` |
| `src/App.jsx` | 10 处 `pathname` 判断改用 `rp()` |
| `src/components/Header/Header.jsx` | `getActiveNav()` + 全部锚点改用 `rp()` |
| `src/components/Projects/Projects.jsx` | `href='/projects'` 改用 `rp('/projects')` |

> 若以后改到别的子路径或根路径，只改 `vite.config.js` 的 `base` 即可，
> `src/base.js` 会自动跟随（`BASE_URL` 由 Vite 注入）。

## 二、本地构建验证

```bash
npm ci
npm run build    # 产物在 dist/，资源 URL 以 /team/ 开头
```

## 三、部署到 /srv/projects + nginx

方式一（推荐，自动）：
```bash
sudo ./deploy/install.sh
```
脚本会把源码复制到 `/srv/projects/team-website`、`npm ci && npm run build`、
在 `/etc/nginx/sites-available/smart-tender` 插入 `location ^~ /team/`，然后
`nginx -t && systemctl reload nginx`。

方式二（手动）：
```bash
sudo mkdir -p /srv/projects/team-website
sudo rsync -a --exclude node_modules --exclude dist --exclude .git ./ /srv/projects/team-website/
cd /srv/projects/team-website && npm ci && npm run build
```
再把 `deploy/team-nginx.conf` 里的 location 块插入 smart-tender 的默认 server 块内，
执行 `sudo nginx -t && sudo systemctl reload nginx`。

## 四、验证

```bash
curl -I http://127.0.0.1/team/             # 200
curl -I http://127.0.0.1/team/members      # 200（SPA 兜底）
curl -I http://127.0.0.1/team/assets/xxx.js # 200 且 Content-Type application/javascript
```

## 五、端口说明

不需要单独端口：`80` 由宿主机 nginx 监听，`/team/` 走其中的 `location`。
`8080`（aib）、`8090`（ops-dashboard）等不受影响。

## 六、日常更新流程（每次改完代码后上线）

代码仓库位于 `/home/dglg/a/team-website`（Git 仓库，是部署的来源）；
`/srv/projects/team-website` 只是构建与运行目录，由 `install.sh` 维护。

改完代码要上线的标准三步：

```bash
cd /home/dglg/a/team-website

# 1) 提交并推送（推送需 GitHub 认证，见下方「推送认证」）
git add -A
git commit -m "你的改动说明"
git push origin main

# 2) 重新部署（复制最新源码到 /srv + 构建 + reload nginx）
sudo ./deploy/install.sh

# 3) 验证
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1/team/          # 200
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1/team/members   # 200
```

说明：
- `install.sh` 是幂等的，可反复执行；`/team/` 的 nginx location 已存在时不会重复插入，只重新构建。
- 构建时若报 esbuild 相关错误，多半是 npm 的 allow-scripts 策略拦截了 esbuild 的安装脚本，
  执行 `npm approve-scripts esbuild` 后再 `npm ci` 即可（`package.json` 已记录该审批）。
- 成员/教师图片用的是 ES import（`src/data/team_data.js`），不要改回写死的 `/src/assets/...` 字符串，
  否则线上图片会 404。

### 推送认证（无凭证时）

这台主机没有配置 GitHub 凭据。最简单的方式是用 Personal Access Token：

1. 登录 GitHub → https://github.com/settings/tokens → Generate new token（classic）→ 勾选 `repo`。
2. 用令牌推送（把 `<TOKEN>` 换成 `ghp_...`）：
   ```bash
   git remote set-url origin https://<TOKEN>@github.com/dgut-hsd/team-website.git
   git push origin main
   git remote set-url origin https://github.com/dgut-hsd/team-website.git   # 推完清掉令牌
   ```
3. 令牌在对话/命令里出现过的话，建议到该页面**吊销/重新生成**。

> 如果提示 `remote: Permission to dgut-hsd/... denied`，说明该令牌的账号对 `dgut-hsd` 仓库没有推送权限，
> 需要用仓库有写权限的账号重新生成令牌。
