<template>
  <section class="pt-0 ">
    <div class="container">
      <FancyCard2 card-class="row" :card-content="list" />
    </div>
  </section>
</template>
<script>
// import countTo from 'vue-count-to'
export default {
    name:'Counter',
    components: {
      // countTo
    },
    data () {
    return {
      list: [
        {
          number: 50,
          title: 'Tranding Volumn',
          src: require('../../assets/images/fancybox/5-1.png')
        },
        {
          number: 400,
          title: 'Transaction',
          src: require('../../assets/images/fancybox/5-2.png')
        },
        {
          number: 150,
          title: 'Happy User',
          src: require('../../assets/images/fancybox/5-3.png')
        },
        {
          number: 750,
          title: 'Custom Portfolio Created',
          src: require('../../assets/images/fancybox/5-4.png')
        }
      ]
    }
  }
}
</script>