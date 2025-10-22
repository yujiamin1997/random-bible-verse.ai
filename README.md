# Random Bible Verse Generator - AI Powered

一个基于Next.js的AI驱动随机圣经片段生成器，支持多语言、主题分类和美丽背景。

## 🌟 功能特性

- 🤖 **AI生成** - 使用AI生成个性化的圣经片段和背景图片
- 🌍 **多语言支持** - 支持英语、中文、阿拉伯语、西班牙语、葡萄牙语
- 📚 **主题分类** - 8个主题分类：爱、希望、信心、平安、力量、智慧、安慰、引导
- 🎨 **美丽背景** - 100+张精心挑选的背景图片，支持AI生成
- 📱 **响应式设计** - 完美适配桌面、平板和手机设备
- ⚡ **现代化技术** - 使用Next.js 14、TypeScript、Tailwind CSS
- 🔍 **SEO优化** - 完整的SEO元标签和结构化数据
- ♿ **无障碍性** - 支持键盘导航和高对比度模式

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd random-bible-verse.ai
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

4. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构

```
random-bible-verse.ai/
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   │   ├── verse/         # 圣经片段相关API
│   │   ├── topics/        # 主题相关API
│   │   ├── background/    # 背景图片API
│   │   ├── ai/           # AI生成API
│   │   └── languages/    # 语言配置API
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 主页面
├── components/           # React组件
│   ├── VerseGenerator.tsx    # 主生成器组件
│   ├── VerseDisplay.tsx      # 圣经片段显示组件
│   ├── TopicSelector.tsx     # 主题选择器
│   ├── LanguageSelector.tsx  # 语言选择器
│   ├── BackgroundSelector.tsx # 背景选择器
│   ├── AIGenerator.tsx       # AI生成器
│   ├── Header.tsx           # 头部组件
│   └── Footer.tsx           # 底部组件
├── lib/                  # 工具库
│   └── data.ts          # 数据存储和工具函数
├── public/              # 静态资源
│   ├── manifest.json    # PWA配置
│   ├── robots.txt       # 搜索引擎配置
│   └── sitemap.xml      # 网站地图
├── package.json         # 项目配置
├── tailwind.config.js   # Tailwind配置
├── tsconfig.json        # TypeScript配置
└── next.config.js       # Next.js配置
```

## 🔧 API接口

### 圣经片段API

- `GET /api/verse/random` - 获取随机圣经片段
  - 参数: `language`, `topic`
  - 返回: 圣经片段对象

### 主题API

- `GET /api/topics` - 根据主题获取圣经片段
- `POST /api/topics` - 获取可用主题列表

### 背景图片API

- `GET /api/background` - 获取随机背景图片
- `POST /api/background` - 获取所有背景图片

### AI生成API

- `POST /api/ai/generate` - 生成AI圣经片段
- `PUT /api/ai/generate` - 生成AI背景图片

### 语言API

- `GET /api/languages` - 获取支持的语言列表

## 🎨 自定义配置

### 添加新语言

1. 在 `lib/data.ts` 中的 `languages` 数组添加新语言
2. 在 `bibleVerses` 数组中添加对应语言的圣经片段
3. 更新 `LanguageSelector` 组件

### 添加新主题

1. 在 `lib/data.ts` 中的 `topics` 数组添加新主题
2. 在 `bibleVerses` 数组中添加对应主题的圣经片段
3. 更新 `TopicSelector` 组件

### 添加新背景图片

1. 在 `lib/data.ts` 中的 `backgroundImages` 数组添加新图片
2. 确保图片URL可访问
3. 更新 `BackgroundSelector` 组件

## 🤖 AI集成

项目预留了AI接口，可以集成以下服务：

### 圣经片段生成
- OpenAI GPT-4
- Anthropic Claude
- Google Bard

### 背景图片生成
- DALL-E 3
- Midjourney
- Stable Diffusion

### 配置AI服务

1. 在环境变量中设置API密钥
2. 更新 `app/api/ai/generate/route.ts` 中的实现
3. 根据需要调整prompt模板

## 🚀 部署

### Vercel部署

1. 连接GitHub仓库到Vercel
2. 设置环境变量
3. 自动部署

### Docker部署

```bash
# 构建镜像
docker build -t random-bible-verse-ai .

# 运行容器
docker run -p 3000:3000 random-bible-verse-ai
```

### 传统服务器部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📊 性能优化

- 使用Next.js Image组件优化图片加载
- 实现组件懒加载
- 使用Tailwind CSS进行样式优化
- 实现API响应缓存
- 使用PWA提升用户体验

## 🔒 安全考虑

- API请求限制
- 输入验证和清理
- CORS配置
- 环境变量保护
- HTTPS强制使用

## 📈 SEO优化

- 完整的meta标签
- 结构化数据
- 网站地图
- robots.txt配置
- 多语言支持
- 社交媒体优化

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

© 2024 Random Bible Verse Generator. All rights reserved.

## 📞 联系方式

- 邮箱: contact@randombibleverse.com
- GitHub: [项目地址]
- Twitter: @randombibleverse

## 🙏 致谢

感谢所有开源项目的贡献者，特别是：
- Next.js团队
- Tailwind CSS团队
- Lucide React图标库
- Unsplash图片服务