<template>
  <section class="">
    <div class="container login-section justify-content-center">
      <div class="col-sm-6 alert alert-danger" role="alert" v-if="alert">
        <div class="row aligin-items-center">
          <div class="col-md-11 col-lg-11 col-sm-11">
            <img src="../../assets/images/warningIcon.png" alt="" />
            {{ message }}
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 text-right">
            <span class="text-right alert-close" @click="closeAlert">
              <i class="fa fa-times"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="col-sm-6 alert alert-success" role="alert" v-if="successalert">
        <span class="mr-3"><img src="../../assets/images/pending.png" alt="" /></span>
        {{ message }}
        <a href="/login-page" class="text-dark">login now</a>
        <span class="text-right alert-close" @click="closeAlert">
          <i class="fa fa-times"></i>
        </span>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-6 login-form">
          <div class="iq-accordion-block">
            <div class="active-faq clearfix">
              <div class="container">
                <div class="row align-items-center">
                  <div class="signup-title">
                    <a href="javascript:void(0)" class="accordion-title"
                      ><span> Create an account </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-details">
              <div class="row mt-4">
                <div class="col-lg-12 mb-lg-0">
                  <p>
                    Don’t have an account yet? <br />
                    Create a free account and get paid today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="../../assets/images/Line 1.png" width="100%" alt="" />
          <div class="response-output" />
          <form @submit.prevent="register" class="p-3">
            <div class="contact-form">
              <!-- <div>
                <label for="name">Enter your full name</label>
                <input type="text" name="your-name" class="form-control text " placeholder="your name"
                  v-model="registerData.fullname">
              </div> -->
              <div>
                <label for="email">Enter your email address</label>
                <input
                  type="text"
                  name="your-email"
                  class="form-control text"
                  placeholder="your@email.com"
                  v-model="registerData.email"
                />
              </div>
              <div>
                <label for="gender">Choose your gender</label>
                <ul
                  class="row nav nav-pills mb-3 justify-content-between"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item col-lg-6 col-md-6 text-center mt-2">
                    <a
                      class="nav-link active pill"
                      id="pills-female-tab"
                      data-toggle="pill"
                      @click="HandleGender(1)"
                      role="tab"
                      aria-controls="pills-female"
                      aria-selected="false"
                      >Female</a
                    >
                  </li>
                  <li class="nav-item col-lg-6 col-md-6 text-center mt-2">
                    <a
                      class="nav-link pill"
                      id="pills-male-tab"
                      data-toggle="pill"
                      @click="HandleGender(0)"
                      role="tab"
                      aria-controls="pills-male"
                      aria-selected="false"
                      >Male</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control text"
                  placeholder="password here"
                  v-model="registerData.password"
                />
              </div>
              <div>
                <label for="password-repeat">Repeat password</label>
                <input
                  type="password"
                  name="password-repeat"
                  class="form-control text"
                  :value="registerData.repeatpassword"
                  @input="HandleRepeatPass"
                  placeholder="repeat password"
                />
              </div>
              <div class="pl-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  @click="HandleCheck"
                  id="flexCheckIndeterminate"
                />
                <label
                  class="form-check-label col-lg-12 col-md-12"
                  for="flexCheckIndeterminate"
                >
                  I hereby confirm I have fully read and agree with the
                  <a href="/terms">terms & conditions</a> .
                </label>
              </div>
              <div>
                <div
                  class="align-items-center justify-content-center create-btn"
                >
                  <div class="col-lg-12 col-md-12 col-sm-12 text-right">
                    <button
                      id="submitLogin"
                      name="submit"
                      type="submit"
                      class="button blue-btn btn-sm d-block"
                    >
                      Create an account
                      <span> <img src="../../assets/images/Arrow 3.png" alt="" /> </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      registerData: {
        gender: "",
        email: "",
        password: "",
        repeatpassword: "",
      },
      referUser: "", // user's Object ID who referred this new user.
      message: "",
      alert: false,
      successalert: false,
      valid: false,
      check: false,
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.referUser = this.$route.query.id;
    }
  },
  methods: {
    async register() {
      try {
        if (this.registerData.email == "") {
          this.message = "Please input your valid email.";
          this.valid = false;
          this.alert = true;
        } else if (this.registerData.password == "") {
          this.message = "Please input your password";
          this.alert = true;
          this.valid = false;
        } else if (this.registerData.password != this.registerData.repeatpassword) {
          this.messge = "Please input the same password ";
          this.alert = true;
          this.valid = false;
        } else if (this.registerData.gender == "male") {
          this.message = "Only female can register on this platform.";
          this.alert = true;
          this.valid = false;
        } else if (!this.check) {
          this.message = "You need to agree with our term and conditions";
          this.alert = true;
          this.valid = false;
        } else this.valid = true;

        if (!this.valid) return;

        const res = await this.$axios.$post("/api/auth/signin", {
          fullname: this.registerData.fullname,
          email: this.registerData.email,
          password: this.registerData.password,
          referUser: this.referUser,
        });

        this.message = "Successfully registered new user.";
        this.alert = false;
        this.successalert = true;

        let response = await this.$auth.loginWith("local", {
          data: this.registerData,
        });

        if (response.data.emailStatus) {
          // const referrals = await this.$axios.$post("/api/referrals", {
          //   id: this.$store.$auth.$state.user._id
          // });

          // console.log("referrals", referrals)

          this.$store.commit("setReferrals", response.data.referrals);

          this.$router.push("/auth/dashboard");
        } else {
          this.$auth.logout();

          const result = await this.$axios.$post("/api/auth/sendVerifyMail", {
            email: this.registerData.email,
            token: response.data.token,
            password: this.registerData.password,
          });

          window.location.replace("/confirm-mail");
        }

        // this.router.push('/confirm-mail')
      } catch (err) {
        console.log(err);
        if ((this.referUser = ""))
          this.message = "Error occupied during register. Please try again.";
        else this.message = "Please use the correct URL or Mail";
        this.alert = true;
        this.successalert = false;
      }
    },
    closeAlert() {
      this.alert = false;
      this.successalert = false;
    },
    HandleCheck(e) {
      this.check = e.target.checked;
    },
    HandleRepeatPass(e) {
      if (e.target.value != this.registerData.password) {
        this.message = "Please input the same password with password field";
        this.alert = true;
      } else {
        this.alert = false;
        this.registerData.repeatpassword = e.target.value;
      }
    },
    HandleGender(g) {
      if (g) this.registerData.gender = "female";
      else this.registerData.gender = "male";
    },
  },
};
</script>
<style scoped>
.signup-title {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  word-wrap: break-word;
}
.login-form {
  background-color: #f5f6fd;
  border-radius: 8px;
}

input.text {
  background: white;
  border-radius: 8px;
  border: 1px #dfdfdf solid;
}

#submitLogin {
  float: right;
  color: white !important;
  font-size: 18px !important;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
  width: 100%;
}

.login-section {
  margin-top: 10px;
}

a {
  cursor: pointer;
}

.accordion-title span {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  word-wrap: break-word;
}

.accordion-details {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
}

.accordion-details p {
  padding-bottom: 0;
  margin-bottom: 0;
}

.alert {
  margin-left: auto;
  margin-right: auto;
  background-color: #e35d5d;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
}

.alert-success {
  background: rgb(0, 172, 92);
}

.iq-accordion-block {
  padding: 3em 1em 0em 1em;
}

label {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
}

a.pill {
  background-color: white;
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  border: 1px #dfdfdf solid;
  border-radius: 8px;
}

a.active {
  background-color: #673cf6 !important;
}

input.form-check-input {
  width: 15px;
  margin-right: 15px;
  margin-top: -10px;
}

.create-btn {
  margin: 0 0 0 0;
  margin-top: 20px;
}

.create-btn div {
  padding: 0;
}

.alert-close {
  float: right;
  cursor: pointer;
}
input[type="checkbox"] {
  margin-right: 0px !important;
}
</style>
