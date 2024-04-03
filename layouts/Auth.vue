<template>
  <div>
    <Loader />
    <HeaderStyle2 :logo-img="logo" :nav-item-list="navItems" class-name="style-one" :styled-logo="styleLogo" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-12 pt-5">
          <div class="row mt-5 pt-3 align-items-center justify-content-center text-center ">
            <p class="text-aside-detail"> Out standing balance <br> <span class="text-funds mt-1">€{{ getUserInfo.balance == undefined ? "0.00..." : getUserInfo.balance }}</span> <br>
              <button class="button blue-btn mt-3 w-100"> Pay me now</button>
            </p>
          </div>
          <div class="row">
            <ul class="nav nav-pills mt-3" role="tablist">
              <li v-for="(tab, index) in tabs" :key="index" class="nav-item col-lg-12">
                <span class="line" />
                <nuxt-link class="nav-link" :class="tab.active ? ' active ' : ''" :to="tab.href" aria-selected="false">
                  <img :src="tab.image" alt="tab-image" class="img">
                  <span class="tab-title ml-3">{{ tab.title }}</span>
                  <span v-if="tab.bage > 0" class="bage ml-5">{{ tab.bage }}</span>
                </nuxt-link>
                <img v-if="index < 4" src="../assets/images/Line 1.png" height="1" alt="">
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-10 col-md-10 col-sm-12">
          <nuxt />
        </div>
      </div>
      <div class="row footer justify-content-center">
        <div class="col-lg-10 col-md-10 col-sm-12">
          <Footer />
        </div>
      </div>
    </div>
    <ScrollTop />
  </div>
</template>

<script>
import logoImg from '../assets/images/logo.png'
import Footer from '../components/Auth/Footer/Footer'

import { mapGetters } from "vuex";

export default {
  name: 'Auth',
  components: { Footer },
  data() {
    return {
      styleLogo: false,
      logo: logoImg,
      // pendingImag: require('../../../assets/images/pendingHeader.png'),
      // rejectedImage: require('../../../assets/images/pendingHeader.png'),
      // pendingImage: require('../../../assets/images/pending.png'),
      // rejectedImage: require('../../../assets/images/rejected.png'),
      navItems: [
        {
          href: '/auth/dashboard',
          title: 'Dashboard',
          active: true,
          children: true,
          child: [],
          classname: 'menu'
        },
        { href: '/auth/personal-details', title: 'Personal details', children: true, child: [], classname: ' ' },
        { href: '/auth/payment-information', title: 'Payment information', children: true, child: [], classname: ' ' },
        { href: '/auth/id-verification', title: 'ID verification', children: true, child: [], classname: ' ' }
      ],
      tabs: [
        {
          href: '/auth/my-photos',
          title: 'My photos',
          active: false,
          image: require('../assets/images/aside/myphoto.png'),
          bage: 5
        },
        {
          href: '/auth/legal',
          title: 'Legal',
          active: false,
          image: require('../assets/images/aside/legal.png'),
          bage: 0
        },
        {
          href: '/auth/my-referrals',
          title: 'My referrals',
          active: false,
          image: require('../assets/images/aside/myreferrals.png'),
          bage: 0
        },
        {
          href: '/auth/payment-history',
          title: 'Payment history',
          active: false,
          image: require('../assets/images/aside/paymenthistory.png'),
          bage: 0
        },
        {
          href: '/auth/settings',
          title: 'Settings',
          active: false,
          image: require('../assets/images/aside/settings.png'),
          bage: 0
        }
      ]
    }
  },
  mounted() {
    const jquery = window.$
    const path = window.location.pathname

    this.tabs.map(tab => {
      if (tab.href == path) tab.active = true
    })

    jQuery('.nav-link').click((event) => {
      this.tabs.map(tab => {
        tab.active = false
      })
      event.target.classList.add('active')
    })
  },
  computed: {
    getUserInfo() {
      var userinfo = this.$store.getters.getUserInfo;
      
      return userinfo
    }
  }
} 
</script>
<style>
@import url('../assets/css/style.css');
@import url('../assets/css/responsive.css');
</style>
<style scoped>
/* .nav-pills {
  position: inherit;
} */

.tab-title {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}

.bage {
  color: #222222;
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;

  background: white;
  border-radius: 50%;
  border: 1px #EDEFFD solid;
  padding: 2px 6px;
}

.nav-link:hover {
  background-color: #EDEFFD;
}

.nav-link.active {
  background-color: #673CF6;
}

.text-aside-detail {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}

.text-funds {
  color: #222222;
  font-size: 41px;
  font-family: Darker Grotesque normal;
  font-weight: 600;
  word-wrap: break-word
}

a.nav-link.active span.tab-title {
  color: white;
}
</style>