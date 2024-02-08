<template>
  <section class="container payment-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 content-title">
              <h2> <img src="../../../assets/images/setting_title.png" class="mr-5" alt=""> Settings</h2>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-3">
                    <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                      <label for="EmailAddress">Email Address</label>
                      <input type="text" class="iban-input" name="EmailAddress" v-model="email" @input="HandleValidate">
                    </div>
                    <!-- <div class="sign-content">
                      <label for="currency">Currency</label>
                      <span name="currency" class="form-control text currencyData"> EUR € </span>
                    </div> -->
                  </div>
                  <div class="row mt-3">
                    <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                      <label for="CurrentPassword">Current password</label>
                      <input type="password" class="iban-input" name="CurrentPassword" v-model="password"
                        @input="HandleValidate">
                    </div>
                    <!-- <div class="sign-content">
                      <label for="currency">Currency</label>
                      <span name="currency" class="form-control text currencyData"> EUR € </span>
                    </div> -->
                  </div>
                  <div class="row mt-3">
                    <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                      <label for="NewPassword">New password</label>
                      <input type="password" class="iban-input" name="NewPassword" v-model="newPassword"
                        @input="HandleValidate">
                    </div>
                    <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                      <label for="RepeatPassword">Repeat new password</label>
                      <input type="password" class="iban-input" name="RepeatPassword" v-model="confirmPass"
                        @input="HandleValidate">
                    </div>
                  </div>
                  <div class="mt-3">
                    <a @click="HandleSubmit" class="blue-btn button btn-sm">Save
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>


import swal from 'sweetalert2';

export default {
  name: 'Settings',
  data() {
    return {
      email: "",
      password: "",
      newPassword: "",
      confirmPass: "",
      validInfo: true,
      currentDate: this.$moment().format('MMM DD, YYYY')
    }
  },
  methods: {
    async HandleSubmit() {

      this.HandleValidate()

      if (this.newPassword != this.confirmPass) {
        jQuery("input[name='NewPassword']").addClass('err')
        jQuery("input[name='RepeatPassword']").addClass('err')
        swal.fire("ERROR!", "Please type the same password.", "error");
        this.validInfo = false
      }
      else {
        jQuery("input[name='NewPassword']").removeClass('err')
        jQuery("input[name='RepeatPassword']").removeClass('err')
        this.validInfo = true
      }

      if (!this.validInfo) return

      else {

        const settingInfo = {
          oldEmail: this.$store.$auth.$state.user.email,
          email: this.email,
          password: this.password,
          newPassword: this.newPassword
        }
        try {

          const res = await this.$axios.$post("/api/auth/resetPass", {
            info: settingInfo
          });

          // const userdata = { ...this.personalInfo, email: this.$store.$auth.$state.user.email, password: this.$store.$auth.$state.user.password }
          const userdata = { email: res.email, password: res.password }

          swal.fire("SUCCESS!", "Your password has been successfully reset!", "success")

          this.$store.commit('resetUserInfo', userdata)

        } catch (error) {
          swal.fire('ERROR!', "Your password is incorrect!", 'warning')
        }
      }
    },
    HandleValidate() {

      if (this.email == "") {
        jQuery("input[name='EmailAddress']").addClass('err')
        this.validInfo = false
      }
      else {
        jQuery("input[name='EmailAddress']").removeClass('err')
        this.validInfo = true
      }

      if (this.password == "") {
        jQuery("input[name='CurrentPassword']").addClass('err')
        this.validInfo = false
      }
      else {
        jQuery("input[name='CurrentPassword']").removeClass('err')
        this.validInfo = true
      }

      if (this.newPassword == "") {
        jQuery("input[name='NewPassword']").addClass('err')
        this.validInfo = false
      }
      else {
        jQuery("input[name='NewPassword']").removeClass('err')
        this.validInfo = true
      }

      if (this.confirmPass == "") {
        jQuery("input[name='RepeatPassword']").addClass('err')
        this.validInfo = false
      }
      else {
        jQuery("input[name='RepeatPassword']").removeClass('err')
        this.validInfo = true
      }
    }
  },
  mounted() { }
}
</script>
<style scoped >
section {
  padding: 0%;
  float: left;
}

.accordion-active div.active-faq .container .row {
  background-color: white;
}

.iq-accordion .iq-accordion-block {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  border: 1px #EDEFFD solid
}

div.active-faq .container .row {
  background-color: white;
}

.content-title h2 {
  color: #222222;
  font-size: 50px;
  font-family: Darker Grotesque normal;
  font-weight: 800;
  word-wrap: break-word
}

p {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

.faq-title {
  width: 100%;
  display: inline-block;
  padding-left: 0;
}

/* .blue-btn {
  background-color: #673CF6;
  border-radius: 8px;
  color: white;
  padding: 2px 5px;
  cursor: pointer;
} */

.text-right {
  width: 20%;
}

.contact-nav a {
  color: black;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word;
}

.legal-warn {
  padding-left: 15px;
}

.legal-item-title {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word
}

.legal-item-description {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

ul {
  list-style: none;
  counter-reset: legal;
  padding: 0px;
}

ul li {
  margin-bottom: 20px;
}

ul li:before {
  margin-right: 10px;
  content: counters(legal, ' ')".";
  counter-increment: legal;
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word;
}

.label-text {
  color: white;
  font-size: 24px;
  font-family: Darker Grotesque normal;
  font-weight: 600;
  word-wrap: break-word;
}

.alert {
  width: 100%;
  background-color: #E35D5D;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
  display: block;
}

.sign-content {
  padding: 0px 15px 0px 15px;
}

.sign-content input {
  border-radius: 8px;
  border: 1px #DFDFDF solid;
  margin-top: 15px;
}

.sign-content span.currencyData {
  margin-top: 15px;
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word;
  border: none;
}

label {
  color: #222222;
  font-size: 29px;
  font-family: Darker Grotesque normal;
  font-weight: 700;
  word-wrap: break-word
}

.sign-image {
  width: 18px;
  height: 18px;
  margin-top: 5px;
}

.payment-section {
  margin-top: 150px;
}

select {
  color: #222222;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

input.iban-input {
  height: 40px;
}

.form-check-label {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word;
  margin-top: 15px;
  cursor: pointer;
}

input[type='checkbox'].form-check-input {
  border: #DFDFDF solid 1px !important;
  border-radius: 8px !important;
  width: 20px;
}

.err {
  border: 1px solid red !important;
}
</style>