<template>
  <div>
    <BreadCrumb crumb-title="Data Management" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <Analytics />
    </div>
    <Footer />
  </div>
</template>

<script>
import Analytics from '../../components/DataManagement/Analytics'
import Footer from '../../components/FooterStyle1/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Services',
  components: {
    Analytics,
    Footer
  },
  data(){
    return{
      image: require('../../assets/images/about-us/02.png'),
       links: [{
        title : 'Home' ,
        href : 'landing-page-1'
      }]
    }
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>