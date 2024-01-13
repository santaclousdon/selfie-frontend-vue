<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">HOW WE WORK</span>
            <h2>How Does Xamin Works</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item,index) in lists" :key="index" class="col-lg-4">
          <div class="consult-services wow fadeInUp large  text-center">
            <div class="circle-effect">
              <img :src="item.src" alt="fancybox">
            </div>
            <h4 class="mb-2">{{ item.title }}</h4>
            <p class="mb-0">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>  
</template>
<script>
export default {
  name: 'HowWeWork',
  data() {
    return {
      lists: [
        {
          title: 'User Behavior',
          subtitle: 'There are established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          src: require('../../assets/images/services/07.png') 
        },
        {
          title: 'Apply Algorithm',
          subtitle: 'Contrary to popular fact that a reader will be distracted by the readable when looking at its layout content of a page.',
          src: require('../../assets/images/services/08.png') 
        },
        {
          title: 'Apply Algoritham',
          subtitle: 'Many variations established fact reader will be distracted by the readable content of a page when at its layout looking.',
          src: require('../../assets/images/services/09.png') 
        }
      ]
    }
  }
}
</script>