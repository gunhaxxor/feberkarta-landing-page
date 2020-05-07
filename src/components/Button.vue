<template>
  <button
    :class="[inverted ? 'inverted-colors' : 'default-colors']"
    id="styled-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: { inverted: Boolean },
  computed: {},
}
</script>

<style lang="scss">
#styled-button {
  padding: 0.7rem 1rem;
  border-radius: 2rem;
  border: 0;
  font-family: 'Nunito';
}

.default-colors {
  background-color: $secondary;
  color: $white;
}

.inverted-colors {
  background-color: $white;
  color: $secondary;
}
</style>
