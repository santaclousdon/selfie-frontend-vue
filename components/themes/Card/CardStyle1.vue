<template>
  <div>
    <div class="service-box d-inherit p-4 my-3 wow fadeInUp text-left">
      <slot name="cardMedia" />
      <div class="service-detail align-self-center">
        <slot name="cardTitle" />
        <slot name="cardBody" />
        <slot name="cardList" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardStyle1'
}
</script>
