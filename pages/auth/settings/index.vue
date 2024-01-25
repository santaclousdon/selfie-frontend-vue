<template>
  <div class="main-content">
    <Settings />
  </div>
</template>

<script>
import Settings from '../../../components/Auth/Settings/Settings'
import { themes } from '../../../assets/app/app'
export default {
  middleware: 'auth',
  layout: 'Auth',
  components: {
    Settings
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
