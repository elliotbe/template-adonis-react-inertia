import Application from '@ioc:Adonis/Core/Application'
import Logger from '@ioc:Adonis/Core/Logger'
import View from '@ioc:Adonis/Core/View'
import fs from 'fs-extra'

type EntryPoints = {
  js: string[]
  css: string[]
}

type PageImport = {
  file: string
  src: string
  css?: string[]
  assets?: string[]
  isEntry?: boolean
}

const loadEntrypoints = () => {
  const manifestPath = Application.publicPath('assets', 'manifest.json')

  const entrypoints: EntryPoints = { js: [], css: [] }

  try {
    const manifestText = fs.readFileSync(manifestPath, 'utf-8')
    const manifest: Record<string, PageImport> = JSON.parse(manifestText)
    const pageImports =
      manifest[Application.inDev ? 'src/entrypoint-ssr.tsx' : 'src/entrypoint-csr.tsx']

    if (pageImports) {
      entrypoints.js.push(pageImports.file)
      pageImports.css?.forEach((css: string) => entrypoints.css.push(css))
    }

    return entrypoints
  } catch (e) {
    if (e.code === 'ENOENT') {
      Logger.error(`Could not find ${manifestPath} to load entries`)
      return entrypoints
    }
    throw e
  }
}

View.global('entrypoints', () => loadEntrypoints())
View.global('inDev', Application.inDev)
