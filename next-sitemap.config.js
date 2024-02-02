/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://www.mskremont.pro',
  generateRobotsTxt: true,
}