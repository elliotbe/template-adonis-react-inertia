# Template Adonis React Inertia

![logo-row](https://i.imgur.com/tqQZONI.png)

Monorepo setup using

- [Adonis](https://adonisjs.com/)
- [React](https://react.dev/)
- [Inertia](https://inertiajs.com/)
- [Vite](https://vitejs.dev/)
- [Nx](https://nx.dev/)

Create your own repository with "Use this template" in github, clone it and `cd` into it then:

```sh
npm install
cp packages/server/.env.example packages/server/.env
npm run dev
```

Hydratation while running vite dev server give some warnings about mismatching props  
Before building, change inside `packages/client/src/entrypoint-csr.tsx`

```ts
createRoot(el).render(<App children={<Inertia {...props} />} />)
```

with

```ts
hydrateRoot(el, <App children={<Inertia {...props} />} />)
```

and you are good to go

```sh
npm run build
```
