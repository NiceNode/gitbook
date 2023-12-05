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

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. To see a full list
of markdown formats, go to [Vitepress markdown guide](https://vitepress.dev/guide/markdown)

### NodeSpec docs

Clone the main `nice-node` repository and run `npm run docs:nodeSpec`. Copy the files from `nicenode/docs/` in the main repo to here at `documentation/NodeSpec/` **but do not replace NodeSpec/index.md**

### Build

```
npm run docs:build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The main branch is automatically deployed to https://docs.nicenode.xyz. Pull requests are deployed to preview URLs that are published in the PR.
