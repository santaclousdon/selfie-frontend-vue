<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <div v-for="(item, index) in items" :key="index" class="item col-4">
              <div class="iq-blog-box mb-0 p-3">
                <div class="iq-blog-image align-left">
                  <img :src="item.src" class="img-fluid center-block" alt="blogimage">
                </div>
                <div class="iq-blog-detail">
                  <div class="iq-blog-meta">
                    <ul>
                      <li class="list-inline-item"> <span class="screen-reader-text">Posted on</span> <a href="#"
                          rel="bookmark"> <time class="entry-date published updated"
                            datetime="2019-09-26T06:51:19+00:00">{{ item.date }} </time> </a> </li>
                    </ul>
                  </div>
                  <div class="blog-title">
                    <a href="#">
                      <h4>{{ item.title }}</h4>
                    </a>
                  </div>
                  <p>{{ item.description }}</p>
                  <div class="blog-button"><a class="button-link" href="#">Read More<i class="fa fa-angle-right"
                        aria-hidden="true"></i></a></div>
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
  name: 'Blog',
  data() {
    return {
      items: [
        {
          title: 'Build Construction',
          tag: 'HTML',
          date: 'September 26, 2019',
          description: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/how/how1.png')
        },
        {
          title: 'Life Lack Meaning',
          tag: 'Design',
          date: 'September 26, 2019',
          description: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/how/how2.png')
        },
        {
          title: 'Construction industry',
          tag: 'HTML',
          date: 'September 26, 2019',
          description: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/how/how3.png')
        }
      ]
    }
  }
}
</script>
<style scoped>
.iq-blog-image {
  text-align: left;
  float: left;
}
.iq-blog-box {
  background-color: #F5F6FD;
}
</style>