<template>
  <!-- Header -->
  <header id="main-header" :class="className">
    <div class="container-fluid main-header" style="border-bottom: dashed gray 1px">
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              <img :id="styledLogo ? 'logo_img' : ''" class="img-fluid logo" :src="logoImg" alt="#">
            </a>
            <a class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src="../../../../assets/images/mobile/toggle.png" alt="toggle btn" />
            </a>
            <div id="navbarSupportedContent" class="collapse navbar-collapse navbar-table">
              <div class="menu-main-menu-container">
                <ul id="top-menu" class="navbar-nav ml-auto">
                  <li v-if="isAuthenticated" class="nav-item menu-item" >
                    <nuxt-link to ="/">Dashboard</nuxt-link> </li>
                  <li v-for="( option, index ) in  navItemList " :key=" index " class="nav-item menu-item"
                    :class=" isParentActiveRoute(option) ? ' current-menu-item ' : '' ">
                    <nuxt-link :to=" option.href ">
                      {{ option.title }}
                    </nuxt-link>
                    <ul v-if=" option.children " :class=" 'sub-menu ' + option.classname " style="display: none;">
                      <li v-for="( child, chilIndex ) in  option.child " :key=" chilIndex " class="menu-item"
                        :class=" { 'current-menu-item': isRouteActive(child.href) } ">
                        <nuxt-link :to=" child.href ">
                          <span>{{ child.title }}</span>
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div id="navbarSupportedContent" class="collapse navbar-mobile">
              <div class="menu-main-menu-container">
                <div class="menu-main-container">
                  <div class="menu-button-container">
                    <div class="menu-button-login">
                      <a href="/login-page">Log in</a>
                    </div>
                    <div class="menu-button-signup">
                      <a href="/register-page">Get started</a>
                    </div>
                  </div>
                  <div class="menu-list-container">
                    <nuxt-link to="/home#howitworks" class="menu-list-item link-to">How does it work?</nuxt-link>
                    <nuxt-link to="/our-rates" class="menu-list-item link-to">Our rates</nuxt-link>
                    <nuxt-link to="/photo-require" class="menu-list-item link-to">Photo requirements</nuxt-link>
                  </div>
                </div>
                <div class="menu-language-container">
                  <div class="menu-language-title">
                    <img src="../../../../assets/images/mobile/language.png" width="24px" alt="language" />
                    <span>Change language</span>
                  </div>
                  <div class="menu-language-select">
                    <img src="../../../../assets/images/mobile/arrow-down.png" alt="arrow-down" />
                    <select>
                      <option value="English">English</option>
                      <option value="Nederlands">Nederlands</option>
                      <option value="Россия">Россия</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div v-if=" !isAuthenticated " class="sub-main">
              <nav aria-label="breadcrumb">
                <div class="light-btn button login-btn">
                  <nuxt-link to="/login-page">Log in</nuxt-link>
                </div>
                <div class="blue-btn button register-btn">
                  <nuxt-link to="/register-page">Get started</nuxt-link>
                </div>
                <div class="lang-btn button">
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li class="nav-item menu-item" style="margin-right: 0;">
                      <img src="../../../../assets/images/image_8.png" alt="">
                      <ul :class=" 'sub-menu' " style="display: none;">
                        <li class="menu-title"></li>
                        <li class="menu-title">Choose language:</li>
                        <hr>
                        <li v-for="( child, chilIndex ) in  langItem " :key=" chilIndex " class="menu-item"
                          :class=" { 'current-menu-item': isRouteActive(child.href) } ">
                          <nuxt-link :to=" child.href ">
                            <span>{{ child.title }}</span>
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div v-else class="sub-main">
              <nav aria-label="breadcrumb" style="display: flex; align-items: center;">
                <div class="user-avatar button">
                  <a href="">
                    <img src="../../../../assets/images/avatar.png" alt=""></a>
                </div>
                <div class="user-detail align-items-center p-3">
                  <p>Emily Jackson <br> <span class="text-funds">€12.50</span> </p>
                </div>
                <div class="lang-btn button">
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li class="nav-item menu-item" style="margin-right: 0;">
                      <img src="../../../../assets/images/image_8.png" alt="">
                      <ul :class=" 'sub-menu' " style="display: none;">
                        <li class="menu-title"></li>
                        <li class="menu-title">Choose language:</li>
                        <hr>
                        <li v-for="( child, chilIndex ) in  langItem " :key=" chilIndex " class="menu-item"
                          :class=" { 'current-menu-item': isRouteActive(child.href) } ">
                          <nuxt-link :to=" child.href ">
                            <span>{{ child.title }}</span>
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="user-avatar button mr-3 ml-3" @click=" logout ">
                  <a>
                    <img src="../../../../assets/images/logout.png" alt="">
                  </a>
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
  data() {
    return {
      langItem: [
        { href: '/', title: 'English', children: true, classname: ' ', active: true },
        { href: '/', title: 'Nederlands', children: true, classname: ' ', active: false },
        { href: '/', title: 'Россия', children: true, classname: ' ', active: false }
      ]
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
    isParentActiveRoute(option) {
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
    isRouteActive(id) {
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
    jumpTo(href) {
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

<style scoped>
.current-menu-item {
  color: #673CF6;
}

.menu-title {
  color: black !important;
  padding: 5px 10px;
}

.user-avatar.button {
  background: white;
  border-radius: 50%;
  padding: 8px 12px;
  border: 1px #D9D9D9 solid;
}

.user-avatar.button:hover {
  cursor: pointer;
  background: #D9D9D9;
}

.user-detail {
  display: inline-block;
}

.user-detail p {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
  margin-bottom: 0px;
}

.user-detail p span.text-funds {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word
}

.menu-item, .link-to {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}
header .navbar ul li.menu-item a, .login-btn a {
  color: #222222 !important;
  font-size: 18px !important;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}
.login-btn a:hover {
  color: white !important;;
}
.register-btn a {
  color: white;
  font-size: 18px !important;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}
header .navbar-light .navbar-brand img.logo {
  width: 213px !important;
}
</style>