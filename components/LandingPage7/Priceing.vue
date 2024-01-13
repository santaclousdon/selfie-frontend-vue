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
          price: '0',
          title: 'Free',
          subtitle: 'Feedback System',
          description: 'It is a long established fact that a reader will be distracted',
          buttontext: 'Sign up Free',
          features: [
            {
              class: '',
              title: 'Social Integration'
            },
            {
              class: '',
              title: 'Push Notifications'
            },
            {
              class: '',
              title: 'Relevant App Content'
            },
            {
              class: '',
              title: 'Log-in via Social Media'
            }
          ]
        },
        {
          price: '49',
          title: 'Growth',
          subtitle: 'Feedback System',
          description: 'It is a long established fact that a reader will be distracted',
          buttontext: 'Sign up Free',
          features: [
            {
              class: '',
              title: 'Social Integration'
            },
            {
              class: '',
              title: 'Push Notifications'
            },
            {
              class: '',
              title: 'Relevant App Content'
            },
            {
              class: '',
              title: 'Log-in via Social Media'
            }
          ]
        },
        {
          price: '99',
          title: 'Enterprise',
          subtitle: 'Feedback System',
          description: 'It is a long established fact that a reader will be distracted',
          buttontext: 'Sign up Free',
          features: [
            {
              class: '',
              title: 'Social Integration'
            },
            {
              class: '',
              title: 'Push Notifications'
            },
            {
              class: '',
              title: 'Relevant App Content'
            },
            {
              class: '',
              title: 'Log-in via Social Media'
            }
          ]
        }
      ]
    }
  }
}
</script>
