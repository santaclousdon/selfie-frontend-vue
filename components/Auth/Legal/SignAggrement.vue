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
                      <div class="col-sm-12 alert alert-danger" role="alert">
                        <span class="mr-3"><img src="../../../assets/images/warningIcon.png" alt=""></span>
                        You have entered an incorrect email address.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row">
                    <div class="sign-content">
                      <label for="FullName">Your full name (Contributor)</label>
                      <input type="text" name="FullName" class="form-control text " placeholder="">
                    </div>
                    <div class="sign-content">
                      <label for="currentDate">Date</label>
                      <span name="currentDate" class="form-control text currentDate"> {{ currentDate }} </span>
                    </div>
                  </div>
                  <div class="">
                    <a href="" class="blue-btn button btn-sm mt-3">
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

export default {
  name: 'SignAggrement',
  data() {
    return {
      items: [
        {
          title: 'Grant of Rights',
          description: 'The Contributor hereby agrees to sell and provide their selfie photographs ("Photos") to the Company. The Contributor grants the Company the full rights to use these Photos on various (adult) entertainment websites to engage with their audience.'
        },
        {
          title: 'Confidentiality of Personal Details',
          description: 'The Contributor\'s personal details shall remain confidential and will not be shared publicly by the Company under any circumstances.'
        },
        {
          title: 'Licensing to Third Parties',
          description: 'The Company reserves the right to license the Photos to third parties for an undisclosed period of time. This licensing pertains only to the Photos and does not include any personal details of the Contributor.'
        },
        {
          title: 'Agreement to Terms',
          description: 'By signing this Agreement, the Contributor confirms that they fully understand and agree to the terms set forth herein.'
        }
      ],
      currentDate: this.$moment().format('MMM DD, YYYY')
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