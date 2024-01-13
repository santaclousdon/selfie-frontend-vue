<template>
  <section class="position-relative pt-0   iq-pb-70">
    <div class="container">
      <div class="row">
        <div class="col-md-12 wow fadeInUp title-box text-center">
          <span class="title-design">SERVICES</span>
          <h2>Services Expertise</h2>
          <p class="mb-0">
            It is a long established fact that a reader will be distracted by the readable
          </p>
        </div>
      </div>
      <div class="row">
        <div v-for="(service,index) in services" :key="index" class="col-md-6 col-lg-4 col-sm-12">
          <div class="iq-servicebox-three wow fadeInUp  text-left">
            <div class="servicebox-icon">
              <i aria-hidden="true" :class="service.icon" />
            </div>
            <div class="servicebox-detail">
              <h5 class="mb-1">
                {{ service.title }}
              </h5><p class="mb-0">
                {{ service.desc }}
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
  name: 'Services',
  data () {
    return {
      services: [
        {
          icon: 'flaticon flaticon-business',
          title: 'Closed-Loop Analytics',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page .'
        },
        {
          icon: 'flaticon flaticon-network',
          title: 'Advisory Group',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page .'
        },
        {
          icon: 'flaticon flaticon-support-1',
          title: 'Opportunity Analysis',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page .'
        },
        {
          icon: 'flaticon flaticon-process',
          title: 'Population Health',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page .'
        },
        {
          icon: 'flaticon flaticon-planning-1',
          title: 'Readiness Assessment',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page .'
        },
        {
          icon: 'flaticon flaticon-idea-2',
          title: 'Life Sciences',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page .'
        }
      ]
    }
  }
}
</script>
