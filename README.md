# BaileyH-17.github.io

个人技术主页，使用 Astro 构建，内容重点放在端侧 AI、模型推理优化、多模态视觉和智能系统工程。

## 当前代码架构

```text
.
├── astro.config.mjs          # Astro 站点配置
├── package.json              # 开发、构建、检查脚本
├── tsconfig.json             # Astro TypeScript 配置
└── src/
    ├── components/
    │   └── ProjectCard.astro # 首页项目卡片
    ├── data/
    │   └── site.ts           # 个人资料、技能和项目数据
    ├── layouts/
    │   └── BaseLayout.astro  # 全站 HTML 外壳、导航、页脚、SEO
    ├── pages/
    │   ├── index.astro       # 首页：首屏、经历、项目列表
    │   └── projects/
    │       └── [slug].astro  # 项目详情动态路由
    └── styles/
        └── global.css        # 全站设计系统与响应式样式
public/
└── media/
    ├── images/               # 头像、项目图片及后续图片素材
    └── videos/               # 项目演示视频（WebM/MP4）
```

## 页面路由

- `/`：个人主页，包含技术定位、关键成果、实习经历和精选项目。
- `/projects/edge-ai-deployment/`：端侧 AI 部署实习详情。
- `/projects/remote-sensing-segmentation/`：遥感视频推理分割详情。
- `/projects/tcm-llm/`：中医大模型算法开发详情。
- `/projects/tto-microwave-source/`：高功率微波源设计详情。

项目详情页目前是普通文字结构，项目内容统一维护在 `src/data/site.ts`，后续可继续补充图片、架构图、代码、论文和演示视频。静态媒体统一放在 `public/media/` 下，构建后会以 `/media/...` 路径访问。

## 本地运行

需要 Node.js 22.12+（当前 Astro 版本要求）：

```bash
npm install
npm run dev
```

然后打开 `http://localhost:4321`。生产构建与预览：

```bash
npm run build
npm run preview
```

修改个人信息或项目内容时，优先编辑 `src/data/site.ts`；修改全局视觉时编辑 `src/styles/global.css`。Astro 会在构建时为每个项目生成独立静态详情页。

## 发布到 GitHub Pages

本项目继续使用 GitHub Pages 默认地址，无需购买或配置独立域名：

```text
https://baileyh-17.github.io/
```

仓库已包含 `.github/workflows/deploy.yml`。将代码推送到 `main` 分支后，GitHub Actions 会使用 Node.js 22 自动执行 `npm ci`、`npm run build`，再将 `dist/` 发布到 GitHub Pages。

首次启用时，在 GitHub 仓库的 `Settings → Pages` 中将 `Build and deployment` 的来源设置为 `GitHub Actions`。之后每次推送到 `main` 都会自动更新主页。
