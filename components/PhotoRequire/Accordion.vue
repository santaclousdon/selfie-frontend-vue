<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 content-title">
              <h2>Photo Requirements</h2>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> What are the minimal requirements?
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="col-lg-12 mb-4 mb-lg-0">
                      <p>All selfies must meet specific requirements. To receive payment, you need to upload a minimum of
                        two clothed half-body pictures (face and upper body). Please refer to our rates page to see the
                        different types of pictures and the amounts we pay for them. Currently, we allow a maximum of 8
                        photos per person/account. You will be notified by email if the limit is increased or if any other
                        opportunities to earn more money arise.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> Rules and requirements </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="col-lg-12 mb-4 mb-lg-0">
                      <p>Please see the basic rules and requirements below. All rules are subject to change without prior
                        notice, and our moderators reserve the right to categorize uploaded pictures based on our
                        interpretation.</p>
                      <p>
                        <span class="mr-3"> <img src="../../assets/images/arrowRightBlue.png" alt=""> </span>
                        Minimum of 2 clothed half-body pictures (face and upper body)</p>
                      <p>
                        <span class="mr-3"> <img src="../../assets/images/arrowRightBlue.png" alt=""> </span>
                        Clear and high quality pictures</p>
                      <p>
                        <span class="mr-3"> <img src="../../assets/images/arrowRightBlue.png" alt=""> </span>
                        All pictures must be in-doors</p>
                      <p>
                        <span class="mr-3"> <img src="../../assets/images/arrowRightBlue.png" alt=""> </span>
                        No references to specific countries in the background, including power sockets.</p>
                      <p>
                        <span class="mr-3"> <img src="../../assets/images/arrowRightBlue.png" alt=""> </span>
                        Maximum 8 photos per person/account</p>
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
          title: 'What are the minimal requirements?',
          description: 'All selfies must meet specific requirements. To receive payment, you need to upload a minimum of two clothed half-body pictures (face and upper body). Please refer to our rates page to see the different types of pictures and the amounts we pay for them. Currently, we allow a maximum of 8 photos per person/account. You will be notified by email if the limit is increased or if any other opportunities to earn more money arise.'
        },
        {
          title: 'Rules and requirements',
          description: 'Please see the basic rules and requirements below. All rules are subject to change without prior notice, and our moderators reserve the right to categorize uploaded pictures based on our interpretation.'
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
  font-family: Darker Grotesque;
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
}</style>