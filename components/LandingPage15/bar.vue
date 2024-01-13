<template>
  <canvas id="myLine" width="400" height="200" />
</template>
<script>
import Line from '../../assets/js/plugin/chart'
export default {
  name: 'Bar',
  data () {
    return {
      bar: {}
    }
  },
  mounted () {
    const ctx = document.getElementById('myLine')
    this.bar = new Line(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [10, 20, 25, 30, 35, 40],
          backgroundColor: [
            'rgb(67,125,235)',
            'rgb(83,226,217)',
            'rgb(67,125,235)',
            'rgb(83,226,217)',
            'rgb(67,125,235)',
            'rgb(83,226,217)'
          ],
          highlight: ['#185ee3', '#27dbcf', '#185ee3', '#27dbcf', '#185ee3', '#27dbcf']
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
}
</script>
