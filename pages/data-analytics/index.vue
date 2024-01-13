<template>
  <div class="main-content">
    <BreadCrum />
    <Analytics />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../components/DataAnalytics/BreadCrum'
import Analytics from '../../components/DataAnalytics/Analytics'
import Footer from '../../components/DataAnalytics/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Services',
  components: {
    BreadCrum,
    Analytics,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
