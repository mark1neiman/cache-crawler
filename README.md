# Cache Crawler
## Description
This repository contains a powerful script for WordPress website optimization called the Cache Crawler. It systematically caches pages on your WordPress website by crawling through URLs provided in the sitemap.xml. 
The sitemap.xml is generated using the renowned Yoast SEO plugin, thus ensuring accurate and up-to-date URLs. The caching operation is performed using the highly efficient WP Fastest Cache plugin.

With Cache Crawler, you can improve your website's performance, ensure smoother user experience, and optimize your website's load speed.

Features
Efficient Caching: Crawls and caches every page of your WordPress website.
Seamless Integration: Works perfectly with the Yoast SEO plugin for sitemap generation and WP Fastest Cache plugin for caching operations.
Fully Automated: Once set up, the script will automatically crawl and cache new pages.
Improved Performance: By caching pages, it significantly decreases the load time, providing a smoother user experience.

## Installation

1. Clone this repository
2. npm Install
3. In getUrls.js change sitemap url 
```bash
const sitemapIndexUrl = 'https://website.com/sitemap_index.xml';
```
4. Start the Url collector
```bash
node getUrls.js
```
5. Start the Crawlet
```bash
node crawlet.js
```
