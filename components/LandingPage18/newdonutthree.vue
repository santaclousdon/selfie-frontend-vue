<template>
  <canvas id="myChartThree" />
</template>
<script>
import ChartTwo from '../../assets/js/plugin/chart'
export default {
  name: 'Newdonutthree',
  data () {
    return {
      ndonut: {}
    }
  },
  mounted () {
    this.doughnut()
  },
  methods: {
    doughnut () {
      const ctx = document.getElementById('myChartThree')
      this.donut = new ChartTwo(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Conversion rate', 'off target'],
          datasets: [{
            data: [90, 10],
            backgroundColor: [
              'rgb(67,126,235)',
              'rgb(209,225,253)'
            ],
            highlight: ['rgb(24,95,227)', 'rgb(160,193,251)']
          }]
        },
        options: {
        }
      })
    }
  }
}
</script>
