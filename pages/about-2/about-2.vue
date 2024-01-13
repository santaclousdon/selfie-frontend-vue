<template>
  <div>
    <BreadCrumb crumb-title="About Us" :crumb-media="image" :crumb-links="links" />
    <div class="main-content" >
      <AboutUs />
      <History />
      <Team />
      <Footer />
    </div>
  </div>
</template>


<script>
import AboutUs from '../../components/AboutUs-1/AboutUs'
import History from '../../components/AboutUs-1/History'
import Team from '../../components/AboutUs-1/Team'
import Footer from '../../components/AboutUs-1/Footer'
import { themes } from '../../assets/app/app'

export default {
  layout: 'AboutUs',
  components: {
    AboutUs,
    History,
    Team,
    Footer
  },
  data(){
    return{
      image: require('../../assets/images/about-us/04.png'),
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
