<template>
  <section class="position-relative iq-pb-70 iq-bg-over ">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-7">
          <div class="title-box wow fadeInUp  text-center">
            <span class="title-design">Categories</span><h2>Select Your Prefered Course From Our Departments</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(category,index) in categories" :key="index" class="col-md-6 col-lg-3 col-sm-6">
          <div class="xamin-client wow fadeInUp  text-center">
            <div class="client-icon iq-image">
              <img :src="category.src" class="img-fluid" alt="#">
            </div>
            <div class="client-detail">
              <h5 class="mb-1">
                {{ category.title }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-sm-12">
          <div class=" text-center mt-5 ">
            <a class="button blue-btn button-icon" href="/landing-page-16"><span class="btn-effect"> View All Categories</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Category',
  data () {
    return {
      categories: [
        {
          src: require('../../assets/images/others/04.png'),
          title: 'Design'
        },
        {
          src: require('../../assets/images/others/05.png'),
          title: 'Development'
        },
        {
          src: require('../../assets/images/others/06.png'),
          title: 'Marketing'
        },
        {
          src: require('../../assets/images/others/07.png'),
          title: 'Music'
        },
        {
          src: require('../../assets/images/others/08.png'),
          title: ' Photography'
        },
        {
          src: require('../../assets/images/others/09.png'),
          title: 'IT & Software'
        },
        {
          src: require('../../assets/images/others/10.png'),
          title: 'Business'
        },
        {
          src: require('../../assets/images/others/11.png'),
          title: 'Health & Fitness'
        }
      ]
    }
  }
}
</script>>
