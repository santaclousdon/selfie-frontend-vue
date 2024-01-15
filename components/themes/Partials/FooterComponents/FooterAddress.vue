<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <img src="../../../../assets/images/trustpilot.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterAddress',
  // eslint-disable-next-line vue/require-prop-types
  props: ['addressTitle', 'addressContent']
}
</script>
<style scoped>
img {
  margin-top: 10px;
  margin-bottom: 50px;
}
</style>
