// 子路径部署的统一路由基址。
//
// import.meta.env.BASE_URL 由 Vite 按 vite.config.js 的 `base` 注入，
// 部署在 /team/ 下时其值就是 "/team/"。这里去掉末尾斜杠得到 ROUTE_BASE，
// 再用 rp(path) 拼出带基址的路由路径，例如 rp('/members') === '/team/members'。
//
// 注意：App.jsx 用 window.location.pathname 精确匹配路由，
// Header/Projects 用 <a href> 做跳转，二者都必须用 ROUTE_BASE/rp()，
// 否则部署到子路径后链接会指向根路径而 404。
export const ROUTE_BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const rp = (path) => `${ROUTE_BASE}${path}`;
