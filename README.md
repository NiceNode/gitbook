# Website

This website is built using [VitePress](https://vitepress.dev/), a modern static website generator.

### Installation

```
npm install
```

### Local Development

```
npm run docs:dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run docs:build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The main branch is automatically deployed to https://docs.nicenode.xyz. Pull requests are deployed to preview URLs that are published in the PR.