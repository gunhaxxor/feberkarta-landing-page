<template>
  <div id="why-fevermap-wrapper">
    <h1>Varför feberkarta</h1>
    <div id="why-fevermap-content">
      <div v-for="c in cardsContent" :key="c.title">
        <h2>{{ c.title }}</h2>
        <p>
          {{ c.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Card from '@/components/Card.vue'
export default {
  name: 'WhyFevermap',
  data: function() {
    return {
      cardsContent: [
        {
          title: 'Du är anonym',
          body: 'Du behöver inte registrera några personuppgifter',
        },
        {
          title: 'Det tar 10 sekunder',
          body: 'Det går snabbt och enkelt att rapportera ditt mående',
        },
        {
          title: 'Följ ditt mående',
          body:
            'Om du fortsätter att rapportera kan du följa utvecklingen och se en kurva på ditt mående',
        },
      ],
    }
  },
  components: {
    // Card,
  },
}
</script>

<style lang="scss">
#why-fevermap-wrapper {
  display: grid;
  grid-template-rows: min-content auto;
  & > h1 {
    // white-space: nowrap;
  }
}

#why-fevermap-content {
  // height: auto;
  display: grid;
  // grid-template-rows: max-content;
  grid-gap: 2rem;

  & h2 {
    margin-top: 0;
    margin-bottom: 0rem;
  }
}
</style>
