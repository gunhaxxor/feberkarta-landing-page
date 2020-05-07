<template>
  <div id="banner-wrapper">
    <div id="banner-info-box">
      <h1>Bidra till att hitta bästa lösningen för att kartlägga symtom</h1>
      <p>
        Hjälp till genom att
      </p>
      <ul>
        <li>ölkjhas deföl kh asdf lköjhasd</li>
        <li>asldkj fhals kjdhf dlkjhf</li>
        <li>plkjasdf asöldkfj asdfölkj</li>
        <li>dsaslkjh falkjdhsf lk l lkjdhf</li>
      </ul>
      <Button inverted>Starta appen</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'Banner',
  components: { Button },
}
</script>

<style lang="scss">
#banner-wrapper {
  padding-top: 4rem;
  width: 100%;
  height: 25rem;
  // background-color: blueviolet;
  background: linear-gradient(
      rgba(142, 142, 255, 0.4),
      rgba(142, 142, 255, 0.4)
    ),
    url('~@/assets/kelly-sikkema-lgWqGhqSr0g-unsplash.png');

  // background-blend-mode: overlay;
  background-size: cover;
  background-position-y: center;
}

#banner-info-box {
  // margin-top: 4rem;
  color: $white;
}

#launch-app-button {
  padding: 0.7rem 1rem;
  border-radius: 2rem;
  border: 0;
}
</style>
