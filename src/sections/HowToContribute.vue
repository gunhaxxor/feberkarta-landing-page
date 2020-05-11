<template>
  <div id="how-to-help-wrapper">
    <h1>Hur du kan hjälpa till</h1>
    <div id="how-to-help-grid">
      <div class="help-box" v-for="helpBox in helpBoxes" :key="helpBox.title">
        <h3>{{ helpBox.title }}</h3>
        <p class="helpbox-paragraph">
          {{ helpBox.body }}
        </p>
        <Button> {{ helpBox.buttonText }} </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'HowToContribute',
  data: function() {
    return {
      helpBoxes: [
        {
          title: 'Ge dina synpunkter',
          body:
            'Ge din syn på appens utformning och hur den kan utvecklas? Maila oss nedan',
          buttonText: 'Ge Feedback',
        },
        {
          title: 'Diskutera med andra',
          body:
            'Gå med i vår Facebookgrupp där vi både kan diskutera Feberkarta och frågan om kartläggning av symtom i stort.',
          buttonText: 'Till Facebook',
        },
        {
          title: 'Samarbeta med oss',
          body:
            'Bli en del av diskussionerna för utveckling av appen genom att gå med i utvecklingsgruppen.',
          buttonText: 'Till Slack',
        },
        {
          title: 'Utveckla och analysera',
          body:
            'Bidra till den öppna källkoden eller skapa nya issues på projektets Gitlab.',
          buttonText: 'Till Gitlab',
        },
      ],
    }
  },
  components: { Button },
}
</script>

<style scoped lang="scss">
#how-to-help-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
}

.help-box {
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  & p {
    flex-grow: 4;
    margin-bottom: 2rem;
  }
}

@media (max-width: $mobile-breakpoint) {
  .help-box {
    align-items: center;
  }
}
</style>
