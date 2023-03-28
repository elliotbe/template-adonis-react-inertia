import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import App from './App'

createInertiaApp({
  title: () => 'AdonisJS - A fully featured web framework for Node.js',
  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    return pages[`./pages/${name}.tsx`]
  },
  setup({ el, App: Inertia, props }) {
    createRoot(el).render(<App children={<Inertia {...props} />} />)
  },
})
