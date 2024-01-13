<template>
	<section class="iq-bg-over">
		<div class="container">
			<div class="row ">
				<div class="col-md-12">
					<div class="title-box wow fadeInUp text-center">
						<span class="title-design">PARTNER</span>
						<h2>A trusted, proven leader.</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div v-for="(item,index) in list" :key="index" class="col-md-3">
					<div class="xamin-client wow fadeInUp text-center">
						<div class="client-icon">
							<img :src="item.src" alt="fancybox">
						</div>
						<div class="client-detail">
							<h6 class="mb-1">{{ item.title }}</h6>
							<p class="mb-0">{{ item.subtitle }}</p>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'Partner',
	data() {
    return {
      list:[
				{
          title: 'Onduo by Google',
          subtitle: 'Defined brand style guide and created narrative illustrations.',
          src: require('../../assets/images/partners/1.png'),
        },
				{
          title: 'Titan Eye Plus',
          subtitle: 'Defined brand style guide and created narrative illustrations.',
          src: require('../../assets/images/partners/3.png'),
        },
        {
          title: 'DHL',
          subtitle: 'Defined brand style guide and created narrative illustrations.',
          src: require('../../assets/images/partners/4.png'),
        },
        {
          title: 'Cake Browser',
          subtitle: 'Defined brand style guide and created narrative illustrations.',
          src: require('../../assets/images/partners/2.png'),
        }
      ]
    }
  }
}
</script>
