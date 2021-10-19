<template>
  <h2>{{ title }}</h2>
  <div class="counter">
    <button @click="subtract()">-</button>
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
  </div>
  <div class="children">
    <slot />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const title = ref('Vue')
    const count = ref(0)
    const add = () => (count.value = count.value + 1)
    const subtract = () => (count.value = count.value - 1)

    return {
      title,
      count,
      add,
      subtract,
    }
  },
}
</script>
