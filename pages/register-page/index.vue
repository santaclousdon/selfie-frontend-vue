<template>
    <div class="main-content">
      <RegisterForm />
      <Footer />
    </div>
  </template>
  
  <script>
  import RegisterForm from '../../components/RegisterPage/RegisterForm'
  import Footer from '../../components/Home/Footer'
  import { themes } from '../../assets/app/app'
  export default {
    layout: 'Pages',
    components: {
      RegisterForm,
      Footer
    },
    mounted () {
      setTimeout(function () {
        themes.index()
      }, 1000)
    }
  }
  </script>