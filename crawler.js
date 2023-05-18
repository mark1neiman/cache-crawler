const axios = require('axios');
const fs = require('fs').promises;

async function crawlWebsite(url) {
  console.log(`Crawling: ${url}`);
  try {
    await axios.get(url);
    console.log(`Crawled: ${url}`);
  } catch (error) {
    console.error(`Failed to crawl "${url}": ${error.message}`);
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function crawlUrlsFromFile(filePath) {
  const data = await fs.readFile(filePath, 'utf8');
  const urls = data.split('\n').filter(Boolean);

  for (let i = 0; i < urls.length; i++) {
    await crawlWebsite(urls[i]);
    await sleep(3000);  // wait for 5 seconds before next crawl
  }
}

const filePath = './urls.txt';
crawlUrlsFromFile(filePath);
