<template>
    <div class="main-content">
      <LoginForm />
      <Footer />
    </div>
  </template>
  
  <script>
  import LoginForm from '../../components/LoginPage/LoginForm'
  import Footer from '../../components/Home/Footer'
  import { themes } from '../../assets/app/app'
  export default {
    layout: 'Pages',
    components: {
      LoginForm,
      Footer
    },
    mounted () {
      setTimeout(function () {
        themes.index()
      }, 1000)
    }
  }
  </script>