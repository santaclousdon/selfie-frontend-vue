<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <div v-for="(item,index) in items" :key="index" class="iq-blog-box wow fadeInUp">
            <div class="iq-blog-image">
              <img width="1260" height="954" :src="item.src" alt="img">
              <ul class="iq-blogtag">
                <li> <a href="/blog">{{ item.tag }}</a> </li>
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
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
              <div class="pagination justify-content-center">
                <nav aria-label="Page navigation">
                  <ul class="page-numbers">
                    <li> <span aria-current="page" class="page-numbers current">1</span> </li>
                    <li> <a class="page-numbers" href="/blog">2</a> </li>
                    <li> <a class="next page-numbers" href="/blog"> <span aria-hidden="true">Next page</span> </a> </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 sidebar-service-right mt-5 mt-lg-0">
          <div class="widget-area">
            <div id="search-2" class="widget widget_search wow fadeInRight">
              <form method="get" class="search-form">
                <label for="search-form" /> <input
                  id="search-form"
                  type="search"
                  class="search-field"
                  placeholder="Search"
                  value=""
                  name="s"
                > <button type="submit" class="search-submit">
                  <i class="fa fa-search" />
                </button>
              </form>
            </div>
            <div class="testimonial-widget-menu widget wow fadeInRight">
              <CardStyle3 :card-content="list" card-class="owl-carousel owl-loaded owl-drag" />
            </div>
            <div class="iq-widget-menu widget wow fadeInRight">
              <h2 class="widget-title">
                Recent Post
              </h2>
              <div class="list-inline iq-widget-menu">
                <ul class="iq-post">
                  <li v-for="(item,index) in post" :key="index">
                    <div class="post-img">
                      <img width="150" height="150" :src="item.src" alt="">
                      <div class="post-blog">
                        <div class="blog-box">
                          <ul class="list-inline">
                            <li class="list-inline-item mr-3">
                              <a href="/blog-details"> <i class="fa fa-calendar mr-2" aria-hidden="true" />September 26, 2019</a>
                            </li>
                          </ul>
                          <a class="new-link" href="/blog-details">
                            <h5>{{ item.title }}</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div id="categories-4" class="widget widget_categories wow fadeInRight">
              <h2 class="widget-title">
                Categories
              </h2>
              <ul>
                <li v-for="(option,index) in category" :key="index" class="cat-item">
                  <a href="#">{{ option.title }}</a> <span class="post_count">{{ option.number }} </span>
                </li>
              </ul>
            </div>
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
        }
      ],
      list: [
        {
          title: 'Jack White',
          subtitle: 'CEO',
          description: 'Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur.',
          src: require('../../assets/images/testimonials/1.jpg')
        },
        {
          title: 'Walhan Bobe',
          subtitle: 'Business Adviser',
          description: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed ut perspiciatis error. Perspiciatis unde omnis iste.”',
          src: require('../../assets/images/testimonials/2.jpg')
        },
        {
          title: 'Mark McManus',
          subtitle: 'COO',
          description: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”',
          src: require('../../assets/images/testimonials/3.jpg')
        }
      ],
      category: [
        {
          title: 'CSS',
          number: 2
        },
        {
          title: 'Design',
          number: 2
        },
        {
          title: 'HTML',
          number: 2
        },
        {
          title: 'Uncategorized',
          number: 1
        }
      ],
      post: [
        {
          title: 'Construction industry',
          href: '#',
          date: 'September 26, 2019',
          src: require('../../assets/images/about-us/01.png')
        },
        {
          title: 'Build Construction',
          href: '#',
          date: 'September 26, 2019',
          src: require('../../assets/images/about-us/02.png')
        },
        {
          title: ' Life Lack Meaning',
          href: '#',
          date: 'September 26, 2019',
          src: require('../../assets/images/about-us/03.png')
        }
      ]
    }
  }
}
</script>
