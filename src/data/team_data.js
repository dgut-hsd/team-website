// 团队成员 / 指导教师图片。
// 注意：必须用 ES import 引用图片（而不是写死的 '/src/assets/...' 字符串），
// 这样 Vite 构建时才会把图片打包进 dist/assets 并自动加上子路径前缀（/team/），
// 否则线上图片会 404（根路径部署也会挂，因为生产环境没有 /src 路径）。

import teacherTbm from '../assets/team/teachers/teacher_tbm.png';
import teacherTsl from '../assets/team/teachers/teacher_tsl.jpg';

import studentLiTe from '../assets/team/students/李特.jpg';
import studentZhaoYM from '../assets/team/students/赵一鸣.jpg';
import studentYangYu from '../assets/team/students/杨煜.jpg';
import studentYangYJ from '../assets/team/students/杨宇健.jpg';
import studentSarff from '../assets/team/students/sarff.jpg';
import studentLiuYL from '../assets/team/students/刘颖良.jpg';
import studentZhangYX from '../assets/team/students/张奕鑫.jpg';
import studentGuHY from '../assets/team/students/顾晃源.jpg';
import studentLuoQX from '../assets/team/students/罗企翔.jpg';
import studentChenBB from '../assets/team/students/陈彬彬.jpg';
import studentKangXZ from '../assets/team/students/康晓祯.jpg';
import studentGuoYC from '../assets/team/students/郭毅川.jpg';
import studentHuangSJ from '../assets/team/students/黄圣杰.jpg';
import studentCaiZY from '../assets/team/students/蔡紫妍.jpg';
import studentHuangXi from '../assets/team/students/黄曦.jpg';
import studentZhangQX from '../assets/team/students/张启贤.jpg';
import studentLingMH from '../assets/team/students/凌铭辉.jpg';
import studentLuKuan from '../assets/team/students/陆宽.jpg';
import studentLiWH from '../assets/team/students/李伟煌.jpg';
import studentYangRui from '../assets/team/students/阳睿.jpg';
import studentZhangZH from '../assets/team/students/张梓鸿.jpg';
import studentChenZY from '../assets/team/students/陈卓煜.jpg';
import studentLuoZZ from '../assets/team/students/罗自壮.jpg';
import studentChenLY from '../assets/team/students/陈林毅.jpg';
import studentZhangWT from '../assets/team/students/张伟涛.jpg';

export const teacherData = [
   {
      img: teacherTbm,
      name: '涂保民',
      title: '指导老师',
      detail: '粤台计算机学院系主任',
   },
   {
      img: teacherTsl,
      name: '田盛兰',
      title: '指导老师',
      detail: '计算机学院辅导员',
   },
];

export const memberData = [
   {
      img: studentLiTe,
      name: '李特',
      title: '23级软件工程',
   },
   {
      img: studentZhaoYM,
      name: '赵一鸣',
      title: '23级软件工程',
   },
   {
      img: studentYangYu,
      name: '杨煜',
      title: '23级计算机科学与技术（工业软件）',
   },
   {
      img: studentYangYJ,
      name: '杨宇健',
      title: '23级网络空间安全',
   },
   {
      img: studentSarff,
      name: '陈祺宏',
      title: '24级软件工程',
   },
   {
      img: studentLiuYL,
      name: '刘颖良',
      title: '23级软件工程',
   },
   {
      img: studentZhangYX,
      name: '张奕鑫',
      title: '23级网络空间安全',
   },
   {
      img: studentGuHY,
      name: '顾晃源',
      title: '24级自动化',
   },
   {
      img: studentLuoQX,
      name: '罗企翔',
      title: '23级软件工程',
   },
   {
      img: studentChenBB,
      name: '陈彬彬',
      title: '21级计算机科学与技术',
   },
   {
      img: studentKangXZ,
      name: '康晓祯',
      title: '24级工业设计',
   },
   {
      img: studentGuoYC,
      name: '陈勇润',
      title: '24级计算机科学与技术',
   },
   {
      img: studentHuangSJ,
      name: '黄圣杰',
      title: '24级软件工程',
   },
   {
      img: studentCaiZY,
      name: '蔡紫妍',
      title: '22级计算机科学与技术',
   },
   {
      img: studentGuoYC,
      name: '郭毅川',
      title: '24级软件工程',
   },
   {
      img: studentHuangXi,
      name: '黄曦',
      title: '24级计算机类',
   },
   {
      img: studentZhangQX,
      name: '张启贤',
      title: '24级光电信息科学与工程',
   },
   {
      img: studentLingMH,
      name: '凌铭辉',
      title: '22级计算机科学与技术',
   },
   {
      img: studentLuKuan,
      name: '陆宽',
      title: '24级计算机类',
   },
   {
      img: studentLiWH,
      name: '李伟煌',
      title: '24级软件工程',
   },
   {
      img: studentYangRui,
      name: '阳睿',
      title: '24级计算机科学与技术',
   },
   {
      img: studentZhangZH,
      name: '张梓鸿',
      title: '24级软件工程',
   },
   {
      img: studentChenZY,
      name: '陈卓煜',
      title: '22级软件工程',
   },
   {
      img: studentLuoZZ,
      name: '罗自壮',
      title: '24级计算机科学与技术多媒体',
   },
   {
      img: studentChenLY,
      name: '陈林毅',
      title: '23级光电信息科学与工程',
   },
   {
      img: studentZhangWT,
      name: '张伟涛',
      title: '24软件工程',
   },
];
