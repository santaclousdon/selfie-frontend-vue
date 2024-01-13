<template>
  <div class="text-left iq-breadcrumb-one iq-bg-over black ">
    <div class="container">
      <div class="row align-items-center">
          <div class="col-lg-8 col-md-8 text-left align-self-center">
              <nav aria-label="breadcrumb" class="text-left">
                  <h2 class="title">Data Analytics</h2>
                  <ol class="breadcrumb main-bg">
                      <li class="breadcrumb-item"><a href="/landing-page-1">Home</a></li>
                      <li class="breadcrumb-item active">Data Analytics</li>
                  </ol>
              </nav>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight"> <img alt="banner" class="img-fluid float-right" :src="require('../../assets/images/about-us/05.png')"></div>
      </div>
    </div>
  </div>   
</template>
<script>
export default {
  name:'BreadCrum'
}
</script>