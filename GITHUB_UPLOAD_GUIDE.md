# Random Bible Verse AI - GitHub 文件上传指南

## 📁 需要上传到 GitHub 的文件

### ✅ 核心源代码文件
```
app/
├── api/                    # API 路由
│   ├── ai/generate/route.ts
│   ├── background/route.ts
│   ├── languages/route.ts
│   ├── topics/route.ts
│   └── verse/random/route.ts
├── globals.css            # 全局样式
├── layout.tsx            # 根布局
└── page.tsx              # 首页

components/                # React 组件
├── AIGenerator.tsx
├── BackgroundSelector.tsx
├── Features.tsx
├── Footer.tsx
├── Header.tsx
├── HomePage.tsx
├── LanguageContext.tsx
├── LanguageSelector.tsx
├── TopicSelector.tsx
├── VerseDisplay.tsx
└── VerseGenerator.tsx

lib/                      # 数据文件
├── background-images-new.ts
└── data.ts

public/                   # 静态资源
├── manifest.json
├── robots.txt
└── sitemap.xml
```

### ✅ 配置文件
```
package.json              # 项目依赖
package-lock.json         # 依赖锁定文件
tsconfig.json            # TypeScript 配置
tailwind.config.js       # Tailwind CSS 配置
postcss.config.js        # PostCSS 配置
next.config.js           # Next.js 配置
```

### ✅ 部署和文档文件
```
README.md                 # 项目说明文档
Dockerfile               # Docker 配置
docker-compose.yml       # Docker Compose 配置
env.example              # 环境变量示例
setup.sh                 # Linux 安装脚本
setup.bat                # Windows 安装脚本
.gitignore               # Git 忽略文件
```

## ❌ 不需要上传的文件（已在 .gitignore 中忽略）

### 🚫 构建和缓存文件
```
.next/                   # Next.js 构建输出
node_modules/            # 依赖包
out/                     # 静态导出输出
build/                   # 构建输出
dist/                    # 分发文件
```

### 🚫 环境和个人文件
```
.env                     # 环境变量（包含敏感信息）
.env.local               # 本地环境变量
.env.development.local   # 开发环境变量
.env.test.local          # 测试环境变量
.env.production.local    # 生产环境变量
next-env.d.ts           # Next.js 类型定义（自动生成）
temp_data.ts            # 临时数据文件
```

### 🚫 IDE 和系统文件
```
.vscode/                 # VS Code 配置
.idea/                   # IntelliJ IDEA 配置
.DS_Store               # macOS 系统文件
Thumbs.db               # Windows 缩略图缓存
*.log                   # 日志文件
```

## 🚀 上传到 GitHub 的步骤

### 1. 初始化 Git（如果还没有）
```bash
cd random-bible-verse.ai
git init
```

### 2. 添加文件到暂存区
```bash
git add .
```

### 3. 提交更改
```bash
git commit -m "Initial commit: Random Bible Verse AI project"
```

### 4. 连接到 GitHub 仓库
```bash
git remote add origin https://github.com/yourusername/random-bible-verse-ai.git
```

### 5. 推送到 GitHub
```bash
git push -u origin main
```

## 📋 项目结构说明

- **app/**: Next.js 13+ App Router 目录
- **components/**: React 组件库
- **lib/**: 工具函数和数据文件
- **public/**: 静态资源文件
- **配置文件**: 各种构建和开发工具配置

## 🔒 安全注意事项

- ✅ 确保 `.env` 文件不被上传（包含 API 密钥等敏感信息）
- ✅ 使用 `env.example` 作为环境变量模板
- ✅ 检查 `temp_data.ts` 是否包含敏感数据
- ✅ 确保没有硬编码的密码或密钥

## 📝 建议的 README.md 内容

建议在 README.md 中包含：
- 项目介绍
- 安装说明
- 环境变量配置
- 运行命令
- 部署说明
- 贡献指南
