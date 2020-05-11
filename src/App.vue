<template>
  <div id="app">
    <TopSection />
    <Slide id="hamburger-menu" right>
      <a id="help" href="#">
        <span>Hjälp till</span>
      </a>
      <a id="faq" href="#">
        <span>Vanliga frågor</span>
      </a>
      <a id="contact" href="#">
        <span>Kontakt</span>
      </a>
    </Slide>

    <main id="page-wrap">
      <router-view></router-view>
    </main>
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

import TopSection from '@/components/TopSection.vue'
import { Slide } from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    TopSection,
    Slide,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Nunito:wght@700&display=swap');

body {
  margin: 0;
  box-sizing: border-box;
}

div {
  box-sizing: border-box;
}

h1 {
  font-family: $header-font-family;
}

h2 {
  font-family: $default-font-family;
  font-weight: bold;
  color: $secondary;
}

p,
ul {
  font-family: $default-font-family;
  // font-weight: bold;
  font-size: $default-font-size;
  line-height: 1.5;
  margin-top: 0.5rem;
}

span {
  font-family: $default-font-family;
  font-size: $default-font-size;
  line-height: 1.5;
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
  font-family: $default-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#hamburger-menu {
  display: none;
}

@media (max-width: $mobile-breakpoint) {
  #hamburger-menu {
    display: unset;
  }

  h1,
  h2,
  h3 {
    text-align: center;
  }
}
</style>
