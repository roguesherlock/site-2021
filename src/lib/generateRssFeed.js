import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'

import { getAllMusings } from './getAllMusings'

export async function generateRssFeed() {
  let musings = await getAllMusings()
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let author = {
    name: 'Akash',
    email: 'yo@aaakash.xyz',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Akash\'s musings',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let musing of musings) {
    let url = `${siteUrl}/musings/${musing.slug}`
    let html = ReactDOMServer.renderToStaticMarkup(
      <musing.component isRssFeed />
    )

    feed.addItem({
      title: musing.title,
      id: url,
      link: url,
      description: musing.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(musing.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
