<template>
  <section class="aboutus-two-service">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">Our Services</span>
            <h2>We Provide Useful Services</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="(list,index) in items" :key="index">
          <CardStyle1>
            <div slot="cardMedia">
              <img :src="list.src" alt="fancy-list">
            </div>
            <div slot="cardTitle">
              <h4 class="mb-2">{{ list.title }}</h4>
            </div>
            <div slot="cardBody">
              <p>{{ list.description }}</p>
            </div>
            <div slot="cardList" class="text-left">
              <ul class="iq-list">
                <li> <i class="fas fa-check-square"></i><span>Advance Advisory Team</span> </li>
                <li> <i class="fas fa-check-square"></i><span>Professional Consulting Services</span> </li>
                <li> <i class="fas fa-check-square"></i><span>Advance Advisory Team</span> </li>
              </ul>
            </div>
          </CardStyle1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CardStyle1 from '../themes/Card/CardStyle1' 
export default {
  name: 'Services',
  components: { CardStyle1 },
  data() {
    return{
      items : [
        {
          title: 'Data Analytics',
          description: 'It is a long established fact that a reader will be distracted by the of readable content.',
          src: require('../../assets/images/services/01.png')
        },
        {
          title: 'Managed Analytics',
          description: 'It is a long established fact that a reader will be distracted by the of readable content.',
          src: require('../../assets/images/services/02.png')
        },
        {
          title: 'Big Data Services',
          description: 'It is a long established fact that a reader will be distracted by the of readable content.',
          src: require('../../assets/images/services/03.png')
        },
        {
          title: 'Data Science',
          description: 'It is a long established fact that a reader will be distracted by the of readable content.',
          src: require('../../assets/images/services/04.png')
        },
        {
          title: 'Business Intelligence',
          description: 'It is a long established fact that a reader will be distracted by the of readable content.',
          src: require('../../assets/images/services/05.png')
        },
        {
          title: 'Data Visualization',
          description: 'It is a long established fact that a reader will be distracted by the of readable content.',
          src: require('../../assets/images/services/06.png')
        }
      ]
    }
  }
}
</script>