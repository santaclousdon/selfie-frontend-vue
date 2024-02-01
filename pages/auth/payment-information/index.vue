<template>
  <div class="main-content">
    <PaymentInfo />
  </div>
</template>

<script>
import PaymentInfo from '../../../components/Auth/PaymentInfo/PaymentInfo'
import { themes } from '../../../assets/app/app'
export default {
  middleware: 'auth',
  layout: 'Auth',
  components: {
    PaymentInfo
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
