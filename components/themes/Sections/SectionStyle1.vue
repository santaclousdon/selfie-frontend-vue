<template>
  <section class="position-relative">
    <img :src="require('../../../assets/images/about-us/02.png')" class="about-box-img" alt="">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" />
        <div class="col-lg-6 wow fadeInUp align-items-center">
          <div class="title-box wow fadeInUp text-left">
            <slot name="sectionTitle" />
            <slot name="sectionHeading" />
            <slot name="sectionDescription" />
          </div>
          <div class="text-left">
            <slot name="sectionContent" />
          </div>
          <div class="text-left mt-5">
            <slot name="sectionButton" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionStyle1'
  // eslint-disable-next-line vue/require-prop-types
}
</script>
