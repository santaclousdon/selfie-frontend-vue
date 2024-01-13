<template>
  <section class="position-relative iq-pb-70">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box wow fadeInUp  text-center">
            <span class="title-design" />
            <h2>Industry Expertise</h2>
            <p class="mb-0">
              Readable content of a page when looking at its layout. The point of using Lorem.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item,index) in items" :key="index" class="col-md-6 col-lg-4 col-sm-6">
          <div class="xamin-client wow fadeInUp  text-center">
            <div class="client-icon">
              <img :src="item.src" class="img-fluid" alt="fancybox">
            </div>
            <div class="client-detail">
              <h4 class="mb-1">
                {{ item.title }}
              </h4>
              <p class="mb-0">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Expertize',
  data () {
    return {
      items: [
        {
          src: require('../../assets/images/clients/01.png'),
          title: 'Digital',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/clients/02.png'),
          title: 'Analytics',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/clients/03.png'),
          title: 'Consulting',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/clients/04.png'),
          title: 'Data',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/clients/05.png'),
          title: 'Finance & Accounting',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/clients/06.png'),
          title: 'Operations Management',
          desc: 'There are many variations of passages of readable content page looking'
        }
      ]
    }
  }
}
</script>
