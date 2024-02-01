<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-8 col-sm-6 content-title">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 contact-nav text-right">
              <nuxt-link to="/contact-us">Contact us<span class="blue-btn ml-3"><img src="../../assets/images/Arrow 3.png"
                    width="15" alt="->"></span> </nuxt-link>
            </div>
          </div>
          <div class="iq-accordion career-style mt-5">
            <div v-for="(item, index) in items" :key="index" class="iq-accordion-block">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="faq-title">
                      <a href="javascript:void(0)" class="accordion-title"><span>{{ item.title }}</span>
                      </a>
                    </div>
                    <div class="text-right">
                      <span><img class="arrow-image" src="../../assets/images/arrowUp.png" alt=""></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="col-lg-12 mb-4 mb-lg-0">
                      <p>{{ item.description }}</p>
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
import arrowUpImg from "../../assets/images/arrowUp.png"
import arrowDownImg from "../../assets/images/arrowDown.png"

export default {
  name: 'Accordion',
  data() {
    return {
      items: [
        {
          title: 'Is this the first question?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non massa sed dolor sodales accumsan. Sed nec ornare risus. Duis at sollicitudin augue. Pellentesque a semper est, vitae fringilla lectus. In id nulla sodales, lacinia diam at, molestie urna. Pellentesque facilisis efficitur lectus eu pellentesque. Integer id convallis elit.'
        },
        {
          title: 'This must be the second one, right?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non massa sed dolor sodales accumsan. Sed nec ornare risus. Duis at sollicitudin augue. Pellentesque a semper est, vitae fringilla lectus. In id nulla sodales, lacinia diam at, molestie urna. Pellentesque facilisis efficitur lectus eu pellentesque. Integer id convallis elit.'
        },
        {
          title: 'How about a third question?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non massa sed dolor sodales accumsan. Sed nec ornare risus. Duis at sollicitudin augue. Pellentesque a semper est, vitae fringilla lectus. In id nulla sodales, lacinia diam at, molestie urna. Pellentesque facilisis efficitur lectus eu pellentesque. Integer id convallis elit.'
        },
        {
          title: 'Do you finally understand it all?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non massa sed dolor sodales accumsan. Sed nec ornare risus. Duis at sollicitudin augue. Pellentesque a semper est, vitae fringilla lectus. In id nulla sodales, lacinia diam at, molestie urna. Pellentesque facilisis efficitur lectus eu pellentesque. Integer id convallis elit.'
        }
      ]
    }
  },
  mounted() {
    const jquery = window.$
    jQuery('.iq-accordion .iq-accordion-block .accordion-details').hide()
    jQuery('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow')
    jQuery('.iq-accordion .iq-accordion-block:first .active-faq .container .row img').attr('src', arrowDownImg)
    jQuery('.iq-accordion .iq-accordion-block').on('click', function () {
      jQuery(jQuery('.iq-accordion .iq-accordion-block').children('div.active-faq').children('div.container').children('div.row').children('.text-right').children('span').children('img')).attr('src', arrowUpImg)
      jQuery(jQuery(this).children('div.active-faq').children('div.container').children('div.row').children('.text-right').children('span').children('img')[0]).attr('src', arrowDownImg)
      if (jQuery(this).children('div.accordion-details ').is(':hidden')) {
        jQuery('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow')
        jQuery(this).addClass('accordion-active').children('div.accordion-details ').slideDown('slow')
      }
    })
  }
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

div.active-faq .container .row:hover {
  background-color: #EDEFFD;
  cursor: pointer;
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