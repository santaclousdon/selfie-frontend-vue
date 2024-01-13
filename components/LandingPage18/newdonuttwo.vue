<template>
  <canvas id="myChartTwo" />
</template>
<script>
import ChartTwo from '../../assets/js/plugin/chart'
export default {
  name: 'Newdonuttwo',
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
      const ctx = document.getElementById('myChartTwo')
      this.donut = new ChartTwo(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Conversion rate', 'off target'],
          datasets: [{
            data: [70, 30],
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
