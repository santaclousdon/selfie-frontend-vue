<template>
  <section class="container">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <!-- <div class="col-sm-12 alert alert-danger" role="alert">
                        <span class="mr-3"><img src="../../../assets/images/warningIcon.png" alt=""></span>
                        You have entered an incorrect email address.
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row">
                    <div class="sign-content">
                      <label for="FullName">Your full name (Contributor)</label>
                      <input type="text" name="FullName" class="form-control text " placeholder="" v-model="legalName">
                    </div>
                    <div class="sign-content">
                      <label for="currentDate">Date</label>
                      <span name="currentDate" class="form-control text currentDate"> {{ currentDate }} </span>
                    </div>
                  </div>
                  <div class="">
                    <a @click="HandleSubmit" class="blue-btn button btn-sm mt-3">
                      <div class="row justify-content-center align-items-center">
                        <span class="label-text mr-3">Sign this agreement</span>
                        <img src="../../../assets/images/legal-sign.png" class="sign-image" alt="">
                      </div>
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
  name: 'SignAggrement',
  data() {
    return {
      legalName: "",
      validInfo: false,
      message: "",
      currentDate: this.$moment().format('MMM DD, YYYY')
    }
  },
  methods: {
    async HandleSubmit() {
      try {

        this.HandleValidate()

        if (!this.validInfo) {
          swal.fire('Oops...', this.message, 'warning');
          return;
        }

        const legalInfo = {
          name: this.legalName,
          date: this.currentDate,
          email: this.$store.$auth.$state.user.email
        }

        const res = await this.$axios.$post("/api/auth/legalSign", {
          info: legalInfo
        });

        // const userdata = { ...this.personalInfo, email: this.$store.$auth.$state.user.email, password: this.$store.$auth.$state.user.password }
        const userdata = { email: res.email, password: res.password }

        swal.fire("Well done!", "Your signature has been sent successfully!", "success")

        // this.$store.commit('resetUserInfo', userdata)

      } catch (error) {
        swal.fire('Oops...', "Something went Wront!!!.", 'warning')
      }
    },
    HandleValidate() {
      if (this.legalName == "") {
        this.validInfo = false;
        this.message = "Please enter your full name.";
        return;
      }

      const user = this.$store.$auth.$state.user

      let reg = user.firstname + " " + user.lastname

      console.log(reg, this.legalName)

      let vaild = reg.match(this.legalName);

      console.log(vaild)
      if (!vaild) {
        this.validInfo = false;
        this.message = "Please sign with the correct name.";
      }
      else this.validInfo = true

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

.sign-content span.currentDate {
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
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}

.sign-image {
  width: 18px;
  height: 18px;
  margin-top: 5px;
}
</style>