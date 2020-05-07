<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="scss">
.card-container {
  border-radius: 1rem;
  border: $lightgray 1px solid;
  // margin: 1rem;
  padding: 2rem;
}
</style>
