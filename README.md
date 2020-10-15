# Svelte URL

Barebones routing with reactive URL.

https://svelte.dev/repl/5abaac000b164aa1aacc6051d5c4f584?version=3.29.0

```svelte
{#if $url.pathname === '/'}
  <h1>Home Sweet Home</h1>
{:else if $url.pathname === '/about'}
  <h1>About What?</h1>
{:else}
  <h1>404</h1>
{/if}
```

# Try it out

```bash
# Copy project with degit
$ npx degit bluwy/svelte-url svelte-app

# Change to project directory
$ cd svelte-app

# Install dependencies
$ pnpm install

# Nuild project
$ pnpm build

# Serve SPA at http://localhost:5000
$ pnpm serve:spa

# Or serve SSR at http://localhost:5001
$ pnpm serve:ssr
```

# License

MIT
