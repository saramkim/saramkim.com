/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://saramkim.com',
  generateRobotsTxt: true, // robots.txt 자동 생성
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/accounts/*'], // robots.txt에서 제외한 경로와 동일하게 설정
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        disallow: ['/accounts'],
        allow: '/',
      },
    ],
  },
};
