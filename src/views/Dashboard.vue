<template>
  <div class="animated fadeIn">
    <p class="text-info">{{ $t("message.hello") }}</p>

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

export default {
  name: 'dashboard',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample
  }
}
</script>
