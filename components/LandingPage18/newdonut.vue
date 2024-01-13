<template>
  <canvas id="myChart"/>
</template>
<script>
import ChartTwo from '../../assets/js/plugin/chart'
export default {
  name: 'Newdonut',
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
      const ctx = document.getElementById('myChart')
      this.donut = new ChartTwo(ctx, {
        type: 'doughnut',
        data: {
          labels: [' Leg foot goal   ', 'off target'],
          datasets: [{
            data: [7, 10],
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
