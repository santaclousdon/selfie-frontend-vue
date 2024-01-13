<template>
	<section class="pt-0">
		<div class="container">
			<div class="row ">
				<div class="col-md-12">
					<div class="title-box wow fadeInUp text-center">
						<h2>Skills</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-lg-5 col-md-5">
					<div class="iq-services-box wow fadeInUp text-left">				
						<div class="services-content" v-for="(item,index) of list1" :key="index">
							<h6>{{ item.title }}</h6>
							<span class="progress-value">{{ item.percentage }}%</span>
							<div class="iq-progress-bar"> <span class="position-relative" :data-percent="item.percentage"></span> </div>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-lg-5 col-md-5 offset-md-2">
					<div class="iq-services-box wow fadeInUp text-left">				
						<div class="services-content" v-for="(item,index) of list2" :key="index">
							<h6>{{ item.title }}</h6>
							<span class="progress-value">{{ item.percentage }}%</span>
							<div class="iq-progress-bar"> <span class="position-relative" :data-percent="item.percentage"></span> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'Skills',
	data () {
		return {
			list1: [
        {
          title: 'Data Science Capstone',
          percentage: '60'
        },
        {
          title: 'Python',
          percentage: '70'
        },
        {
          title: 'Machine Learning',
          percentage: '80'
        }
			],
			list2: [
        {
          title: 'SQL',
          percentage: '80'
        },
        {
          title: 'Tableau',
          percentage: '65'
        },
        {
          title: 'java',
          percentage: '70'
        }
      ]
		}
	}
}
</script>