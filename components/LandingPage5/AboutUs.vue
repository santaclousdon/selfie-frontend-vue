<template>
  <section>
    <div class="container">
      <FancyCard1 card-class="row" :card-content="list" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      list:[
        {
          title: 'Individual Analyst',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
          src: require('../../assets/images/services/10.png'),
        },
        {
          title: 'Teams & Organizations',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
          src: require('../../assets/images/services/11.png'),
        },
        {
          title: 'Embedded Analytics',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
          src: require('../../assets/images/services/12.png'),
        }
      ]
    }
  }
}
</script>
