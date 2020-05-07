<template>
  <div id="how-to-help-wrapper">
    <h1>Hur du kan hjälpa till</h1>
    <div id="how-to-help-grid">
      <div v-for="n in 6" :key="n">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          distinctio?
        </p>
        <Button> Gunnar är bäst </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'HowToContribute',
  components: { Button },
}
</script>

<style lang="scss">
#how-to-help-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 3rem;
}
</style>
