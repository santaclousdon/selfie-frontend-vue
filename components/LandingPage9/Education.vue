<template>
  <section class="pt-0">
    <div class="container">
      <div class="row ">
        <div class="col-md-12">
          <div class="title-box wow fadeInUp text-center">
            <h2>Education</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="data-science">
            <div class="owl-carousel testimonial-style owl-loaded owl-drag" data-dots="false" data-nav="false" data-autoplay="false" data-loop="true" data-items="2" data-items-laptop="2" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" >
              <div v-for="(item,index) in items" :key="index" class="item">
                <div class="iq-boxslider-detail">
                  <div class="boxslider-content">
                    <div class="box-detail">
                      <img class="arrow-img" :src="item.src" alt="fancybox">
                      <h5 class="title">{{ item.title }}</h5>
                      <p>{{ item.subtitle }}</p>
                      <span class="fas fa-calendar-alt"></span><a href="#">{{ item.year }}</a>
                    </div>
                  </div>
                  <div class="box-gpa">
                    <h6>{{ item.grade }}</h6>
                    <span>{{ item.gpa }}</span>
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
  name: 'Education',
  data () {
    return {
      items: [
        {
          title:'B.S Computer Science',
          subtitle:'University of Altoona',
          year: '2007-2010',
          grade: 'GPA',
          gpa: '4.50/5.00',
          src: require('../../assets/images/fancybox/9-1.png')
        },
        {
          title:'M.S Computer Application.',
          subtitle:'University of Data Science Altoona',
          year: '2006-2007',
          grade: 'GPA',
          gpa: '3.50/4.400',
          src: require('../../assets/images/fancybox/9-1.png')
        },
        {
          title:'BSc in Mathematics and Statistics',
          subtitle:'University of Data Altoona',
          year: '2006-2007',
          grade: 'GPA',
          gpa: '3.50/4.400',
          src: require('../../assets/images/fancybox/9-1.png')
        },
        {
          title:'B.S Computer Science',
          subtitle:'University of Altoona',
          year: '2007-2010',
          grade: 'GPA',
          gpa: '4.50/5.00',
          src: require('../../assets/images/fancybox/9-1.png')
        }
      ]
    }
  }
}
</script>