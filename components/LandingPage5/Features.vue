<template>
  <section class="iq-bg-over">
    <div class="container">
      <div class="row ">
        <div class="col-md-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">FEATURES</span>
            <h2>Everything You Need <br>  to Build Powerful Analytic Apps</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <FancyCard3 card-class="col-md-6" :card-content="list1" />
        <FancyCard3 card-class="col-md-6" :card-content="list2" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Features',
  data () {
    return {
      list1: [
        {
          title: 'Embeded',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
          src: require('../../assets/images/services/01.png')
        },
        {
          title: 'Analyzed',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
          src: require('../../assets/images/services/02.png')
        },
        {
          title: 'Deploy',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
          src: require('../../assets/images/services/03.png')
        }
      ],
      list2: [
        {
          title: 'MashUp',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
          src: require('../../assets/images/services/04.png')
        },
        {
          title: 'Impact',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
          src: require('../../assets/images/services/05.png')
        },
        {
          title: 'Control',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.',
          src: require('../../assets/images/services/06.png')
        }
      ]
    }
  }
}
</script>