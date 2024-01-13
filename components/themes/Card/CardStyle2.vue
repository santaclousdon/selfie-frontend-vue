<template>
  <div
    :class="cardClass"
    data-dots="false"
    data-nav="false"
    data-items="4"
    data-items-laptop="4"
    data-items-tab="3"
    data-items-mobile="1"
    data-items-mobile-sm="1"
    data-autoplay="true"
    data-loop="true"
    data-margin="30"
  >
    <div v-for="(item, index) in cardContent" :key="index" class="item text-left">
      <div class="iq-team">
        <div class="iq-team-img">
          <img :src="item.media" class="img-fluid" alt="#1">
        </div>
        <div class="iq-share">
          <div class="slideouticons">
            <label class="mainlabel"><i class="fa fa-share-alt" /></label>
            <div class="iconswrapper">
              <ul>
                <li><a href="#"><i class="fab fa-facebook-f" /></a></li>
                <li><a href="#"><i class="fab fa-twitter" /></a></li>
                <li><a href="#"><i class="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="iq-team-info text-center">
          <a>
            <h5>{{ item.title }}</h5>
          </a>
          <span>{{ item.subtitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardStyle2',
  props: ['cardContent', 'cardClass']
}
</script>
