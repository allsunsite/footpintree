export interface SettingItem {
  key: string;
  value: string;
  type: 'string' | 'number' | 'boolean' | 'json';
  group: 'basic' | 'seo' | 'feature' | 'analytics';
  description?: string;
}

export const defaultSettings: SettingItem[] = [
  // 基础设置
  {
    key: "websiteName",
    value: "Pintree 智能书签管理",
    type: "string",
    group: "basic",
    description: "网站名称"
  },
  {
    key: "logoUrl",
    value: "/logo.png",
    type: "string",
    group: "basic",
    description: "网站Logo (建议尺寸: 520x120px)"
  },
  {
    key: "faviconUrl",
    value: "/favicon.ico",
    type: "string",
    group: "basic",
    description: "网站图标"
  },
  {
    key: "copyrightText",
    value: "© 2024 Pintree。保留所有权利。",
    type: "string",
    group: "basic",
    description: "版权信息"
  },
  {
    key: "contactEmail",
    value: "",
    type: "string",
    group: "basic",
    description: "联系邮箱"
  },


  // 社交媒体链接
  {
    key: "githubUrl",
    value: "https://github.com/Pintree-io/pintree",
    type: "string",
    group: "basic",
    description: "GitHub链接"
  },
  {
    key: "discordUrl",
    value: "https://discord.gg/gJTrkHFg",
    type: "string",
    group: "basic",
    description: "Discord链接"
  },
  {
    key: "twitterUrl",
    value: "https://x.com/pintree_io",
    type: "string",
    group: "basic",
    description: "Twitter链接"
  },
  {
    key: "youtubeUrl",
    value: "https://www.youtube.com/channel/UCMvuKFthQyn4eKgJwklOMrw",
    type: "string",
    group: "basic",
    description: "YouTube频道链接"
  },
  {
    key: "linkedinUrl",
    value: "https://linkedin.com/company/pintree",
    type: "string",
    group: "basic",
    description: "LinkedIn链接"
  },
  {
    key: "weixinUrl",
    value: "https://weixin.qq.com/pintree",
    type: "string",
    group: "basic",
    description: "微信公众号链接"
  },
  {
    key: "weiboUrl",
    value: "https://weibo.com/pintree",
    type: "string",
    group: "basic",
    description: "微博主页链接"
  },
  {
    key: "bilibiliUrl",
    value: "https://dribbble.com/Pintree",
    type: "string",
    group: "basic",
    description: "B站主页链接"
  },
  {
    key: "zhihuUrl",
    value: "https://zhihu.com/people/pintree",
    type: "string",
    group: "basic",
    description: "知乎主页链接"
  },

  // SEO设置
  {
    key: "siteTitle",
    value: "Pintree - 智能书签管理与组织平台",
    type: "string",
    group: "seo",
    description: "网站标题"
  },
  {
    key: "description",
    value: "使用 Pintree 高效整理、管理和分享你的书签。支持AI智能归类、自定义收藏集、便捷分享，助力提升生产力。",
    type: "string",
    group: "seo",
    description: "网站描述"
  },
  {
    key: "keywords",
    value: "书签管理, 书签整理, 书签收藏, 书签分享, 效率工具, 网站管理, 链接管理, 书签标签, AI书签, 数字化整理",
    type: "string",
    group: "seo",
    description: "关键词(用逗号分隔)"
  },
  {
    key: "siteUrl",
    value: "https://pintree.io",
    type: "string",
    group: "seo",
    description: "网站URL"
  },
  {
    key: "ogImage",
    value: "https://pintree.io/og-image.png",
    type: "string",
    group: "seo",
    description: "社交分享图片"
  },
  {
    key: "robots",
    value: "index, follow",
    type: "string",
    group: "seo",
    description: "搜索引擎爬虫设置"
  },
  {
    key: "author",
    value: "Pintree 团队",
    type: "string",
    group: "seo",
    description: "作者信息"
  },

  // 统计分析
  {
    key: "googleAnalyticsId",
    value: "",
    type: "string",
    group: "analytics",
    description: "Google Analytics ID"
  },
  {
    key: "clarityId",
    value: "",
    type: "string",
    group: "analytics",
    description: "Microsoft Clarity ID"
  },
  {
    key: "umamiId",
    value: "",
    type: "string",
    group: "analytics",
    description: "Umami Analytics ID"
  },
  {
    key: "plausibleId",
    value: "",
    type: "string",
    group: "analytics",
    description: "Plausible Analytics ID"
  },
  {
    key: "gtagId",
    value: "",
    type: "string",
    group: "analytics",
    description: "Google Tag ID"
  },

  // 功能设置
  {
    key: "enableSearch",
    value: "true",
    type: "boolean",
    group: "feature",
    description: "启用搜索功能"
  },
  {
    key: "enableBackToTop",
    value: "true",
    type: "boolean",
    group: "feature",
    description: "启用返回顶部按钮"
  },
  {
    key: "enableSidebarAds",
    value: "false",
    type: "boolean",
    group: "feature",
    description: "启用侧边栏广告"
  },
  {
    key: "sidebarAdsContent",
    value: "",
    type: "string",
    group: "feature",
    description: "侧边栏广告内容"
  },
  {
    key: "enableCtaButton",
    value: "true",
    type: "boolean",
    group: "feature",
    description: "启用CTA按钮"
  },
  {
    key: "ctaButtonText",
    value: "立即领取你的 Pintree",
    type: "string",
    group: "feature",
    description: "CTA按钮文字"
  },
  {
    key: "ctaButtonLink",
    value: "https://pintree.io",
    type: "string",
    group: "feature",
    description: "CTA按钮链接"
  },
  {
    key: "ctaButtonStyle",
    value: "primary",
    type: "string",
    group: "feature",
    description: "CTA按钮样式"
  },
  {
    key: "enableHeroBanner",
    value: "true",
    type: "boolean",
    group: "feature",
    description: "启用Hero Banner"
  },
  {
    key: "heroBannerTitle",
    value: "高效整理与分享你的书签",
    type: "string",
    group: "feature",
    description: "Hero Banner标题"
  },
  {
    key: "heroBannerDescription",
    value: "用 Pintree 创建、管理和分享个性化书签收藏集，提升你的网络效率。",
    type: "string",
    group: "feature",
    description: "Hero Banner描述"
  },
  {
    key: "heroBannerImage",
    value: "",
    type: "string",
    group: "feature",
    description: "Hero Banner图片"
  },
  {
    key: "heroBannerButtonText",
    value: "访问 Pintree.io",
    type: "string",
    group: "feature",
    description: "Hero Banner按钮文字"
  },
  {
    key: "heroBannerButtonLink",
    value: "https://pintree.io",
    type: "string",
    group: "feature",
    description: "Hero Banner按钮链接"
  },
  {
    key: "heroBannerSponsorText",
    value: "赞助：",
    type: "string",
    group: "feature",
    description: "Hero Banner赞助商文本"
  },
  {
    key: "enableBanner",
    value: "false",
    type: "boolean",
    group: "feature",
    description: "启用普通Banner"
  },
  {
    key: "bannerContent",
    value: "",
    type: "string",
    group: "feature",
    description: "Banner内容"
  },
  {
    key: "bannerStyle",
    value: "info",
    type: "string",
    group: "feature",
    description: "Banner样式"
  },
  {
    key: "enableCarousel",
    value: "false",
    type: "boolean",
    group: "feature",
    description: "启用轮播"
  },
  // {
  //   key: "carouselItems",
  //   value: "[]",
  //   type: "json",
  //   group: "feature",
  //   description: "轮播项目"
  // },
  {
    key: "carouselImageStates",
    value: "[true,true,true,true,true,true]",
    type: "json",
    group: "feature",
    description: "轮播图片显示状态"
  },
  {
    key: "carouselImages",
    value: "",
    type: "string",
    group: "feature",
    description: "轮播图片"
  },
  {
    key: "carouselImageHyperlinks",
    value: "https://pintree.io|https://pintree.io|https://pintree.io|https://pintree.io|https://pintree.io|https://pintree.io",
    type: "json",
    group: "feature",
    description: "轮播图片跳转链接"
  },
  {
    key: "enableTopBanner",
    value: "false",
    type: "boolean",
    group: "feature",
    description: "启用顶部通知Banner"
  },
  {
    key: "topBannerTitle",
    value: "Pintree 1.0 正式发布",
    type: "string",
    group: "feature",
    description: "Banner标题"
  },
  {
    key: "topBannerDescription",
    value: "一款帮助你收集、整理和分享喜爱网站的书签管理工具。",
    type: "string",
    group: "feature",
    description: "Banner描述"
  },
  {
    key: "topBannerButtonText",
    value: "了解更多",
    type: "string",
    group: "feature",
    description: "Banner按钮文本"
  },
  {
    key: "topBannerButtonLink",
    value: "https://github.com/Pintree-io/pintree",
    type: "string",
    group: "feature",
    description: "Banner按钮链接"
  },
  {
    key: "sidebarAdsTitle",
    value: "高效管理你的书签",
    type: "string",
    group: "feature",
    description: "侧边栏广告标题"
  },
  {
    key: "sidebarAdsDescription",
    value: "Pintree 帮你优雅地收集、整理和分享你喜欢的网站。",
    type: "string",
    group: "feature",
    description: "侧边栏广告描述"
  },
  {
    key: "sidebarAdsImageUrl",
    value: "/assets/spaces-preview.png",
    type: "string",
    group: "feature",
    description: "侧边栏广告图片"
  },
  {
    key: "sidebarAdsButtonText",
    value: "立即开始",
    type: "string",
    group: "feature",
    description: "侧边栏广告按钮文本"
  },
  {
    key: "sidebarAdsButtonUrl",
    value: "https://github.com/Pintree-io/pintree",
    type: "string",
    group: "feature",
    description: "侧边栏广告按钮链接"
  }
];

export const defaultImages = [
  {
    name: "logo.png",
    image: "/default-images/logo.png",
    type: "default",
    settingKeys: [
      {
        key: "logoUrl",
      },
    ],
  },
  {
    name: "favicon.ico",
    image: "/default-images/favicon.ico",
    type: "default",
    settingKeys: [
      {
        key: "faviconUrl",
      },
    ],
  },
  {
    name: "og-image.png",
    image: "/default-images/og-image.png",
    type: "default",
    settingKeys: [
      {
        key: "ogImage",
      },
    ],
  },
  {
    name: "spaces-preview.png",
    image: "/default-images/spaces-preview.png",
    type: "default",
    settingKeys: [
      {
        key: "sidebarAdsImageUrl",
      },
    ],
  },
  {
    name: "carousel-images",
    images: [
      "/default-images/carousel-1.jpg",
      "/default-images/carousel-2.jpg", 
      "/default-images/carousel-3.jpg",
      "/default-images/carousel-4.jpg",
      "/default-images/carousel-5.jpg",
      "/default-images/carousel-6.jpg"
    ],
    type: "default",
    settingKeys: [
      {
        key: "carouselImages",
      },
    ],
  }
];
