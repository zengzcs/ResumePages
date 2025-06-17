# 🌟 React 个人简历页面

一个现代化的、响应式的个人简历网站，使用 React + TypeScript + Material-UI + Framer Motion 构建，具有丰富的动画效果和主题切换功能。

## ✨ 特性

### 🎨 视觉效果
- **双主题模式**: 支持明暗主题切换
- **毛玻璃效果**: 白天模式下的高级毛玻璃高斯模糊效果
- **流星夜空**: 黑夜模式下的流星划过和星空闪烁特效
- **极光背景**: 动态极光渐变背景效果
- **粒子动画**: 白天模式下的浮动粒子效果

### 🎭 动画特效
- **浮动动画**: 头像和元素的3D浮动效果
- **滑入动画**: 高级渐变滑动进入效果
- **悬停互动**: 丰富的鼠标悬停动画
- **技能条动画**: 带有闪光效果的技能进度条
- **卡片特效**: 卡片悬停时的3D变换效果

### 📱 响应式设计
- **完全响应式**: 支持所有屏幕尺寸
- **移动优化**: 针对移动设备优化的布局
- **无障碍支持**: 支持键盘导航和屏幕阅读器
- **高对比度**: 支持高对比度模式

### 🔗 社交媒体集成
- **抖音主页链接**: 直接跳转到个人抖音主页
- **微信公众号**: 链接到微信公众号
- **GitHub**: 可选的GitHub个人主页链接
- **LinkedIn**: 可选的LinkedIn个人主页链接

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- pnpm 8+

### 安装依赖
```bash
cd resume-pages
pnpm install
```

### 开发模式
```bash
pnpm run dev
```
应用将在 http://localhost:7777 启动

### 构建生产版本
```bash
pnpm run build
```

### 预览生产版本
```bash
pnpm run preview
```

## 📝 个性化配置

### 修改个人信息
编辑 `src/App.tsx` 文件中的个人信息：

```typescript
const personalInfo: PersonalInfo = {
  name: "你的姓名",
  title: "你的职位",
  email: "your-email@example.com",
  phone: "+86 138 0000 0000",
  location: "你的位置",
  bio: "你的个人简介",
  avatar: "/avatar.svg",
  socialLinks: {
    douyin: "https://www.douyin.com/user/your-douyin-id",
    wechat: "https://mp.weixin.qq.com/s/your-wechat-public-account",
    github: "https://github.com/your-github",
    linkedin: "https://linkedin.com/in/your-linkedin"
  }
};
```

### 修改技能信息
```typescript
const skills: Skill[] = [
  { name: "技能名称", level: 90, category: "分类" },
  // 添加更多技能...
];
```

### 修改工作经历
```typescript
const experiences: Experience[] = [
  {
    title: "职位名称",
    company: "公司名称", 
    duration: "工作时间",
    description: [
      "工作描述1",
      "工作描述2",
      // 更多描述...
    ]
  },
  // 添加更多经历...
];
```

### 替换头像
将你的头像文件放在 `public/` 目录下，然后更新 `personalInfo.avatar` 路径。

## 🚀 部署到 GitHub Pages

### 自动部署（推荐）

1. **创建 GitHub 仓库**
   - 在 GitHub 上创建一个新的仓库
   - 将代码推送到仓库

2. **配置 GitHub Pages**
   - 在仓库设置中找到"Pages"选项
   - 选择"GitHub Actions"作为部署源

3. **更新配置**
   - 修改 `package.json` 中的 `homepage` 字段：
   ```json
   "homepage": "https://your-username.github.io/your-repo-name"
   ```
   - 修改 `vite.config.ts` 中的 `base` 字段：
   ```typescript
   base: '/your-repo-name/'
   ```

4. **推送代码**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

自动部署流程将在几分钟后完成，你的网站将在 `https://your-username.github.io/your-repo-name` 上线。

### 手动部署
```bash
# 确保已经配置好 homepage 和 base 路径
pnpm run deploy
```

## 🛠️ 技术栈

- **React 19** - 用户界面库
- **TypeScript** - 类型安全的JavaScript
- **Material-UI** - React UI组件库
- **Framer Motion** - 动画库
- **Vite** - 构建工具
- **pnpm** - 包管理器

## 🎯 项目结构

```
resume-pages/
├── src/
│   ├── App.tsx          # 主应用组件
│   ├── App.css          # 全局样式
│   ├── main.tsx         # 应用入口
│   └── vite-env.d.ts    # Vite类型定义
├── public/
│   ├── avatar.svg       # 默认头像
│   └── vite.svg         # Vite图标
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions部署配置
├── package.json         # 项目配置
├── vite.config.ts       # Vite配置
└── tsconfig.json        # TypeScript配置
```

## 🎨 动画说明

### 白天模式特效
- **毛玻璃效果**: 所有卡片都有动态的毛玻璃背景
- **粒子浮动**: 背景中有轻微的粒子浮动效果
- **渐变动画**: 标题具有动态渐变色彩
- **滑入特效**: 卡片以高级滑入动画出现

### 夜晚模式特效
- **星空背景**: 深蓝色渐变星空背景
- **流星雨**: 随机的流星划过天空
- **星星闪烁**: 背景中的星星会闪烁
- **极光效果**: 顶部有动态的极光效果
- **深色毛玻璃**: 适合夜晚的深色毛玻璃效果

## 🔧 自定义主题

你可以通过修改 `createTheme` 配置来自定义主题颜色：

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#your-primary-color',
    },
    secondary: {
      main: '#your-secondary-color',
    },
    // 更多颜色配置...
  },
});
```

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题，请通过以下方式联系：
- 通过 GitHub Issues 反馈问题
- 查看项目文档获取更多信息

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
