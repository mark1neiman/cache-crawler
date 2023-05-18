const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const xml2js = require('xml2js');

async function parseSitemap(sitemapUrl) {
  const response = await axios.get(sitemapUrl);
  const parser = new xml2js.Parser();
  const parsed = await parser.parseStringPromise(response.data);
  const urls = parsed.urlset.url.map(u => u.loc[0]);

  return urls;
}

async function parseSitemapIndex(sitemapIndexUrl) {
  const response = await axios.get(sitemapIndexUrl);
  const $ = cheerio.load(response.data);
  const sitemapUrls = $('loc').toArray().map(loc => $(loc).text());

  let allUrls = [];
  for (const sitemapUrl of sitemapUrls) {
    const urls = await parseSitemap(sitemapUrl);
    allUrls = allUrls.concat(urls);
  }

  return allUrls;
}

async function saveUrlsToFile(urls, filename) {
  const file = fs.createWriteStream(filename);
  for (const url of urls) {
    file.write(url + '\n');
  }
  file.end();
}

const sitemapIndexUrl = 'https://nanails.eu/sitemap_index.xml';
const filename = 'urls.txt';

parseSitemapIndex(sitemapIndexUrl)
  .then(urls => saveUrlsToFile(urls, filename))
  .then(() => console.log(`Saved URLs to ${filename}`))
  .catch(error => console.error(error));
