<template>
  <div id="banner-wrapper">
    <div id="banner-info-box">
      <h1>
        Bidra till en öppen lösning för att kartlägga symtom under
        Coronapandemin
      </h1>
      <p>
        Hjälp till genom att
      </p>
      <ul>
        <li>Rapportera anonymt hur du mår i appen</li>
        <li>Ge feedback på appen</li>
        <li>Diskutera möjliga lösningar</li>
        <li>Bidra till apputvecklingen</li>
      </ul>
      <Button inverted bigger>Starta appen</Button>
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
  width: 100%;
  height: 25rem;
  background: url('~@/assets/banner_feberkarta.png');
  background-size: cover;
  background-position-y: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

#banner-info-box {
  // margin-top: 4rem;
  max-width: 40rem;
  color: $white;

  & h1 {
    margin-top: 0;
  }

  & p {
    margin-bottom: 0;
  }

  & ul {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
}

#launch-app-button {
  padding: 0.7rem 1rem;
  border-radius: 2rem;
  border: 0;
}
</style>
