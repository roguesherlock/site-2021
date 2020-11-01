import fs from "fs";
import RSS from "rss";
import getAllEssayPreviews from "@/getAllEssayPreviews";
import config from "../siteconfig";

const feed = new RSS({
  title: config.title,
  site_url: config.siteUrl,
  feed_url: config.feedUrl,
  description: config.description,
  webMaster: config.author,
  managingEditor: config.author,
});

getAllEssayPreviews().forEach(({ link, module: { meta } }) => {
  feed.item({
    title: meta.title,
    guid: link,
    url: `${config.siteUrl}/${link}`,
    date: meta.date,
    description: meta.spoiler,
    author: config.author,
  });
});

fs.writeFileSync("./out/feed.xml", feed.xml({ indent: true }));
