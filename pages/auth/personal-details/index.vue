<template>
  <div class="main-content">
    <PersonalDetail />
  </div>
</template>

<script>
import PersonalDetail from '../../../components/Auth/PersonalDetail/PersonalDetail'
import { themes } from '../../../assets/app/app'
export default {
  middleware: 'auth',
  layout: 'Auth',
  components: {
    PersonalDetail
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
