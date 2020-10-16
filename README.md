# Svelte URL

Barebones routing with reactive URLs

https://svelte.dev/repl/5abaac000b164aa1aacc6051d5c4f584?version=3

```svelte
{#if $url.pathname === '/'}
  <h1>Home Sweet Home</h1>
{:else if $url.pathname === '/about'}
  <h1>About What?</h1>
{:else}
  <h1>404</h1>
{/if}
```

## How to use

This is not an NPM package. The heart of this repo is at [src/url.js](./src/url.js). It's only a single file so feel free to copy-paste it into your project.

## Try it out

```bash
# Copy project with degit
$ npx degit bluwy/svelte-url svelte-app

# Change to project directory
$ cd svelte-app

# Install dependencies
$ pnpm install

# Build project
$ pnpm build

# Serve SPA at http://localhost:5000
$ pnpm serve:spa

# Or serve SSR at http://localhost:5001
$ pnpm serve:ssr
```

## License

MIT
