<script context="module">
  import url from './url'

  export function setSsrHref(v) {
    url.ssrSet(v)
  }
</script>

<script>
  function handleLinkClick(e) {
    e.preventDefault()
    const href = e.target.href
    history.pushState(href, '', href)
  }
</script>

<nav>
  <a href="/" on:click={handleLinkClick}>Home</a>
  <a href="/about" on:click={handleLinkClick}>About</a>
  <a href="/404" on:click={handleLinkClick}>404</a>
</nav>

{#if $url.pathname === '/'}
  <h1>Home Sweet Home</h1>
{:else if $url.pathname === '/about'}
  <h1>About What?</h1>
{:else}
  <h1>404</h1>
{/if}
