<template>
  <section>
    <div class="container">
      <div class="row wow fadeInUp">
        <div class="col-sm-12">
          <div class="iq-masonry-block">
            <div class="isotope-filters isotope-tooltip">
              <button data-filter="" class="active">
                All<span class="post_no">8</span>
              </button><button data-filter=".design">
                Design<span class="post_no">3</span>
              </button><button data-filter=".html">
                HTML<span class="post_no">2</span>
              </button><button data-filter=".photography">
                Photography<span class="post_no">3</span>
              </button><button data-filter=".video">
                Video<span class="post_no">1</span>
              </button>
            </div>
            <div :class="gridClass">
              <CardStyle7
                v-for="(item, index) in ItemList"
                :key="index"
                :card-class="item.styleClass"
                :card-title="item.title"
                :card-subtitle="item.subTitle"
                :card-media="item.image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Isotope',
  props: ['gridClass'],
  data () {
    return {
      ItemList: [
        {
          styleClass: 'iq-masonry-item video',
          title: 'Business Growth',
          subTitle: 'Video',
          image: require('../../assets/images/about-us/08.png')
        },
        {
          styleClass: 'iq-masonry-item html',
          title: 'Business Growth',
          subTitle: 'HTML',
          image: require('../../assets/images/about-us/02.png')
        },
        {
          styleClass: 'iq-masonry-item html',
          title: 'Business Growth',
          subTitle: 'HTML',
          image: require('../../assets/images/about-us/03.png')
        },
        {
          styleClass: 'iq-masonry-item design',
          title: 'Business Growth',
          subTitle: 'HTML',
          image: require('../../assets/images/about-us/08.png')
        },
        {
          styleClass: 'iq-masonry-item photography',
          title: 'Business Growth',
          subTitle: 'HTML',
          image: require('../../assets/images/about-us/01.png')
        },
        {
          styleClass: 'iq-masonry-item photography',
          title: 'Business Growth',
          subTitle: 'HTML',
          image: require('../../assets/images/about-us/08.png')
        },
        {
          styleClass: 'iq-masonry-item design photography',
          title: 'Business Growth',
          subTitle: 'HTML',
          image: require('../../assets/images/about-us/03.png')
        },
        {
          styleClass: 'iq-masonry-item design',
          title: 'Business Growth',
          subTitle: 'HTML',
          image: require('../../assets/images/about-us/02.png')
        }
      ]
    }
  }
}
</script>
