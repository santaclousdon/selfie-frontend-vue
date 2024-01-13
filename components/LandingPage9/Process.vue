<template>
  <section class="pt-0">
    <div class="container">
      <div class="row ">
        <div class="col-md-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">PROCESS</span>
            <h2>Experience</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="main-timeline-section ">
            <div class="conference-center-line" />
            <div class="conference-timeline-content">
              <div v-for="(item,index) in lists" :key="index" :class="item.align">
                <div class="meta-date" />
                <div class="content-box">
                  <div class="iqtml-top-box">
                    <div class="data1">
                      <h4 class="title">
                        {{ item.title }}
                      </h4>
                      <h6 class="primary-color">
                        {{ item.title }}
                      </h6>
                    </div>
                    <div class="data2">
                      <span><i class="fa fa-calendar" />{{ item.year }}</span>
                      <span><i class="fa fa-map-marker" />{{ item.address }}</span>
                    </div>
                  </div>
                  <ul v-for="(subitem ,sindex) in item.contact" :key="sindex" class="iq-contant">
                    <li>{{ subitem.list }}</li>
                  </ul>
                </div>
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
  name: 'Process',
  data () {
    return {
      lists: [
        {
          align: 'timeline-article content-right-container',
          title: 'Data Scientist',
          subtitle: 'Keeping Group',
          year: '2007-2010',
          address: 'Paris, france',
          contact: [
            {
              list: 'Learn a group of 5 people'
            },
            {
              list: 'Passages of Lorem Ipsum available.'
            },
            {
              list: 'Easy to Customize List passages of available.'
            }
          ]
        },
        {
          align: 'timeline-article content-left-container',
          title: 'Data Intelligence',
          subtitle: 'Keeping Group',
          year: '2006-2007',
          address: 'Paris, france',
          contact: [
            {
              list: 'Learn a group of 5 people'
            },
            {
              list: 'Passages of Lorem Ipsum available.'
            },
            {
              list: 'Easy to Customize List passages of available.'
            }
          ]
        },
        {
          align: 'timeline-article content-right-container',
          title: 'Data Analytics',
          subtitle: 'Keeping Group',
          year: '2006-2007',
          address: 'Paris, france',
          contact: [
            {
              list: 'Learn a group of 5 people'
            },
            {
              list: 'Passages of Lorem Ipsum available.'
            },
            {
              list: 'Easy to Customize List passages of available.'
            }
          ]
        },
        {
          align: 'timeline-article content-left-container',
          title: 'Big Data Services',
          subtitle: 'Keeping Group',
          year: '2006-2007',
          address: 'Paris, france',
          contact: [
            {
              list: 'Learn a group of 5 people'
            },
            {
              list: 'Passages of Lorem Ipsum available.'
            },
            {
              list: 'Easy to Customize List passages of available.'
            }
          ]
        }
      ]
    }
  }
}
</script>
