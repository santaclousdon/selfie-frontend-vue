<template>
  <section>
    <div class="container">
      <div class="row">
        <div v-for="(list,index) in lists" :key="index" class="col-sm-4">
          <div class="consult-services wow fadeInUp contact-detail text-center">
            <div class="circle-effect">
              <i aria-hidden="true" :class="list.class" />
            </div>
            <h4 class="mb-2">
              {{ list.title }}
            </h4>
            <p class="mb-0">
              {{ list.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Address',
  data () {
    return {
      lists: [
        {
          class: 'fa fa-map-marker',
          title: 'USA Office',
          subtitle: 'Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265'
        },
        {
          class: 'fa fa-map-marker',
          title: 'Australia Office',
          subtitle: 'Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265'
        },
        {
          class: 'fa fa-map-marker',
          title: 'New zealand Office',
          subtitle: 'Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265'
        }
      ]
    }
  }
}
</script>
