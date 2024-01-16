<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-accordion career-style">
            <div v-for="(item, index) in items" :key="index" class="iq-accordion-block">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-11 col-sm-11">
                      <a href="javascript:void(0)" class="accordion-title"><span>{{ item.title }}</span>
                      </a>
                    </div>
                    <div class="col-md-1 col-sm-11 text-right">
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

p {
  color: #222222;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}
</style>