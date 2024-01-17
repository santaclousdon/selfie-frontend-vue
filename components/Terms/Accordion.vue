<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-8 col-sm-12 content-title">
              <h2>Terms & Conditions</h2>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 contact-nav text-right">
              <a href="/privacy">Privacy policy<span class="blue-btn ml-3"><img src="../../assets/images/Arrow 3.png"
                    width="15" alt="->"></span> </a>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div class="iq-accordion-block p-3">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> Sub heading
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
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non massa sed dolor sodales
                        accumsan. Sed nec ornare risus. Duis at sollicitudin augue. Pellentesque a semper est, vitae
                        fringilla lectus. In id nulla sodales, lacinia diam at, molestie urna. Pellentesque facilisis
                        efficitur lectus eu pellentesque. Integer id convallis elit.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span> Sub heading
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
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non massa sed dolor sodales
                        accumsan. Sed nec ornare risus. Duis at sollicitudin augue. Pellentesque a semper est, vitae
                        fringilla lectus. In id nulla sodales, lacinia diam at, molestie urna. Pellentesque facilisis
                        efficitur lectus eu pellentesque. Integer id convallis elit.</p>
                      <p>Aenean eget tellus nec sapien sodales fringilla. Cras sed euismod lorem. Duis sit amet hendrerit
                        elit, eu consequat velit. Vivamus congue, lorem vel ornare iaculis, turpis arcu iaculis diam, a
                        accumsan ex nisl eget erat. Sed placerat, dolor at ultrices tempus, felis mi gravida tellus,
                        iaculis interdum eros quam at justo. Sed sit amet nunc vitae sapien egestas tempor id et risus.
                        Maecenas quis lorem eu neque mollis efficitur vitae sed justo. Proin condimentum eros ut tortor
                        laoreet bibendum.</p>
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
}
</style>