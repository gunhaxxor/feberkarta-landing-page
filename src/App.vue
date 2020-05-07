<template>
  <div id="app">
    <top-section></top-section>
    <Banner />
    <AboutUs />
    <img src="@/assets/ui-overview-web.png" />
    <WhyFevermap />
  </div>
</template>

<script>
import TopSection from '@/sections/TopSection.vue'
import Banner from '@/sections/Banner.vue'
import AboutUs from '@/sections/AboutUs.vue'
import WhyFevermap from '@/sections/WhyFevermap.vue'

export default {
  name: 'App',
  components: {
    TopSection,
    Banner,
    AboutUs,
    WhyFevermap,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
