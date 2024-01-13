<template>
  <section class="pt-0">
    <div class="container">
      <div class="row xamin-bg">
        <div class="col-sm-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">Team</span>
            <h2>Management Team</h2>
          </div>
        </div>
        <div class="col-md-12 wow fadeInUp">
          <CardStyle2 :card-content="list" :card-items="4" card-class="owl-carousel owl-loaded owl-drag" />
        </div>
      </div>
      <Client />
    </div>
  </section>
</template>
<script>
import Client from '../../components/AboutUs-1/Client'
export default {
  name: 'Team',
  components: {
    Client
  },
  data () {
    return {
      list: [
        {
          title: 'Anna Mull',
          subtitle: 'COO',
          media: require('../../assets/images/team/1.jpg')
        },
        {
          title: 'Petey Cruiser',
          subtitle: 'Project Manager',
          media: require('../../assets/images/team/2.jpg')
        },
        {
          title: 'Greta Life',
          subtitle: 'CFO',
          media: require('../../assets/images/team/3.jpg')
        },
        {
          title: 'Marcash Dane',
          subtitle: 'Project Manager',
          media: require('../../assets/images/team/4.jpg')
        },
        {
          title: 'Handry White',
          subtitle: 'Project Manager',
          media: require('../../assets/images/team/5.jpg')
        }
      ]
    }
  }
}
</script>
