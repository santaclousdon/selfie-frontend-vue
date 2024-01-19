<template>
  <div class="main-content">
    <Accordion />
    <SignAggrement />
  </div>
</template>

<script>
import Accordion from '../../../components/Auth/Legal/Accordion'
import SignAggrement from '../../../components/Auth/Legal/SignAggrement'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Auth',
  components: {
    Accordion,
    SignAggrement
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
