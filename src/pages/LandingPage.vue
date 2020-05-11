<template>
  <div id="landing-page-wrapper">
    <Banner />
    <div id="about-and-why">
      <AboutUs class="about-area" />
      <WhyFevermap class="why-area" />
      <img id="ui-pictures" src="@/assets/ui-overview-web.png" />
    </div>

    <HowToContribute />
    <Partners />
    <Footer />
  </div>
</template>

<script>
import Banner from '@/sections/Banner.vue'
import AboutUs from '@/sections/AboutUs.vue'
import WhyFevermap from '@/sections/WhyFevermap.vue'
import HowToContribute from '@/sections/HowToContribute.vue'
import Footer from '@/sections/Footer.vue'
import Partners from '@/sections/Partners.vue'
export default {
  name: 'LandingPage',
  components: {
    Banner,
    AboutUs,
    WhyFevermap,
    HowToContribute,
    Footer,
    Partners,
  },
}
</script>

<style scoped lang="scss">
#about-and-why {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'about why'
    'uipics uipics';
  column-gap: 5rem;
}

@media (max-width: $mobile-breakpoint) {
  #about-and-why {
    grid-template-areas:
      'about about'
      'uipics uipics'
      'why why';
  }
}

.about-area {
  grid-area: about;
}

.why-area {
  grid-area: why;
}

#ui-pictures {
  grid-area: uipics;
  display: block;
  margin: auto;
  width: 100%;
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
