<template>
  <div id="top-section-wrapper">
    <img id="top-left-logo" src="@/assets/feberkarta_logo2@2x.png" />
    <ul id="top-menu">
      <li>Hjälp till</li>
      <li>Vanliga frågor</li>
      <li>Kontakt</li>
    </ul>
  </div>
</template>

<script>
// import { Slide } from 'vue-burger-menu'
export default {
  name: 'TopSection',
  // components: Slide,
}
</script>

<style scoped lang="scss">
@media (max-width: $mobile-breakpoint) {
  #top-menu {
    display: none;
  }
}

#top-section-wrapper {
  width: 100%;
  padding-left: 4rem;
  padding-right: 4rem;
  // background-color: lime;
  display: grid;
  grid-template-columns: min-content auto;
  justify-items: right;
  align-items: center;
  column-gap: 1rem;
}

#top-menu {
  text-transform: uppercase;
  font-weight: bold;

  list-style-type: none;
  color: $secondary;
  // margin-top: 1rem;
  margin: 0;
  padding: 0;

  & > li {
    display: inline-block;
    margin: 2.5rem 0 0 2rem;
  }
}

#top-left-logo {
  width: 10rem;
  margin: 1rem 0;
  // background-color: aqua;
  /* text-align: left; */
  /* float: left; */
}
</style>
