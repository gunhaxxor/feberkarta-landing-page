<template>
  <div id="footer-wrapper">
    <div class="grid-container">
      <div class="grid-item contact-info">
        <p>
          Vill du bli en samarbetspartner? <br />
          Kontakta gärna oss här.
        </p>
        <Button>Kontakt</Button>
      </div>
      <div class="grid-item small-text">
        <p class="link-title">Socialt</p>
        <p class="link-item">Facebook</p>
        <p class="link-item">Twitter</p>
        <p class="link-item">Slack</p>
        <p class="link-item">Github</p>
      </div>
      <div class="grid-item small-text">
        <p class="link-title">UI overview</p>
        <p class="link-item">Logo (svg)</p>
        <p class="link-item">Pressmeddelanden</p>
      </div>
      <div class="grid-item small-text">
        <p class="link-title">Contact</p>
        <p class="link-item">info@feberkarta.se</p>
      </div>
    </div>
    <div>
      <p class="small-text" style="font-weight: bold">
        Användarvillkor · Integritetspolicy · Cookies · fevermap.net
      </p>
      <p class="small-text">© 2020 Ins. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'Footer',
  components: {
    Button,
  },
}
</script>

<style lang="scss">
#footer-wrapper {
  margin-top: 10rem;
}
#contact-info {
  // float: left;
  // width: 25%;
}
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  column-gap: 3rem;
  // float: right;
  // width: 75%;
}
.grid-item {
}
.link-title {
  font-weight: bold;
}
</style>
