<template>
  <div class="text-left iq-breadcrumb-one iq-bg-over black ">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-8 text-left align-self-center">
          <nav aria-label="breadcrumb" class="text-left">
            <h2 class="title">
              {{ crumbTitle }}
            </h2>
            <ol class="breadcrumb main-bg">
              <li v-for="(item, index) in crumbLinks" :key="index" class="breadcrumb-item">
                <a :href="item.href">{{ item.title }}</a>
              </li>
              <li v-if="subtitle" class="breadcrumb-item">
                <a href="">Design</a>
              </li>
              <li class="breadcrumb-item active">
                {{ crumbTitle }}
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight">
          <img alt="banner" class="img-fluid float-right" :src="crumbMedia">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BreadCrumb',
  // eslint-disable-next-line vue/require-prop-types
  props: [ 'crumbTitle', 'crumbMedia', 'crumbLinks', 'subtitle' ]
}
</script>
