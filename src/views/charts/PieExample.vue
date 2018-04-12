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
            '#20a8d8',
            '#ffc107',
            '#e83e8c'
          ],
          data: [92, 7, 1]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
