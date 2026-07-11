# 无忧行

最好用的免费代理工具，专为Edge和Chrome浏览器设计，能够安全、高效地绕过防火墙（翻墙），轻松访问全球网站。它简单易用，且兼具高效与安全。

## 无忧行 - 使用指南

这是无忧行VPN服务的使用指南网站，基于VitePress构建。

### 📖 网站内容

本网站包含以下内容：

- **使用教程** - 安装、注册、翻墙等详细教程
- **设备支持** - Windows、macOS、Linux、Android、iOS等各平台教程
- **工具软件** - 各种代理工具的使用指南
- **会员服务** - 升级会员的详细说明
- **使用准则** - 公平使用和流量限制说明

### 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview

# 内容与 SEO/GEO 门禁（改动文档后运行，CI 部署前也会跑）
npm run geo:verify
```

### 📁 项目结构

```
docs/
├── .vitepress/          # VitePress配置
├── en/                  # 英文版本
│   ├── guide/          # 英文使用教程
│   ├── devices/        # 英文设备支持
│   ├── tool/           # 英文工具软件
│   ├── membership/     # 英文会员服务
│   └── abuse/          # 英文使用准则
├── guide/              # 中文使用教程
├── devices/            # 中文设备支持
├── tool/               # 中文工具软件
├── membership/         # 中文会员服务
├── abuse/              # 中文使用准则
└── public/             # 静态资源
```

### 🌐 在线访问

- **网站地址**: https://help.jegovpn.com/

### 📝 技术栈

- **VitePress** - 静态站点生成器
- **Vue 3** - 前端框架
- **Markdown** - 内容编写
- **GitHub Actions** - 自动部署

### 🌍 国际化支持

本网站支持中英文双语：

- **中文版本**: `/` - 主要中文内容
- **英文版本**: `/en/` - 英文版本

### 🤝 贡献

欢迎提交Issue和Pull Request来改进文档内容。

### 📄 许可证

MIT License

---

# Jego

The best free proxy tool designed for Edge and Chrome browsers, capable of safely and efficiently bypassing firewalls (proxy), easily accessing global websites. It's simple to use, efficient and secure.

## Jego - User Guide

This is the user guide website for Jego service, built with VitePress.

### 📖 Website Content

This website includes the following content:

- **User Guide** - Detailed tutorials for installation, registration, proxy access, etc.
- **Device Support** - Tutorials for Windows, macOS, Linux, Android, iOS and other platforms
- **Tools & Software** - Usage guides for various proxy tools
- **Membership Services** - Detailed instructions for upgrading membership
- **Usage Guidelines** - Fair use and traffic limit explanations

### 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview build result
npm run docs:preview

# Content & SEO/GEO checks (run after editing docs; CI runs it before deploy)
npm run geo:verify
```

### 📁 Project Structure

```
docs/
├── .vitepress/          # VitePress configuration
├── en/                  # English version
│   ├── guide/          # English user guides
│   ├── devices/        # English device support
│   ├── tool/           # English tools & software
│   ├── membership/     # English membership services
│   └── abuse/          # English usage guidelines
├── guide/              # Chinese user guides
├── devices/            # Chinese device support
├── tool/               # Chinese tools & software
├── membership/         # Chinese membership services
├── abuse/              # Chinese usage guidelines
└── public/             # Static assets
```

### 🌐 Online Access

- **Website**: https://help.jegovpn.com/

### 📝 Tech Stack

- **VitePress** - Static site generator
- **Vue 3** - Frontend framework
- **Markdown** - Content writing
- **GitHub Actions** - Auto deployment

### 🌍 Internationalization Support

This website supports both Chinese and English:

- **Chinese Version**: `/` - Main Chinese content
- **English Version**: `/en/` - English version

### 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve the documentation content.

### 📄 License

MIT License 
