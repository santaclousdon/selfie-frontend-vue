<template>
  <div class="main-content">
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import Address from '../../components/ContactUs/Address'
import ContactForm from '../../components/ContactUs/ContactForm'
import Footer from '../../components/Home/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
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