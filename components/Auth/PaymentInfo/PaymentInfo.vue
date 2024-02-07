<template>
  <section class="container payment-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 content-title">
              <h2> <img src="../../../assets/images/paymentinfo.png" class="mr-5" alt=""> Payment information</h2>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <div class="col-sm-12 alert alert-danger" role="alert">
                        <span class="mr-3"><img src="../../../assets/images/warningIcon.png" alt=""></span>
                        Your IBAN must be 20 to 34 characters.
                        <span class="text-right alert-close"> <i class="fa fa-times"></i> </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row">
                    <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                      <label for="PaymentMethod">Payment method</label>
                      <select type="select" name="PaymentMethod" v-model="paymentMethod" @change="HandleValidate"
                        class="form-control text mt-3">
                        <option v-for="(method, index) in methods" :key="index" :value="index + 1">{{ method }}</option>
                        <!-- <option value="1">SEFA</option>
                        <option value="2">Payoneer</option>
                        <option value="3">Tether</option> -->
                      </select>
                    </div>
                    <div v-if="paymentMethod == 3" class="sign-content">
                      <label for="currency">Network</label>
                      <!-- <span name="currency" class="form-control text currencyData"> BEP20 </span> -->
                      <select name="currency" @change="HandleValidate" v-model="currencyData"
                        class="form-control text currencyData mt-3">
                        <option v-for="(currency, index) in currencies[1]" :key="index" :value="index">{{ currency }}
                        </option>
                        <!-- <option value="0"> TRC20 </option>
                        <option value="1"> BEP20 </option> -->
                      </select>
                    </div>
                    <div v-else class="sign-content">
                      <label for="currency">Currency</label>
                      <!-- <span name="currency" class="form-control text currencyData"> EUR € </span> -->
                      <select name="currency" @change="HandleValidate" v-model="currencyData"
                        class="form-control text currencyData mt-3">
                        <option v-for="(currency, index) in currencies[0]" :key="index" :value="index">{{ currency }}
                        </option>
                        <!-- <option value="0"> EUR € </option>
                        <option value="1"> USD $ </option> -->
                      </select>
                    </div>
                  </div>
                  <div v-if="paymentMethod <= 1" class="row mt-5">
                    <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                      <label for="paymentaddress">IBAN</label>
                      <input type="text" @input="HandleValidate" v-model="paymentInfo.paymentAddress"
                        class="iban-number iban-input" name="paymentaddress">
                    </div>
                    <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                      <label for="PaymentCountry">Country of your bank</label>
                      <select type="select" @change="HandleValidate" name="PaymentCountry" v-model="paymentInfo.country"
                        class="form-control text mt-3">
                        <option value="0">The Netherlands</option>
                        <option value="1">The United States</option>
                        <option value="2">The Tailland</option>
                        <option value="3">The Ukriane</option>
                      </select>
                    </div>
                  </div>
                  <div v-if="paymentMethod == 2" class="row mt-5">
                    <div class="sign-content col-lg-8 col-md-8 col-sm-12">
                      <label for="paymentaddress2">Payoneer Address</label>
                      <input type="text" @input="HandleValidate" id="payoneer-address" class="iban-input"
                        name="paymentaddress2">
                    </div>
                  </div>
                  <div v-if="paymentMethod == 3" class="row mt-5">
                    <div class="sign-content col-lg-8 col-md-8 col-sm-12">
                      <label for="paymentaddress1">Crypto Wallet Address</label>
                      <input type="text" @input="HandleValidate" class="wallet-address iban-input" name="paymentaddress1">
                    </div>
                    <!-- <div class="sign-content col-lg-4 col-md-4 col-sm-12">
                      <label for="PaymentMethod">Country of your bank</label>
                      <select type="select" name="PaymentMethod" class="form-control text mt-3" placeholder="">
                        <option value="0">The Netherlands</option>
                        <option value="1">The United States</option>
                        <option value="2">The Tailland</option>
                        <option value="3">The Ukriane</option>
                      </select>
                    </div> -->
                    <!-- <div class="sign-content col-lg-12 col-md-12 col-sm-12 mt-5">
                      <div class="form-check">
                        <input class="form-check-input" @input="HandleValidate" type="checkbox" value=""
                          id="flexCheckIndeterminate">
                        <label class="form-check-label col-lg-12 col-md-12 " for="flexCheckIndeterminate">
                          I confirm that my bank account information is accurate, and I acknowledge that any errors due to
                          my mistake may result in payments being permanently lost.
                        </label>
                      </div>
                    </div> -->
                  </div>
                  <div class="sign-content col-lg-12 col-md-12 col-sm-12 mt-5">
                    <div class="form-check">
                      <input class="form-check-input" @input="HandleValidate" v-model="paymentInfo.checked"
                        type="checkbox" value="" id="flexCheckIndeterminate">
                      <label class="form-check-label col-lg-12 col-md-12 " for="flexCheckIndeterminate">
                        I confirm that my bank account information is accurate, and I acknowledge that any errors due to
                        my mistake may result in payments being permanently lost.
                      </label>
                    </div>
                  </div>
                  <div class="mt-5">
                    <a @click="HandleSubmit" class="blue-btn button btn-sm">Save details
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
  name: 'PaymentInfo',
  data() {
    return {
      paymentMethod: 1,
      currencyData: -1,
      methods: ["SEFA", "Payoneer", "Tether"],
      currencies: [["EUR €", "USD $"], ["ERC20", "BEP20"]],
      currentDate: this.$moment().format('MMM DD, YYYY'),
      validInfo: true,
      paymentInfo: {
        paymentMethodName: "SEFA",
        currency: "",
        paymentAddress: "",
        country: "",
        checked: false
      },

    }
  },
  methods: {
    HandleMethodSet() {
    },

    async HandleSubmit() {


      this.HandleValidate()

      if (!this.validInfo) return

      else {
        // this.paymentInfo.birth = this.date.day + "/" + this.date.month + "/" + this.date.year
        // this.paymentInfo.filledInfo = true

        console.log("saving...")

        const paymentData = { ...this.paymentInfo, user: this.$store.$auth.$state.user }

        const res = await this.$axios.$post("/api/auth/paymentInfo", {
          info: paymentData
        });

        swal.fire("Success!", res.message, "success");

        const userdata = { ...this.$store.$auth.$state.user, paymentStatus: res.detail.status }

        this.$store.commit('setUserInfo', userdata)

      }
    },

    HandleValidate() {

      if (this.paymentMethod < 1) {
        jQuery("select[name='PaymentMethod']").addClass('err')
        this.validInfo = false
      }
      else {
        this.paymentInfo.paymentMethodName = this.methods[this.paymentMethod - 1]
        jQuery("select[name='PaymentMethod']").removeClass('err')
        this.validInfo = false
      }

      if (this.currencyData < 0) {
        jQuery("select[name='currency']").addClass('err')
        this.validInfo = false
      }
      else {
        jQuery("select[name='currency']").removeClass('err')
        this.paymentInfo.currency = this.paymentMethod < 1 ? this.currencies[0][this.currencyData] : this.currencies[1][this.currencyData]
        this.validInfo = true
      }

      // console.log(jQuery("input[name='paymentaddress']").val(), jQuery("input[name='paymentaddress1']").val(), jQuery("input[name='paymentaddress2']").val())
      this.paymentInfo.paymentAddress = jQuery("input[name='paymentaddress']").val() || jQuery("input[name='paymentaddress1']").val() || jQuery("input[name='paymentaddress2']").val()

      if (!this.paymentInfo.paymentAddress || this.paymentInfo.paymentAddress == '') {
        jQuery("input[name='paymentaddress']").addClass('err')
        jQuery("input[name='paymentaddress1']").addClass('err')
        jQuery("input[name='paymentaddress2']").addClass('err')
        this.validInfo = false
      }
      else {
        jQuery("input[name='paymentaddress']").removeClass('err')
        jQuery("input[name='paymentaddress1']").removeClass('err')
        jQuery("input[name='paymentaddress2']").removeClass('err')
        this.validInfo = true
      }

      if (this.paymentInfo.country == "" && this.paymentMethod == 1) {
        jQuery("select[name='PaymentCountry']").addClass('err')
        this.validInfo = false
      }
      else {
        this.validInfo = true
        jQuery("select[name='PaymentCountry']").removeClass('err')
      }

      if (!this.paymentInfo.checked) {
        this.validInfo = false
        // jQuery("label.form-check-label").css('color', 'red')
      }
      else {
        // jQuery("label.form-check-label").css('color', 'black')
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
  display: none;
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

.alert-close {
  float: right;
  cursor: pointer;
}

.err {
  border: 1px solid red !important;
}

input[type='checkbox'].form-check-input {
  border: #DFDFDF solid 1px !important;
  border-radius: 8px !important;
  width: 20px;
}
</style>