<template>
  <div>
    <Home />
    <div class="main-content">
      <Video />
      <Specialize />
      <Spcontent />
      <About />
      <Category />
      <Team />
      <Client />
      <Testimonials />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage16/Home'
import Video from '../../components/LandingPage16/Video'
import Specialize from '../../components/LandingPage16/Specialize'
import Spcontent from '../../components/LandingPage16/Spcontent'
import About from '../../components/LandingPage16/About'
import Category from '../../components/LandingPage16/Category'
import Team from '../../components/LandingPage16/Team'
import Client from '../../components/LandingPage16/Client'
import Testimonials from '../../components/LandingPage16/Testimonials'
import Blog from '../../components/LandingPage16/Blog'
import Footer from '../../components/LandingPage16/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage16',
  components: {
    Home,
    Video,
    Specialize,
    Spcontent,
    About,
    Category,
    Team,
    Client,
    Testimonials,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage16'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider16()
    }, 1000)
  }
}
</script>
