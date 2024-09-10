# v4 to v5 examples

This is a a reference repository to understand v4 to v5 migration

- You will find multiple ways to build a plugin in v5 in the `./plugins` folder.
- You will see a Strapi application in action and loading those plugins in `./app/strapi`

- This repo also shows how you can use Strapi v5 inside a pnpm monorepository and build your plugins independently

# Plugins knowledge

## Plugin pre-bundling

In these examples we customize the vite config in `src/admin/vite.config.ts` to include some of the example plugins in a special config. We do that to demonstrate plugins can be in plain CommonJs and still work. We require this config because the plugins are considered "loca" by `vite`

> if the plugins you build are in their own project and installed in node*modules you don't need to do it*

- Local plugins in `src/plugins/*` need to be in ESM or need to be added to the custom vite config in `src/admin/vite.config.ts` following this [documentation](https://vitejs.dev/guide/dep-pre-bundling#monorepos-and-linked-dependencies)

- Monorepo or linked plugins need to be in ESM or need to be added to the custom vite config in `src/admin/vite.config.ts` following this [documentation](https://vitejs.dev/guide/dep-pre-bundling#monorepos-and-linked-dependencies)

Because we had to force the pre-bundling for local stuff to demonstrate the different usecase we need to force vite to rebuild correctly on each change. For testing you can run NODE_ENV=some-random-stuff pnpm develop in the app. Make sure to change the name everytime (_disclaimer: not a clean approach_)
