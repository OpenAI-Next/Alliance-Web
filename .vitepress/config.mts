import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "OpenAI-Next",
    description: "AI Services Alliance",
    cleanUrls: true,//注意需要开启 nginx 的 伪静态！！
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/document/start'},
        ],

        sidebar: [
            {
                text: '文档',
                link: '/document/start',
            },
            {
                text: 'LLM',
                items: [
                    {text: '简介', link: '/llm/intro'},
                    {text: '使用', link: '/llm/usage'},
                    {text: 'API', link: '/llm/api'},
                    {text: 'FAQ', link: '/llm/faq'},
                ]
            },
            {
                text: '图像生成',
                items: [
                    {text: '简介', link: '/image-generation/intro'},
                    {text: '使用', link: '/image-generation/usage'},
                    {text: 'API', link: '/image-generation/api'},
                    {text: 'FAQ', link: '/image-generation/faq'},
                ]
            },
            {
                text: 'OpenAI-Next',
                items: [
                    {text: '关于我们', link: '/about-us'},
                    {text: '加入我们', link: '/join-us'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/OpenAI-Next'},
            {icon: 'discord', link: 'https://github.com/OpenAI-Next'},
            {icon: 'x', link: 'https://github.com/OpenAI-Next'},
        ],

        footer: {
            copyright: "© OpenAI-Next-Alliance",
        },

        search: {
            provider: 'local',
            options: {}
        },

        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },

        editLink: {
            pattern: "https://github.com/OpenAI-Next/OpenAI-Next-Alliance/edit/main/docs/",
            text: "提供修改建议",
        },

        outline: {
            label: "页面导航",
            level: 'deep'
        },

        darkModeSwitchLabel: "切换主题",

        sidebarMenuLabel: "菜单",
        darkModeSwitchTitle: "日间模式",
        lightModeSwitchTitle: "夜间模式",
        returnToTopLabel: "返回顶部",

        langMenuLabel: "语言",
        externalLinkIcon: true,

    },

})
