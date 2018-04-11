<template>
  <div class="animated fadeIn">
    <Spinner :loading="loading" ></Spinner>
    <p class="text-info">{{ $t("hello") }}</p>

    <b-card-group columns class="card-columns cols-2">
      <b-card header="Line Chart">
        <div class="chart-wrapper">
          <line-example/>
        </div>
      </b-card>
      <b-card header="Bar Chart">
        <div class="chart-wrapper">
          <bar-example/>
        </div>
      </b-card>
      <b-card header="Doughnut Chart">
        <div class="chart-wrapper">
          <doughnut-example/>
        </div>
      </b-card>
      <b-card header="Radar Chart">
        <div class="chart-wrapper">
          <radar-example/>
        </div>
      </b-card>
      <b-card header="瓦斯錶設備狀態">
        <div class="chart-wrapper">
          <pie-example/>
        </div>
      </b-card>
      <b-card header="Polar Area Chart">
        <div class="chart-wrapper">
          <polar-area-example/>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import BarExample from './dashboard/BarExample'
import LineExample from './dashboard/LineExample'
import DoughnutExample from './dashboard/DoughnutExample'
import RadarExample from './dashboard/RadarExample'
import PieExample from './dashboard/PieExample'
import PolarAreaExample from './dashboard/PolarAreaExample'
import Spinner from '../components/Spinner/Spinner'

export default {
  name: 'dashboard',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample,
    Spinner
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.loading = true
    this.$http.get('/photos', {
      params: {

      },
      data: {
        title: 'I am change title'
      }
    }).then((response) => {
      this.loading = false
      console.log(response.data)
    }).catch((err) => {
      this.loading = false
      console.log(err)
    })
  }
}
</script>
