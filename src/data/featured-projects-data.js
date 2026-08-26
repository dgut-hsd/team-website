import { projectsData } from './projects-data';

// 首页精选项目（精品项目）：数组顺序即首页展示顺序。
// 与项目单页（/projects）的完整目录分开管理，互不影响排序。
const FEATURED_PROJECT_NAMES = ['标书智能审查', '智能教学助手', '像素匠'];

export const featuredProjectsData = FEATURED_PROJECT_NAMES
   .map((name) => projectsData.find((project) => project.name === name))
   .filter(Boolean);