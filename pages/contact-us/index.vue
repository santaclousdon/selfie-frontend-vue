<template>
  <div class="main-content">
    <BreadCrum />
    <Address />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../components/ContactUs/BreadCrum'
import Address from '../../components/ContactUs/Address'
import ContactForm from '../../components/ContactUs/ContactForm'
import Footer from '../../components/ContactUs/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
    BreadCrum,
    Address,
    ContactForm,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>