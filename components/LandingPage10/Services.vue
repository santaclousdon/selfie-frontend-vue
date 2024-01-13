<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div v-for="(list, index) in lists" :key="index" class="col-md-3 col-sm-6">
          <div class="xamin-services wow fadeInUp  text-left">
            <div class="services-detail">
              <div>
                <i aria-hidden="true" :class="list.icon"></i>
              </div>
              <h5 class="mb-1">{{ list.title  }}</h5>
              <p class="mb-0">{{ list.subtitle  }}</p>
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
      lists: [
        {
          title: 'Data Visualization',
          subtitle: 'Established fact that a reader will be distracted readable looking layout.',
          icon: 'flaticon flaticon-award'
        },
        {
          title: 'Organization',
          subtitle: 'Reader will be distracted by the readable content when looking.',
          icon: 'flaticon flaticon-calendar'
        },
        {
          title: 'Innovation',
          subtitle: 'Distracted by the readable content of a page when layout.',
          icon: 'flaticon flaticon-award'
        },
        {
          title: 'Perfect Event',
          subtitle: 'Fact that a reader will be distracted page when looking at its layout.',
          icon: 'flaticon flaticon-growth-2'
        }
      ]
    }
  }
}
</script>