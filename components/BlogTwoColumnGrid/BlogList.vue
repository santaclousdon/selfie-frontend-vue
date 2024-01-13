<template>
  <section>
    <div class="container">
      <div class="row">
        <div v-for="(item,index) in items" :key="index" class="col-md-6 wow fadeInUp">
          <div class="iq-blog-box wow fadeInUp">
            <div class="iq-blog-image">
              <img width="1260" height="954" :src="item.src" alt="img">
              <ul class="iq-blogtag">
                <li> <a href="/blog-two-column-grid">{{ item.tag }}</a> </li>
              </ul>
            </div>
            <div class="iq-blog-detail">
              <div class="iq-blog-meta">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <span class="screen-reader-text" /> <a href="/blog-details" rel="bookmark"> <time datetime="2019-09-26" class="entry-date published updated">{{ item.date }} </time> </a>
                  </li>
                </ul>
              </div>
              <div class="blog-title">
                <h4 class="entry-title">
                  <a href="/blog-details"> {{ item.title }} </a>
                </h4>
              </div>
              <div class="blog-content">
                <p>{{ item.content }}</p>
              </div>
              <div class="blog-button">
                <a class="button-link" href="/blog-details"> Read More <i class="fa fa-angle-right" aria-hidden="true" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
          <div class="pagination justify-content-center">
            <nav aria-label="Page navigation">
              <ul class="page-numbers">
                <li> <span aria-current="page" class="page-numbers current">1</span> </li>
                <li> <a class="page-numbers" href="/blog-two-column-grid">2</a> </li>
                <li> <a class="next page-numbers" href="/blog-two-column-grid"> <span aria-hidden="true">Next page</span> </a> </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BlogList',
  data () {
    return {
      items: [
        {
          tag: 'CSS',
          title: 'Construction industry',
          date: 'September 26, 2019',
          href: '#',
          content: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/about-us/01.png')
        },
        {
          tag: 'HTML',
          title: 'Build Construction',
          date: 'September 26, 2019',
          href: '#',
          content: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/about-us/02.png')
        },
        {
          tag: 'Design',
          title: 'Life Lack Meaning',
          date: 'September 26, 2019',
          href: '#',
          content: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/about-us/03.png')
        },
        {
          tag: 'CSS',
          title: 'Construction industry',
          date: 'September 26, 2019',
          href: '#',
          content: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/about-us/01.png')
        },
        {
          tag: 'HTML',
          title: 'Build Construction',
          date: 'September 26, 2019',
          href: '#',
          content: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/about-us/02.png')
        },
        {
          tag: 'Design',
          title: 'Life Lack Meaning',
          date: 'September 26, 2019',
          href: '#',
          content: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
          src: require('../../assets/images/about-us/03.png')
        }
      ]
    }
  }
}
</script>
