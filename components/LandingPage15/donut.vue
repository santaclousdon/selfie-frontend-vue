<template>
  <canvas id="myChart" />
</template>
<script>
import Chart from '../../assets/js/plugin/chart'
export default {
  name: 'Donut',
  data () {
    return {
      donut: {}
    }
  },
  mounted () {
    const ctx = document.getElementById('myChart')
    this.donut = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
          data: [60, 40, 10],
          backgroundColor: [
            'rgb(67,125,235)',
            'rgb(83,226,217)',
            'rgb(138,180,247)'
          ],
          highlight: ['#185ee3', '#27dbcf', '#5a95f4']
        }]
      },
      options: {
        animateRotate: true
      }
    })
  }
}
</script>
