<template>
  <div id="app">
    <background srcset="banner-image-desktop.jpg,banner-image-mobile.jpg">ce qu on met dans le component</background>
  </div>
</template>

<script>
import Background from './components/Background/Background.vue'

export default {
  name: 'app',
  components: {
    Background
  }
}
</script>
