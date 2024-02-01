<template>
  <div class="main-content">
    <Accordion />
    <SubmitID />
    <UploadForm />
  </div>
</template>

<script>
import Accordion from '../../../components/Auth/ID/Accordion'
import SubmitID from '../../../components/Auth/ID/SubmitID'
import UploadForm from '../../../components/Auth/uploadForm/UploadForm'
import { themes } from '../../../assets/app/app'
export default {
  middleware: 'auth',
  layout: 'Auth',
  components: {
    Accordion,
    SubmitID,
    UploadForm
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
