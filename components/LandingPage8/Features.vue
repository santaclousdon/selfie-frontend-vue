<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="title-box wow fadeInUp  text-left">
            <span class="title-design"></span>
            <h2>Popular features that your business needs</h2>
            <p>Bleeding about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
          </div>
        </div>
        <div class="col-md-4 align-self-center">
          <div class=" text-center">
            <a class="button button-icon" href="/landing-page-8"><span class="btn-effect"> Explore more features</span></a>
          </div>
        </div>
      </div>
      <FancyCard card-class="row mt-5 mt-md-0" :card-content="lists1" />
      <FancyCard card-class="row" :card-content="lists2" />
    </div>
  </section>  
</template>
<script>
export default {
  name: 'Features',
  data() {
    return {
      lists1: [
        {
          class: 'flaticon flaticon-verification',
          title: 'Behavioral-Analytics'
        },
        {
          class: 'flaticon flaticon-accounting',
          title: 'Stock Management'
        },
        {
          class: 'flaticon flaticon-idea',
          title: 'Receivable & Payables'
        },
        {
          class: 'flaticon flaticon-planning-1',
          title: 'Manage Bills & Expenses'
        },
        {
          class: 'flaticon flaticon-transfer',
          title: 'SMS Reminders'
        }
      ],
      lists2: [
        {
          class: 'flaticon flaticon-support',
          title: 'Auto Sync & Backup'
        },
        {
          class: 'flaticon flaticon-plan',
          title: 'Ready & Return Filing'
        },
        {
          class: 'flaticon flaticon-research',
          title: '60+ detailed reports'
        },
        {
          class: 'flaticon flaticon-research',
          title: 'Product Details'
        },
        {
          class: 'flaticon flaticon-customer-1',
          title: 'Customized Rates'
        }
      ]
    }
  }
}
</script>