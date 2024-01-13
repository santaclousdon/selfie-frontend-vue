<template>
  <section class="pt-0 xamin-background overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">OUR SERVICES</span>
            <h2>Streamline your workflow.</h2>
          </div>
        </div>
      </div>
      <div class="row custom-tab verticaltab3">
        <div class="col-md-6">
          <div class="col-lg-12 col-md-12 ">
            <ul id="pills-tab" class="nav nav-pills nav-pills-style-3 mb-5" role="tablist" aria-orientation="vertical">
              <li v-for="(service,index) in services" :key="index" class="nav-item">
                <a :class="service.class" data-toggle="pill" :href="service.id" role="tab" aria-selected="true">
                  <div class="media">
                    <img :src="service.src" alt="tab-image" class="img-fluid">
                    <div class="media-body">
                      <h5 class="mb-2 active-title">{{ service.title }}</h5>
                      <p class="mb-0">{{ service.desc }}</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 tab-content">
          <div v-for="(tab,index) in tabs" :id="tab.id" :key="index" :class="tab.class">
            <div class="xamin-right-img-wm">
              <img alt="#" :src="tab.src" class="attachment-full img-fluid">
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
      services: [ {
        id: '#tab-software-development',
        src: require('../../assets/images/services/6-1.png'),
        title: 'Capture',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        class: 'nav-link show active'
      },
      {
        id: '#tab-application-services',
        src: require('../../assets/images/services/6-2.png'),
        title: 'Content',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        class: 'nav-link'
      },
      {
        id: '#tab-data-analytics',
        src: require('../../assets/images/services/6-3.png'),
        title: 'Analysis',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        class: 'nav-link'
      },
      {
        id: '#tab-help-desk-services',
        src: require('../../assets/images/services/6-4.png'),
        title: 'Data',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        class: 'nav-link'
      }
      ],
      tabs: [ {
        id: 'tab-software-development',
        src: require('../../assets/images/services/30.png'),
        class: 'tab-pane fade active show'
      },
      {
        id: 'tab-application-services',
        src: require('../../assets/images/services/14.png'),
        class: 'tab-pane fade'
      },
      {
        id: 'tab-data-analytics',
        src: require('../../assets/images/services/13.png'),
        class: 'tab-pane fade'
      },
      {
        id: 'tab-help-desk-services',
        src: require('../../assets/images/services/14.png'),
        class: 'tab-pane fade'
      }
      ]
    }
  }
}
</script>>
