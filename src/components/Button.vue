<template>
  <button
    :class="[
      'styled-button',
      inverted ? 'inverted-colors' : 'default-colors',
      bigger ? 'bigger-button' : '',
    ]"
    id="styled-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: { inverted: Boolean, bigger: Boolean },
  computed: {},
}
</script>

<style scoped lang="scss">
.styled-button {
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border: 0;
  font-family: 'Nunito';
  font-weight: bold;
  cursor: pointer;
}

.bigger-button {
  padding: 0.7rem 2.3rem;
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
