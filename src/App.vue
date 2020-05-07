<template>
  <div id="app">
    <top-section class="site-padding"></top-section>
    <Banner class="site-padding" />
    <div id="about-and-why">
      <AboutUs class="site-padding" />
      <WhyFevermap />
    </div>
    <img id="ui-pictures" src="@/assets/ui-overview-web.png" />
    <HowToContribute />
  </div>
</template>

<script>
import TopSection from '@/sections/TopSection.vue'
import Banner from '@/sections/Banner.vue'
import AboutUs from '@/sections/AboutUs.vue'
import WhyFevermap from '@/sections/WhyFevermap.vue'
import HowToContribute from '@/sections/HowToContribute.vue'

export default {
  name: 'App',
  components: {
    TopSection,
    Banner,
    AboutUs,
    WhyFevermap,
    HowToContribute,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Nunito:wght@700&display=swap');

#about-and-why {
  display: grid;
  grid-template-columns: auto max-content;
  column-gap: 5rem;
}

#ui-pictures {
  display: block;
  margin: auto;
  // margin-left: auto;
  // margin-right: auto;
}

body {
  margin: 0;
}

h1 {
  font-family: 'Nunito', sans-serif;
}

h2 {
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  color: $secondary;
}

// .site-padding
#app > div {
  padding-left: 4rem;
  padding-right: 4rem;
  box-sizing: border-box;
}

#app {
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
