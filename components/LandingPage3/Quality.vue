<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-12" v-for="(item, index) in list" :key="index">
          <div class="xamin-services mb-0 wow fadeInUp text-center">
            <div class="services-detail">
              <img :src="item.image" alt="img" />
              <h5 class="mb-1"> {{ item.title }} </h5>
              <p class="mb-0"> {{ item.description }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: 'Quality',
    data(){
      return{
        list:[
          {
            title: 'Perfect Event',
            description: 'big data through robust that solutions the power.',
            image: require('../../assets/images/services/01.png'),
          },
          {
            title: 'Organization',
            description: 'big data through robust that solutions the power.',
            image: require('../../assets/images/services/02.png'),
          },
          {
            title: 'Innovation',
            description: 'big data through robust that solutions the power.',
            image: require('../../assets/images/services/03.png'),
          },
          {
            title: 'Perfect Event',
            description: 'big data through robust that solutions the power.',
            image: require('../../assets/images/services/04.png'),
          }
        ]
      }
    }
}
</script>