<template>
  <section class="pt-0">
    <div class="container">
      <div class="row xamin-bg">
        <div class="col-sm-12">
          <div class="title-box wow fadeInUp text-center">
            <h2>Trusted by the world's largest brands.</h2>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="container-visualization wow fadeIn" >
            <ul class="iq-client column-5">
              <li v-for="(list,index) in lists" :key="index" class="iq-client-list">
                <a class="clients-block wow fadeIn" data-wow-delay="0.6s" href="#" >
                  <img class="img-fluid" :src="list.src" alt="image0">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Brands',
  data () {
    return {
      lists: [
        {
          src: require('../../assets/images/partners/1.png')
        },
        {
          src: require('../../assets/images/partners/2.png')
        },
        {
          src: require('../../assets/images/partners/3.png')
        },
        {
          src: require('../../assets/images/partners/4.png')
        },
        {
          src: require('../../assets/images/partners/5.png')
        },
        {
          src: require('../../assets/images/partners/1.png')
        },
        {
          src: require('../../assets/images/partners/2.png')
        },
        {
          src: require('../../assets/images/partners/3.png')
        },
        {
          src: require('../../assets/images/partners/4.png')
        },
        {
          src: require('../../assets/images/partners/5.png')
        },
        {
          src: require('../../assets/images/partners/1.png')
        },
        {
          src: require('../../assets/images/partners/2.png')
        },
        {
          src: require('../../assets/images/partners/3.png')
        },
        {
          src: require('../../assets/images/partners/4.png')
        },
        {
          src: require('../../assets/images/partners/5.png')
        }
      ]
    }
  }
}
</script>