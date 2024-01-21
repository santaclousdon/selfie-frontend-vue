<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 content-title">
              <h2> <img src="../../../assets/images/legal-title.png" class="mr-5" alt=""> Legal</h2>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> Please read and sign our legal
                          agreement.
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="legal-warn">
                      <img src="../../../assets/images/legal-warn.png" width="20" height="20" alt="">
                    </div>
                    <div class="col-lg-11 mb-4 mb-lg-0">
                      <p>To receive payment, you need to read and sign our legal agreement. Please ensure you fully
                        understand it before signing. Rest assured, your personal details will never be shared publicly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <!-- <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> Rules and requirements </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="col-lg-12 mb-4 mb-lg-0">
                      <p>This Agreement is made between the undersigned ("Contributor") and Brainwave HQ LLC ("Company").
                      </p>
                      <ul>
                        <li v-for="(item, index) in items" :key="index"><span class="legal-item-title">{{ item.title }}:
                          </span> <span class="legal-item-description">{{ item.description }} </span> </li>
                      </ul>
                    </div>
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
  name: 'Accordion',
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
      ]
    }
  },
  mounted() { }
}
</script>
<style scoped >
section {
  padding-bottom: 0%;
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
  width: 80%;
  display: inline-block;
  padding-left: 0;
}

.blue-btn {
  background-color: #673CF6;
  border-radius: 100px;
  color: white;
  padding: 2px 5px;
  cursor: pointer;
}

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
</style>