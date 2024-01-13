<template>
  <div>
    <BreadCrumb crumb-title="Data Science Consulting" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <Service />
    </div>
    <Footer />
  </div>
</template>

<script>
import Service from '../../components/DataScienceConsulting/Service'
import Footer from '../../components/FooterStyle1/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Services',
  components: {
    Service,
    Footer
  },
  data(){
    return{
      image: require('../../assets/images/about-us/07.png'),
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
