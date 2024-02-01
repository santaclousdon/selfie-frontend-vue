<template>
  <div>
    <Accordion />
    <DescriptionCard />
  </div>
</template>

<script>
import Accordion from '../../../components/Auth/Dashboard/Accordion'
import DescriptionCard from '../../../components/Auth/Dashboard/DescriptionCard'
import { themes } from '../../../assets/app/app'
export default {
  middleware: 'auth',
  layout: 'Auth',
  components: {
    Accordion,
    DescriptionCard
  },
  mounted() {
    document.cookie = 'layout=Auth'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider8()
    }, 1000)
  }
}
</script>
