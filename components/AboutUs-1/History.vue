<template>
  <section class="pt-0">
    <div class="container">
      <div class="row xamin-bg">
        <div class="col-sm-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">Our History</span>
            <h2>Xamin Company History</h2>
          </div>
        </div>
        <div class="col-sm-12 mb-5" v-for="(item, index) in list" :key="index">
          <div :class="item.bgcolor">
            <div class="xamin-history row row-eq-height align-items-center wow fadeInUp ">
              <div class="col-sm-4 col-lg-2 col-md-2"> <img alt="" class="single_image-img attachment-full" height="360"  :src="item.image" width="550"> </div>
              <div class="text-lg-center text-left col-sm-12 col-lg-2 col-md-3">
                <h4 class="pt-3 pb-1 pt-lg-0 pb-lg-0">{{item.title}}</h4>
              </div>
              <div class="col-sm-12 col-lg-8 col-md-7">
                <p class="mb-0">{{ item.description }}</p>
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
    name:'History',
    data(){
      return{
        list:[
          {
            title: '2012 – 2013',
            description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.',
            image: require('../../assets/images/about-us/01.png'),
            bgcolor: 'bg-gray',
          },
          {
            title: '2013 – 2014',
            description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.',
            image: require('../../assets/images/about-us/07.png'),
            bgcolor: 'border',
          },{
            title: '2014 – 2015',
            description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.',
            image: require('../../assets/images/about-us/03.png'),
            bgcolor: 'bg-gray',
          },{
            title: '2015 – 2016',
            description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.',
            image: require('../../assets/images/about-us/02.png'),
            bgcolor: 'border',
          } 
        ]
      }
    }   
}
</script>