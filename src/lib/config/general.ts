import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'dracula',
    text: 'Dark',
  },
  {
    name: 'night',
    text: 'Night',
  },
  {
    name: 'cmyk',
    text: 'Light',
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  search:{
    colors: true,
    provider: 'google'
  },
  nav: [
    {
      text: 'About', // 按钮名称
      link: '/about' // 指向的网页，可以填写其他网页
    },
  ]
}


export const footer: FooterConfig = {
  /*nav: [
    {
      link: 'https://discord.gg/hpsWkVXQzJ',
      text: 'discord server',
    },
    {
      link: 'https://github.com/littlezhaidi',
      text: 'github',
    },
  ],*/
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: '2-digit',
  },
}

export const feed: FeedConfig = {}
