<template>
  <div>
    <BreadCrumb crumb-title="Big Data Services " :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <Service />
    </div>
    <Footer />
  </div>
</template>

<script>
import Service from '../../components/BigDataServices/Service'
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
      image: require('../../assets/images/about-us/06.png'),
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