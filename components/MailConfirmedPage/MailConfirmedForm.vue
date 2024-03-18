<template>
  <section class="">
    <div class="container login-section justify-content-center">
      <!-- <div class="col-sm-6 alert alert-danger" role="alert">
        <span class="mr-3"><img src="../../assets/images/warningIcon.png" alt=""></span>
        Verify your email address
      </div> -->
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-6 login-form p-5">
          <h2 class="text-center mb-4 sub-title">
            E-Mail Verified.
          </h2>
          <div class="response-output" />
          <div class="col-lg-12 col-md-12 col-sm-12 text-center confirm-image">
            <img src="../../assets/images/emailConfirmed.png" alt="">
          </div>
          <div class="col-lg-12 mb-4 mb-lg-0 mt-5 text-center confirm-detail">
            <p>Continue browsing</p>
          </div>
          <img src="../../assets/images/Line 1.png" width="100%" height="1" alt="">
          <div class="col-lg-12 col-md-12 col-sm-12 contact-nav text-center mt-5">
            <button @click="HandleSubmit" class="button blue-btn mr-3">Go to dashboard</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'MailConfirmedForm',
  data() {
    return {
    };
  },
  methods: {
    async HandleSubmit() {
      try {
        console.log(this.$route.query)

        let response = await this.$axios.$post("/api/auth/getDataFromToken", {
          token: this.$route.query.info
        });

        let responseLogin = await this.$auth.loginWith("local", {
          data: {email: response.user.email, password: this.$route.query.password}
        });
          this.$store.commit('setReferrals', responseLogin.data.referrals)
        await this.$axios.$post("/api/auth/sendConfirmedMail", {
          email: response.user.email
        });

          this.$router.push("/auth/dashboard");
      } catch (err) {
        console.log(err);
        this.alert = true
      }
    },
    closeAlert() {
      this.alert = false
    }
  }
}
</script>
<style scoped >
.sub-title {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque;
  font-weight: 700;
  word-wrap: break-word
}

.forgot-pass a {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}

.login-form {
  background-color: #F5F6FD;
  border-radius: 8px;
}

input.text {
  background: white;
  border-radius: 8px;
  border: 1px #DFDFDF solid
}

#submitLogin {
  float: right;
}

.login-section {
  margin-top: 50px;
}

.detail-form {
  border: #EDEFFD 1px solid;
  border-radius: 8px;
}

.accordion-title span {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  word-wrap: break-word
}

.resend-mail {
  color: white;
  font-size: 24px;
  font-family: Darker Grotesque normal;
  font-weight: 500;
  word-wrap: break-word
}

.contact-support {
  color: #222222;
  font-size: 24px;
  font-family: Darker Grotesque normal;
  font-weight: 500;
  word-wrap: break-word;
  border: #D2D2D2 1px solid;
}

.accordion-details {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

.blue-btn-arrow {
  background: #673CF6;
  border-radius: 9999px;
  padding: 2px 5px;
}

.confirm-detail {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}
</style>

