<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <div class="iq-blog-box">
            <div class="iq-blog-image wow fadeInUp">
              <img width="1260" height="954" :src="require('../../assets/images/about-us/01.png')" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="">
              <ul class="iq-blogtag">
                <li><a href="#">Design</a></li>
              </ul>
            </div>
            <div class="iq-blog-detail">
              <div class="iq-blog-meta wow fadeInUp">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <span class="screen-reader-text">Posted on</span> <a href="#" rel="bookmark"> <time class="entry-date published updated" datetime="2019-09-26T06:47:04+00:00">September 26, 2019 </time> </a>
                  </li>
                </ul>
              </div>
              <div class="blog-content">
                <div class="blog-content wow fadeInUp">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                  <blockquote class="quote-style">
                    <p>Sed vehicula odio sed velit volutpat aliquet. Sed dignissim enim et venenatis.<br> &#8211; maxin belly</p>
                  </blockquote>
                  <ul>
                    <li>Incidunt vitae quae facere</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Incidunt vitae quae facere</li>
                    <li>Tenetur laborum rutrum</li>
                  </ul>
                  <h4 class="mb-2">
                    The rutrum ullamcorper mattis
                  </h4>
                  <p>Content is an essential aspect of any digital marketing campaign. The Content Marketing Institute offers some of the best advice around in terms of how content can help your brand. From industry trends to best practices, their posts offer helpful advice on how to create the best strategies for your business and how your content marketing should play a role in the &#8220;bigger picture.</p>
                  <h4 class="mb-2">
                    The stand Lorem Ipsum passage
                  </h4>
                  <p>Curabitur pulvinar mi in lacinia convallis. Nulla sagittis urna hendrerit metus maximus luctus. Phasellus ac condimentum lacus. Mauris efficitur ultrices augue ut interdum. Aliquam placerat finibus ultrices. Nam pretium fermentum ante, porta luctus eros sodales et. Ut sollicitudin semper elit, vel efficitur justo ultrices quis. Etiam vel tortor rhoncus, malesuada ligula tempus, pulvinar nisi. Cras mi odio, efficitur pharetra lacinia vel, cursus at dolor.</p>
                  <div class="row ">
                    <div class="col-lg-6 col-md-6 col-sm-12 mb-5 mt-3">
                      <img :src="require('../../assets/images/about-us/02.png')" alt="images">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 mb-5 mt-3">
                      <img :src="require('../../assets/images/about-us/03.png')" alt="images">
                    </div>
                  </div>
                  <h4 class="mb-2">
                    Pellentesque ultriciesdictum
                  </h4>
                  <p>Nullam commodo sem id mollis pretium. Duis sed aliquam quam, rutrum placerat massa. Etiam nec hendrerit purus, ut laoreet libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec bibendum cursus mi, in dignissim enim posuere quis. Integer sollicitudin libero quam, id eleifend arcu malesuada vel. Cras justo tortor, mollis eget dapibus in, egestas sed enim. Donec bibendum neque lorem, eget commodo nulla finibus sed. Aliquam erat volutpat. Nullam sed euismod libero, lobortis rutrum urna. Donec et urna tellus.</p>
                  <h4 class="mb-2">
                    Integer sollicitudin libero quam
                  </h4>
                  <p class="">
                    This live blog allowed people, who may not have been able to make it to the actual event, stay informed and become a part of the discussion even though they were not in attendance. Their blog lets you interact with various industry leaders, while providing their audience with content that is engaging and educational.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="comments" class="comments-area wow fadeInUp">
            <div id="respond" class="comment-respond">
              <h3 id="reply-title" class="comment-reply-title">
                Leave a Reply <small><a id="cancel-comment-reply-link" rel="nofollow" href="#">Cancel reply</a></small>
              </h3>
              <form action="#" method="post">
                <div class="contact-form">
                  <textarea name="your-message" cols="40" rows="10" class="form-control textarea " placeholder="Comment" />
                  <input type="text" name="your-name" class="form-control text" placeholder="Your Name">
                  <input type="text" name="your-email" class="form-control text" placeholder="Your Email">
                  <input type="text" name="your-website" class="form-control text" placeholder="Website">
                  <input type="submit" class="btn btn-primary mb-4 mb-lg-0" value="Submit">
                </div>
              </form>
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
                              <a :href="item.href"> <i class="fas fa-calendar-alt mr-2" aria-hidden="true" />September 26, 2019</a>
                            </li>
                          </ul>
                          <a class="new-link" :href="item.href">
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
