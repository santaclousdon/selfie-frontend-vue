<template>
  <div class="main-content">
    <Accordion />
    <SubmitID />
  </div>
</template>

<script>
import Accordion from '../../../components/Auth/ID/Accordion'
import SubmitID from '../../../components/Auth/ID/SubmitID'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Auth',
  components: {
    Accordion,
    SubmitID
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
