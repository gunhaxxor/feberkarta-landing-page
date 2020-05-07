<template>
  <div id="why-fevermap-wrapper">
    <Card v-for="c in cardsContent" :key="c.title">
      <h1>{{ c.title }}</h1>
      <p>
        {{ c.body }}
      </p>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
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
    Card,
  },
}
</script>

<style lang="scss">
#why-fevermap-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}
</style>
