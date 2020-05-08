<template>
  <div id="landing-page-wrapper">
    <top-section></top-section>
    <Banner />
    <div id="about-and-why">
      <AboutUs />
      <WhyFevermap />
    </div>
    <img id="ui-pictures" src="@/assets/ui-overview-web.png" />
    <HowToContribute />
    <Partners />
    <Footer />
  </div>
</template>

<script>
import TopSection from '@/sections/TopSection.vue'
import Banner from '@/sections/Banner.vue'
import AboutUs from '@/sections/AboutUs.vue'
import WhyFevermap from '@/sections/WhyFevermap.vue'
import HowToContribute from '@/sections/HowToContribute.vue'
import Footer from '@/sections/Footer.vue'
import Partners from '@/sections/Partners.vue'
export default {
  name: 'LandingPage',
  components: {
    TopSection,
    Banner,
    AboutUs,
    WhyFevermap,
    HowToContribute,
    Footer,
    Partners,
  },
}
</script>

<style lang="scss">
#about-and-why {
  display: grid;
  grid-template-columns: auto minmax(20rem, 0.4fr);
  column-gap: 5rem;
}

#ui-pictures {
  display: block;
  margin: auto;
  // margin-left: auto;
  // margin-right: auto;
}

// .site-padding
#landing-page-wrapper > div {
  padding-left: 4rem;
  padding-right: 4rem;
  box-sizing: border-box;
}
</style>
