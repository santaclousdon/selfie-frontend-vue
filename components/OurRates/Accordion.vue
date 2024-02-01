<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 content-title">
              <h2>Our Rates</h2>
            </div>
          </div>
          <div class="iq-accordion career-style mt-3">
            <div class="iq-accordion-block p-3">
              <div class="accordion-details">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12 mb-lg-0">
                      <p>As you've probably understood by now, we pay you for uploading your selfies. The amount you
                        receive is determined by the type of selfie you upload to us. Below, you'll find our current
                        rates. Please note that two clothed half-body (face and upper body) pictures are mandatory. All
                        photos must be clear, of high quality, and taken indoors.</p>
                      <p class="mt-3">You can upload a maximum of 8 selfies of which at least two must be “face, half
                        body” pictures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div v-for="(item, index) in items" :key="index" class="p-3 iq-accordion-block">
              <div class="row">
                <div class="col-lg-7 col-md-7 col-sm-12">
                  <div class="active-faq clearfix">
                    <div class="container">
                      <div class="row align-items-center">
                        <div class="faq-title">
                          <a href="javascript:void(0)" class="accordion-title"><span>{{ item.title }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-details">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-12 mb-lg-0">
                          <p>{{ item.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-12 text-right pt-4 align-items-center">
                  <div class="row align-items-center">
                    <div class="col-6">
                      <span v-if="item.type" class="selfie-type">{{ item.type }}</span>
                    </div>
                    <div class="col-6 align-items-center">
                      <span class="selfie-cost">€ {{ item.cost.toFixed(2) }}</span>
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
          title: 'Face, half body',
          description: 'Breasts fully covered. Fully clothed.',
          type: 'Mandatory',
          cost: 1.00
        },
        {
          title: 'Face, half body',
          description: 'Visible cleavage. Lightly clothed, lingerie or bikini.',
          type: '',
          cost: 1.50
        },
        {
          title: 'Face, full body',
          description: 'Breasts fully covered. Fully clothed.',
          type: '',
          cost: 1.50
        },
        {
          title: 'Face, full body',
          description: 'Visible cleavage. Lightly clothed.',
          type: '',
          cost: 1.75
        },
        {
          title: 'No face, full body',
          description: 'Lingerie or bikini.',
          type: 'Maximum 1',
          cost: 1.75
        },
        {
          title: 'Face, full body',
          description: 'Lingerie or bikini.',
          type: '',
          cost: 1.75
        },
        {
          title: 'No face, breasts',
          description: 'Fully nude',
          type: 'Maximum 1',
          cost: 1.75
        },
        {
          title: 'Face, half body',
          description: 'Fully nude',
          type: '',
          cost: 1.75
        },
        {
          title: 'No face, full body',
          description: 'Fully nude',
          type: 'Maximum 1',
          cost: 1.75
        },
        {
          title: 'Face, full body',
          description: 'Fully nude',
          type: '',
          cost: 1.75
        },
        {
          title: 'No face, full body',
          description: 'Fully nude, masturbating.',
          type: 'Maximum 1',
          cost: 1.75
        },
        {
          title: 'Face, full body',
          description: 'Fully nude, masturbating.',
          type: '',
          cost: 1.75
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
  word-wrap: break-word;
  margin-bottom: 0px;
}

.faq-title {
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

.contact-nav a {
  color: black;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  word-wrap: break-word;
}

.selfie-type {
  background: #E35D5D;
  border-radius: 8px;
  padding: 5px 15px;

  color: white;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word
}

.selfie-cost {
  color: #673CF6;
  font-size: 50px;
  font-family: Darker Grotesque normal;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word
}
</style>