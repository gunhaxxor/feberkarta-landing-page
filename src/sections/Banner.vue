<template>
  <div id="banner-wrapper">
    <div id="banner-info-box">
      <h1>
        Bidra till en öppen lösning för att kartlägga symtom under
        Coronapandemin
      </h1>
      <div id="text-thingy">
        <span>
          Hjälp till genom att
        </span>
        <ul>
          <li>Rapportera <b>anonymt</b> hur du mår i appen</li>
          <li>Ge feedback på appen</li>
          <li>Diskutera möjliga lösningar</li>
          <li>Bidra till apputvecklingen</li>
        </ul>
      </div>
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

<style scoped lang="scss">
#banner-wrapper {
  width: 100%;
  // height: 25rem;
  background: url('~@/assets/banner_feberkarta.png');
  background-size: cover;
  background-position-y: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

#banner-info-box {
  margin-top: 3rem;
  margin-bottom: 3rem;
  max-width: 40rem;
  color: $white;

  & h1 {
    margin-top: 0;
  }
}

#text-thingy {
  & span {
    // display: block;
    margin-bottom: 0;
  }

  & ul {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: $mobile-breakpoint) {
  #banner-info-box {
    text-align: center;
  }

  #text-thingy {
    margin-bottom: 2rem;

    & span {
      display: inline;
      margin-right: -0.5rem;
    }

    & span:after {
      margin: -0.1rem;
      content: ':';
    }

    & ul {
      display: inline;

      & li {
        display: inline;
      }

      & li::after {
        content: '. ';
      }
    }
  }
}

#launch-app-button {
  padding: 0.7rem 1rem;
  border-radius: 2rem;
  border: 0;
}
</style>
