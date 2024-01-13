<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-accordion career-style">
            <div v-for="(item,index) in items" :key="index" class="iq-accordion-block">
              <div class="active-faq clearfix">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-9 col-sm-12">
                      <a href="javascript:void(0)" class="accordion-title"><span>{{ item.title }}</span></a>
                    </div>
                    <div class="col-md-3 col-sm-12 text-center text-lg-right text-md-right">
                      <a class="button" href="/careers">Apply Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-details">
                <div class="container">
                  <div class="row mt-4">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                      <h4 class="mb-3">
                        Job Descriptions:
                      </h4>
                      <ul class="iq-list">
                        <li v-for="(list,index) in description" :key="index">
                          <i :class="list.class" /><span>{{ list.title }}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <h4 class="mb-3">
                        Qualifications:
                      </h4>
                      <ul class="iq-list">
                        <li v-for="(list,index) in qualifications" :key="index">
                          <i :class="list.class" /><span>{{ list.title }}</span>
                        </li>
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
  data () {
    return {
      items: [
        {
          title: 'Finance advisor-2 Posts'
        },
        {
          title: 'Marketing Manager-1 Posts'
        },
        {
          title: 'Health and Medical Expert -1 Posts'
        }
      ],
      description: [
        {
          class: 'fa fa-check-square-o',
          title: 'It is a long established fact that a reader will be distracted.'
        },
        {
          class: 'fa fa-check-square-o',
          title: 'The point of using Lorem Ipsum is that.'
        },
        {
          class: 'fa fa-check-square-o',
          title: 'Many desktop publishing packages and web page.'
        },
        {
          class: 'fa fa-check-square-o',
          title: 'There are many variations of passages.'
        },
        {
          class: 'fa fa-check-square-o',
          title: 'All the Lorem Ipsum generators on the Internet.'
        },
        {
          class: 'fa fa-check-square-o',
          title: 'It uses a dictionary of over 200 Latin words.'
        }
      ],
      qualifications: [
        {
          class: 'fa fa-check-square-o',
          title: 'Advance Advisory Team'
        },
        {
          class: 'fa fa-check-square-o',
          title: 'Professional Consulting Services'
        },
        {
          class: 'fa fa-check-square-o',
          title: '24/7 Support Help Center'
        },
        {
          class: 'fa fa-check-square-o',
          title: 'Advance Advisory Team'
        },
        {
          class: 'fa fa-check-square-o',
          title: 'Professional Consulting Services'
        },
        {
          class: 'fa fa-check-square-o',
          title: '24/7 Support Help Center'
        }
      ]
    }
  },
  mounted () {
    const jquery = window.$
    jQuery('.iq-accordion .iq-accordion-block .accordion-details').hide()
    jQuery('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow')
    jQuery('.iq-accordion .iq-accordion-block').on('click', function () {
      if (jQuery(this).children('div.accordion-details ').is(':hidden')) {
        jQuery('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow')
        jQuery(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow')
      }
    })
  }
}
</script>
