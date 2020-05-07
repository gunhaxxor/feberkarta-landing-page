<template>
  <div id="top-section-wrapper">
    <img id="top-left-logo" src="@/assets/fever_map-logo.svg" />
    <ul>
      <li>Hjälp till</li>
      <li>Vanliga frågor</li>
      <li>Kontakt</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopSection',
}
</script>

<style>
#top-section-wrapper {
  width: 100%;
  padding: 0 5rem;
  background-color: lime;
}

#top-left-logo {
  width: 5rem;
  background-color: aqua;
  text-align: left;
  /* float: left; */
}
</style>
