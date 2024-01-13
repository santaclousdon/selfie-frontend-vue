<template>
  <section class="position-relative overview-block-pt iq-pb-70 xamin-custom-bg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 wow fadeInUp">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">TYPE</span>
            <h2>Our Popular Courses</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(type,index) in types" :key="index" class="col-lg-4 col-md-6">
          <div class="iq-main-courses">
            <div class="iq-image">
              <img :src="type.src" class="img-fluid" alt="">
            </div>
            <div class="iq-content mt-4">
              <div class="title-box wow fadeInUp  text-left">
                <span class="title-design">{{ type.subtitle }}</span><h4>{{ type.title }}</h4><p>{{ type.desc }}</p>
              </div>
              <h4 class="primary-color">
                <strong>{{ type.price }}</strong> | {{ type.lesson }} lessons
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Type',
  data () {
    return {
      types: [
        {
          src: require('../../assets/images/others/15.jpg'),
          subtitle: 'Core Programming',
          title: 'Python for Beginners',
          desc: 'Python Learning, Deep Learning, TensorFlow 2.0, Python, Regression, Classification, Clustering, NPL, Data Analysis.',
          price: '$59',
          lesson: '30'
        },
        {
          src: require('../../assets/images/others/16.jpg'),
          subtitle: 'ARTIFICIAL INTELLIGENCE',
          title: 'Machine Learning',
          desc: 'Machine Learning, Deep Learning, TensorFlow 2.0, Python, Regression, Classification, Clustering, NPL, Data Analysis.',
          price: '$39',
          lesson: '40'
        },
        {
          src: require('../../assets/images/others/17.jpeg'),
          subtitle: 'NEURAL NETWORKS',
          title: 'Deep Learning',
          desc: 'Deep Learning, Deep Learning, TensorFlow 2.0, Python, Regression, Classification, Clustering, NPL, Data Analysis.',
          price: '$59',
          lesson: '30'
        }
      ]
    }
  }
}
</script>
