<template>
  <div id="partners-wrapper">
    <p>Samarbetspartners</p>
    <div id="logos-container">
      <div v-for="logoFile in logoFiles" :key="logoFile">
        <img :src="require(`@/assets/${logoFile}`)" alt="Logga" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  data: function() {
    return {
      logoFiles: ['Rise_logo_RGB_Rise_logo.png', 'Vetenskap_RGB_Vetenskap.png'],
    }
  },
}
</script>

<style scoped lang="scss">
#partners-wrapper {
  margin-top: 10rem;
  text-align: center;
  font-weight: bold;
}

#logos-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-content: center;
  column-gap: 4rem;
  justify-items: center;
}
</style>
