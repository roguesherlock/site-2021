import glob from 'fast-glob'
import * as path from 'path'

async function importMusing(musingFilename) {
  let { meta, default: component } = await import(
    `../pages/musings/${musingFilename}`
  )
  return {
    slug: musingFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllMusings() {
  let musingFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/musings'),
  })

  let musings = await Promise.all(musingFilenames.map(importMusing))

  return musings.sort((a, z) => new Date(z.date) - new Date(a.date))
}
