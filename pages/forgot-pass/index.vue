<template>
    <div class="main-content">
        <ForgotPassForm />
        <Footer />
    </div>
</template>
  
<script>
import ForgotPassForm from '../../components/ForgotPass/ForgotPassForm'
import Footer from '../../components/Home/Footer'
import { themes } from '../../assets/app/app'
export default {
    layout: 'Pages',
    components: {
        ForgotPassForm,
        Footer
    },
    mounted() {
        setTimeout(function () {
            themes.index()
        }, 1000)
    }
}
</script>