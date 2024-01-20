<template>
  <div class="main-content">
    <SignAggrement />
  </div>
</template>

<script>
import SignAggrement from '../../../components/Auth/PaymentInfo/PaymentInfo'
import { themes } from '../../../assets/app/app'
export default {
  layout: 'Auth',
  components: {
    SignAggrement
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
