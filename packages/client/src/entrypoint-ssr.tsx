import { createInertiaApp } from '@inertiajs/react'
import { renderToString } from 'react-dom/server'
import App from './App'

export default function render(page: string) {
  return createInertiaApp({
    page,
    title: () => 'AdonisJS - A fully featured web framework for Node.js',
    render: renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
      return pages[`./pages/${name}.tsx`]
    },
    setup: ({ App: Inertia, props }) => {
      return <App children={<Inertia {...props} />} />
    },
  })
}
