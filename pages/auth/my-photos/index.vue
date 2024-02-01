<template>
  <div class="main-content">
    <Accordion />
    <UploadForm />
  </div>
</template>

<script>
import Accordion from '../../../components/Auth/MyPhotos/Accordion'
import UploadForm from '../../../components/Auth/uploadForm/UploadForm'
import { themes } from '../../../assets/app/app'
export default {
  middleware: 'auth',
  layout: 'Auth',
  components: {
    Accordion,
    UploadForm
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
