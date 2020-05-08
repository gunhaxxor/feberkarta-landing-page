<template>
  <div id="app">
    <router-view></router-view>
    <!-- <top-section></top-section>
    <Banner />
    <div id="about-and-why">
      <AboutUs />
      <WhyFevermap />
    </div>
    <Footer />
    <img id="ui-pictures" src="@/assets/ui-overview-web.png" />
    <HowToContribute /> -->
  </div>
</template>

<script>
// import TopSection from '@/sections/TopSection.vue'
// import Banner from '@/sections/Banner.vue'
// import AboutUs from '@/sections/AboutUs.vue'
// import WhyFevermap from '@/sections/WhyFevermap.vue'
// import HowToContribute from '@/sections/HowToContribute.vue'
// import Footer from '@/sections/Footer.vue'

export default {
  name: 'App',
  // components: {
  //   TopSection,
  //   Banner,
  //   AboutUs,
  //   WhyFevermap,
  //   HowToContribute,
  //   Footer,
  // },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Nunito:wght@700&display=swap');

$default-font-size: 0.9rem;

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

h1 {
  font-family: 'Nunito', sans-serif;
}

h2 {
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  color: $secondary;
}

p,
ul {
  font-family: 'Karla', sans-serif;
  // font-weight: bold;
  font-size: $default-font-size;
  line-height: 1.5;
  margin-top: 0.5rem;
}

ul {
  padding-inline-start: 1rem;
}

.small-text,
.small-text * {
  // font-size: 0.8em;
  font-size: $default-font-size * 0.8;
}

#app {
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
