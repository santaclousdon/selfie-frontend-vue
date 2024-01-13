<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div v-for="(list,index) in lists" :key="index" class="col-lg-4 col-md-4 col-sm-12">
          <div class="servicebox-datascience wow fadeInUp text-left">
            <div class="service-box-detail">
              <h2 class="data-title">
                {{ list.title }}
              </h2>
              <p>{{ list.subtitle }}</p>
              <a class="link-btn" href="/landing-page-9">
                <span class="btn-effect"> Readmore<i class="ion-ios-arrow-right ml-2" /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Specializing2',
  data () {
    return {
      lists: [
        {
          title: 'Data Science with Python',
          subtitle: 'Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.',
          href: '#'
        },
        {
          title: 'Machine Learning',
          subtitle: 'Contrary to popular established fact that a reader will be distracted by the readable content of a page when looking.',
          href: '#'
        },
        {
          title: 'Data Science Capstone',
          subtitle: 'Many variations of passages fact that a reader will be distracted content of a page when looking at its layout.',
          href: '#'
        }
      ]
    }
  }
}
</script>
