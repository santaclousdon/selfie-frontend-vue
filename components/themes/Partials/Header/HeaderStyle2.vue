<template>
  <!-- Header -->
  <header id="main-header" :class="className">
    <div
      class="container-fluid main-header"
      style="border-bottom: dashed gray 1px"
    >
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light navbar-auth">
            <a class="navbar-brand" href="#">
              <img
                :id="styledLogo ? 'logo_img' : ''"
                class="img-fluid logo"
                :src="logoImg"
                alt="#"
              />
            </a>
            <a
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <!-- <span class="navbar-toggler-icon">
                <i class="fa fa-ellipsis-v" />
              </span> -->
              <img src="../../../../assets/images/mobile/toggle.png" alt="toggle btn" />
            </a>
            <div id="navbarSupportedContent" class="collapse navbar-collapse navbar-auth-mobile">
              <div class="menu-main-menu-container">
                <div class="row mt-5 pt-3 align-items-center justify-content-center text-center navbar-collapse-mobile">
                  <p class="text-aside-detail"> Out standing balance <br> <span class="text-funds mt-1">€{{ getUserInfo.balance == undefined ? "0.00..." : getUserInfo.balance }}</span> <br>
                    <button class="button blue-btn mt-3 w-100"> Pay me now</button>
                  </p>
                </div>
                <ul id="top-menu" class="navbar-nav ml-3 text-left">
                <li
                  v-for="(option, index) in navItemList"
                  :key="index"
                  class="nav-item menu-item"
                  :class="
                    isParentActiveRoute(option) ? ' current-menu-item ' : ''
                  "
                >
                  <nuxt-link :to="option.href">
                    {{ option.title }}
                    <span
                      v-if="option.title == 'Payment information'"
                      class="ml-3"
                    >
                      <img
                        :src="
                          getPaymentInfo == 'Pending'
                            ? pendingImage
                            : rejectedImage
                        "
                        alt=""
                        :title="
                          getPaymentInfo == 'Pending'
                            ? 'Your ' +
                              option.title +
                              ' is currently being processed.'
                            : 'Your ' +
                              option.title +
                              ' has been declined or has not yet been provided'
                        "
                        style="cursor: pointer"
                    /></span>
                    <span
                      v-if="option.title == 'ID verification'"
                      class="ml-3"
                    >
                      <img
                        :src="
                          getIDInfo == 'Pending'
                            ? pendingImage
                            : rejectedImage
                        "
                        alt=""
                        :title="
                          getIDInfo == 'Pending'
                            ? 'Your ' +
                              option.title +
                              ' is currently being processed.'
                            : 'Your ' +
                              option.title +
                              ' has been declined or has not yet been provided'
                        "
                        style="cursor: pointer"
                    /></span>
                  </nuxt-link>
                  <ul
                    v-if="option.children"
                    :class="'sub-menu ' + option.classname"
                    style="display: none"
                  >
                    <li
                      v-for="(child, chilIndex) in option.child"
                      :key="chilIndex"
                      class="menu-item"
                      :class="{
                        'current-menu-item': isRouteActive(child.href),
                      }"
                    >
                      <nuxt-link :to="child.href">
                        <span>{{ child.title }}</span>
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                </ul>
                <div class="menu-language-container">
                  <div class="menu-language-title">
                    <img src="../../../../assets/images/mobile/language.png" alt="language" />
                    <span>Change language</span>
                  </div>
                  <div class="menu-language-select">
                    <img src="../../../../assets/images/mobile/arrow-down.png" alt="arrow-down" />
                    <select>
                      <option value="English">English</option>
                      <option value="Nederlands">Nederlands</option>
                      <option value="Россия">BMW</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div id="navbarSupportedContent" class="collapse navbar-collapse navbar-auth-table">
              <div class="menu-main-menu-container">
                <ul id="top-menu" class="navbar-nav ml-3 text-left">
                <li
                  v-for="(option, index) in navItemList"
                  :key="index"
                  class="nav-item menu-item"
                  :class="
                    isParentActiveRoute(option) ? ' current-menu-item ' : ''
                  "
                >
                  <nuxt-link :to="option.href">
                    {{ option.title }}
                    <span
                      v-if="option.title == 'Payment information'"
                      class="ml-3"
                    >
                      <img
                        :src="
                          getPaymentInfo == 'Pending'
                            ? pendingImage
                            : rejectedImage
                        "
                        alt=""
                        :title="
                          getPaymentInfo == 'Pending'
                            ? 'Your ' +
                              option.title +
                              ' is currently being processed.'
                            : 'Your ' +
                              option.title +
                              ' has been declined or has not yet been provided'
                        "
                        style="cursor: pointer"
                    /></span>
                    <span
                      v-if="option.title == 'ID verification'"
                      class="ml-3"
                    >
                      <img
                        :src="
                          getIDInfo == 'Pending'
                            ? pendingImage
                            : rejectedImage
                        "
                        alt=""
                        :title="
                          getIDInfo == 'Pending'
                            ? 'Your ' +
                              option.title +
                              ' is currently being processed.'
                            : 'Your ' +
                              option.title +
                              ' has been declined or has not yet been provided'
                        "
                        style="cursor: pointer"
                    /></span>
                  </nuxt-link>
                  <ul
                    v-if="option.children"
                    :class="'sub-menu ' + option.classname"
                    style="display: none"
                  >
                    <li
                      v-for="(child, chilIndex) in option.child"
                      :key="chilIndex"
                      class="menu-item"
                      :class="{
                        'current-menu-item': isRouteActive(child.href),
                      }"
                    >
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
              <nav
                aria-label="breadcrumb"
                style="display: flex; align-items: center"
              >
                <div class="user-avatar button">
                  <input
                    type="file"
                    @change="onFileChange"
                    class="avatar-image"
                    style="display: none"
                  />
                  <!-- <a @click="onSelectFile" class="upload-button"> -->
                  <img
                    @click="onSelectFile"
                    class="upload-button"
                    v-if="selectedFile == ''"
                    src="~/assets/images/avatar.png"
                    alt=""
                  />
                  <img
                    @click="onSelectFile"
                    class="upload-button"
                    id="imageUpload"
                    width="50"
                    :src="selectedFile"
                    alt=""
                  />
                  <!-- </a> -->
                </div>
                <div class="user-detail align-items-center p-3">
                  <p>
                    {{
                      userInfo.firstname
                        ? userInfo.firstname + " " + userInfo.lastname
                        : userInfo.userID
                    }}
                    <br />
                    <span class="text-funds">€{{ userInfo.balance == undefined ? "0.00.." : userInfo.balance }}</span>
                  </p>
                </div>
                <div class="lang-btn button">
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li class="nav-item menu-item" style="margin-right: 0">
                      <img src="~/assets/images/image_8.png" alt="" />
                      <ul :class="'sub-menu'" style="display: none">
                        <li class="menu-title"></li>
                        <li class="menu-title">Choose language:</li>
                        <hr />
                        <li
                          v-for="(child, chilIndex) in langItem"
                          :key="chilIndex"
                          class="menu-item"
                          :class="{
                            'current-menu-item': isRouteActive(child.href),
                          }"
                        >
                          <nuxt-link :to="child.href">
                            <span>{{ child.title }}</span>
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="user-avatar button mr-3 ml-3" @click="logout">
                  <a>
                    <img src="~/assets/images/logout.png" alt="" />
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
import jquery from "jquery";

export default {
  name: "HeaderStyle2",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    className: String,
    // eslint-disable-next-line vue/require-default-prop
    logoImg: String,
    // eslint-disable-next-line no-undef,vue/require-default-prop
    navItemList: Array,
    // eslint-disable-next-line vue/require-default-prop,vue/require-prop-types
    styledLogo: { Boolean: true },
  },
  // created() {
  //   this.$root.$on("bv::scrollspy::activate", this.onActivate);
  // },
  data() {
    return {
      pendingImage: require("../../../../assets/images/pendingHeader.png"),
      rejectedImage: require("../../../../assets/images/rejectHeader.png"),
      selectedFile: "",
      userInfo: {},
      langItem: [
        {
          href: "/",
          title: "English",
          children: true,
          classname: " ",
          active: true,
        },
        {
          href: "/",
          title: "Nederlands",
          children: true,
          classname: " ",
          active: false,
        },
        {
          href: "/",
          title: "Россия",
          children: true,
          classname: " ",
          active: false,
        },
      ],
    };
  },
  computed: {
    getPaymentInfo() {
      console.log("computed", this.$store.getters.getPaymentInfo.status);
      return this.$store.getters.getPaymentInfo.status;
    },
    getIDInfo() {
      return this.$store.getters.getIDInfo.status;
    },
    getUserInfo() {
      var userinfo = this.$store.getters.getUserInfo;
      
      return userinfo
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
          return item.href;
        }
      });
      if (itemClass !== undefined && itemClass.href === this.$route.path) {
        return true;
      } else {
        return false;
      }
    },
    isRouteActive(id) {
      if (this.$route.path === id) {
        return true;
      } else {
        return false;
      }
    },
    onSelectFile() {
      jquery(".avatar-image").click();
    },
    onFileChange(evt) {
      console.log("evt", evt.target);
      const vm = this;
      const selectedFile = evt.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
      console.log("selectedFile", this.selectedFile);

      var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

      // FileReader support

      if (FileReader && files && files.length) {
        var fr = new FileReader();
        console.log("................", fr);
        fr.onload = () => {
          // res = this.onUploadFile();
          this.onUploadFile();
        };

        fr.readAsDataURL(files[0]);
      }

      // Not supported
      else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
      }
    },

    onUploadFile() {
      let avatarName = "";
      const formData = new FormData();
      formData.append("file", this.selectedFile); // appending file
      formData.append("user", this.$store.$auth.$state.user._id);

      // sending file to the backend
      this.$axios
        .$post("/api/auth/avatar-upload", formData)
        .then((res) => {
          console.log("res", res);
          document.getElementById("imageUpload").src = res.path;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // onActivate(target) {
    //   console.log(
    //     'Received event: "bv::scrollspy::activate" for target ',
    //     target
    //   );
    // },
    jumpTo(href) {
      window.$("html, body").stop().animate(
        {
          // scrollTop: window.$(href).offset().top
        },
        1500
      );
    },
  },
  async beforeCreate() {
    const res = await this.$axios.$get("/api/auth/user");

    this.userInfo = res.user;
    // console.log("..................", this.userInfo.balance)
    this.userInfo.balance = res.user?.balance?.toFixed(2);
    if (this.userInfo.avatar !== "") this.selectedFile = this.userInfo.avatar;

    this.$store.commit("setPaymentInfo", res.user.paymentStatus);
    console.log(this.$store.getters.getPaymentInfo.status);
  },
};
</script>

<style scoped>
.menu-title {
  color: black !important;
  padding: 5px 10px;
}

.current-menu-item {
  color: #673cf6;
}

#top-menu {
  float: left;
}

.menu-main-menu-container {
  padding-left: 10%;
}

.user-avatar.button {
  background: white;
  border-radius: 50%;
  padding: 8px 12px;
  border: 1px #d9d9d9 solid;
}

.user-avatar.button:hover {
  cursor: pointer;
  background: #d9d9d9;
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
  word-wrap: break-word;
}

.menu-item {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
}
#imageUpload {
  border-radius: 50%;
}

.navbar-auth {
  flex-flow: row nowrap;
  justify-content: space-between;
}

.navbar-auth-table .menu-main-menu-container {
  padding-left: 76px;
}
.logo {
  width: 213px !important;
}
</style>
