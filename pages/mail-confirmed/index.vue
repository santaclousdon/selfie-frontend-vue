<template>
    <div class="main-content">
      <ConfirmForm />
      <Footer />
    </div>
  </template>
  
  <script>
  import ConfirmForm from '../../components/MailConfirmedPage/MailConfirmedForm.vue'
  import Footer from '../../components/Home/Footer'
  import { themes } from '../../assets/app/app'
  export default {
    layout: 'Pages',
    components: {
      ConfirmForm,
      Footer
    },
    mounted () {
      setTimeout(function () {
        themes.index()
      }, 1000)
    }
  }
  </script>