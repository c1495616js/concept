<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['Online', 'Warning', 'Error'],
      datasets: [
        {
          backgroundColor: [
            '#0BA7DA',
            '#FFC200',
            '#EA398C'
          ],
          data: [90, 10, 5]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
