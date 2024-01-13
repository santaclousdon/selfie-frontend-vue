<template>
  <div class="main-content">
    <BreadCrum />
    <Client />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../components/Clients/BreadCrum'
import Client from '../../components/Clients/Client'
import Footer from '../../components/Clients/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
    BreadCrum,
    Client,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
