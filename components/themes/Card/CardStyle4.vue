<template>
  <div
    :class="cardClass"
    data-dots="true"
    data-nav="false"
    data-items="1"
    data-items-laptop="1"
    data-items-tab="1"
    data-items-mobile="1"
    data-items-mobile-sm="1"
    data-autoplay="true"
    data-loop="true"
    data-margin="30"
  >
    <div v-for="(item,index) in cardImage" :key="index" class="consulting-img text-left">
      <div slot="cardMedia">
        <img :src="item.src" alt="slider">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardStyle4',
  // eslint-disable-next-line vue/require-prop-types
  props: ['cardImage', 'cardClass']
}
</script>
