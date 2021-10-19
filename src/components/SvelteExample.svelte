<script>
  let children
  let count = 0
  const title = 'Svelte'

  function add() {
    count += 1
  }

  function subtract() {
    count -= 1
  }
</script>

<h2>{title}</h2>
<div class="counter">
  <button on:click={subtract}>-</button>
  <pre>{ count }</pre>
  <button on:click={add}>+</button>
</div>
<div class="children">
  <slot />
</div>
