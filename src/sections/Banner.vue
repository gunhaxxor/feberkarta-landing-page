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
      <Button>Ladda ner appen</Button>
      <Button inverted>Ladda ner appen</Button>
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

<style>
#banner-wrapper {
  width: 100%;
  height: 300px;
  background-color: cadetblue;
  background-image: url('~@/assets/cover-logo@4x.png');
  background-size: cover;
  background-position-y: center;
}

#launch-app-button {
  padding: 0.7rem 1rem;
  border-radius: 2rem;
  border: 0;
}
</style>
