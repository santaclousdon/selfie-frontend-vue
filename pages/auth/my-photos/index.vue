<template>
  <div class="main-content">
    <Accordion />
  </div>
</template>

<script>
import Accordion from '../../../components/Auth/MyPhotos/Accordion'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Auth',
  components: {
    Accordion
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
