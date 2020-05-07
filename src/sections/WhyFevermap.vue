<template>
  <div id="why-fevermap-wrapper">
    <div id="why-fevermap-content">
      <h1>Varför feberkarta</h1>
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
          title: '10 sek att rapportera',
          body: 'Snabbt och enkelt att använda',
        },
        {
          title: 'Följ ditt mående',
          body: 'Se en kurva på ditt mående',
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
  & > h1 {
    white-space: nowrap;
  }
}

#why-fevermap-content {
  height: auto;
  display: grid;
  grid-template-rows: min-content repeat(1fr);
  grid-gap: 10px;

  & h2 {
    margin-top: 0;
  }
}
</style>
