<template>
  <!-- Header -->
  <header id="main-header" :class="className">
    <div class="container-fluid sub-header">
      <div class="row">
        <div class="col-auto">
          <div class="number-info">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="mailto:support@iqnonicthemes.com">
                  <i class="fas fa-envelope" />support@iqnonicthemes.com
                </a>
              </li>
              <li class="list-inline-item">
                <a href="tel:+0123456789">
                  <i class="fas fa-phone-alt" />+0123456789
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-auto col-auto ml-auto sub-main">
          <div class="social-icone">
            <ul class="list-inline">
              <li class="d-inline">
                <a href="#">
                  <i class="fa fa-facebook-f" />
                </a>
              </li>
              <li class="d-inline">
                <a href="#">
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li class="d-inline">
                <a href="#">
                  <i class="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid main-header">
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              <img :id="styledLogo ? 'logo_img' : ''" class="img-fluid logo" :src="logoImg" alt="#">
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i class="ion-navicon" />
              </span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <div class="menu-main-menu-container">
                <ul id="top-menu" class="navbar-nav ml-auto">
                  <li v-for="(option,index) in navItemList" :key="index" class="nav-item menu-item" :class="isParentActiveRoute(option) ? ' current-menu-item ' : '' ">
                    <nuxt-link
                      :to="option.href"
                      @click="jumpTo(option.href)"
                    >
                      {{ option.title }}
                      <i
                        v-if="option.children"
                        class="fa fa-angle-down toggledrop"
                        aria-hidden="true"
                      />
                    </nuxt-link>
                    <ul v-if="option.children" :class="'sub-menu '+ option.classname" style="display: none;">
                      <li v-for="(child,chilIndex) in option.child" :key="chilIndex" class="menu-item" :class="{'current-menu-item': isRouteActive(child.href) }">
                        <nuxt-link :to="child.href">
                          <span>{{ child.title }}</span>
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sub-main">
              <nav aria-label="breadcrumb">
                <div class="blue-btn button">
                  <a href="#">Get Started</a>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
export default {
  name: 'HeaderStyle1',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    className: String,
    // eslint-disable-next-line vue/require-default-prop
    logoImg: String,
    // eslint-disable-next-line no-undef,vue/require-default-prop
    navItemList: Array,
    // eslint-disable-next-line vue/require-default-prop,vue/require-prop-types
    styledLogo: { Boolean: true }
  },
  // created() {
  //   this.$root.$on("bv::scrollspy::activate", this.onActivate);
  // },
  methods: {
    isParentActiveRoute (option) {
      // eslint-disable-next-line no-unused-expressions
      const itemClass = option.child.find((item) => {
        if (item.href === this.$route.path) {
          return item.href
        }
      })
      if (itemClass !== undefined && itemClass.href === this.$route.path) {
        return true
      } else {
        return false
      }
    },
    isRouteActive (id) {
      if (this.$route.path === id) {
        return true
      } else {
        return false
      }
    },
    // onActivate(target) {
    //   console.log(
    //     'Received event: "bv::scrollspy::activate" for target ',
    //     target
    //   );
    // },
    jumpTo (href) {
      window
        .$('html, body')
        .stop()
        .animate(
          {
            // scrollTop: window.$(href).offset().top
          },
          1500
        )
    }
  }
}
</script>
