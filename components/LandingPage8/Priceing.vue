<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">PRICING</span>
            <h2>Simple and Transparent Pricing</h2>
          </div>
        </div>
      </div>
      <PricingCardStyle1 card-class="row justify-content-center" :card-content="lists"/>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Priceing',
  data() {
    return  {
      lists: [
        {
          price: '29',
          title: 'Starter',
          subtitle: 'Feedback System',
          buttontext: 'Quick Start',
          features: [
            {
              class: '',
              title: 'Live Chat and email'
            },
            {
              class: '',
              title: 'Mobile SDK'
            },
            {
              class: '',
              title: '6000 + Intigrations'
            },
            {
              class: 'pricing-features-item disable',
              title: 'Email, Chat and Social'
            },
             {
              class: 'pricing-features-item disable',
              title: 'Basic Help Center'
            },
          ]
        },
        {
          price: '49',
          title: 'Growth',
          subtitle: 'Feedback System',
          buttontext: 'Quick Start',
          features: [
            {
              class: '',
              title: 'Mobile SDK'
            },
            {
              class: '',
              title: 'Live Chat and email'
            },
            {
              class: '',
              title: '6000 + Intigrations'
            },
            {
              class: 'pricing-features-item disable',
              title: 'Basic Help Center'
            },
            {
              class: '',
              title: 'Email, Chat and Social'
            }
          ]
        },
        {
          price: '99',
          title: 'Enterprise',
          subtitle: 'Feedback System',
          buttontext: 'Quick Start',
          features: [
            {
              class: '',
              title: 'Live Chat and email'
            },
            {
              class: '',
              title: 'Mobile SDK'
            },
            {
              class: 'pricing-features-item disable',
              title: 'Email, Chat and Social'
            },
            {
              class: 'pricing-features-item disable',
              title: 'Basic Help Center'
            },
            {
              class: 'pricing-features-item disable',
              title: '6000 + Intigrations'
            },
          ]
        }
      ]
    }
  }
}
</script>
