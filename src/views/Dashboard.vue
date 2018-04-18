<template>
  <div class="animated fadeIn">
    <!--
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <card-line1-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <card-line2-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-warning">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <card-line3-chart-example class="chart-wrapper" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-danger">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </b-card-body>
          <card-bar-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
    </b-row>
	-->
    <b-card>
      <b-row>
        <b-col sm="12" lg="7">
            <!-- <b-card header="區域瓦斯表顯示">
				<gmap-map
					:center="center"
					:zoom="11"
					style="height: 600px"
				>
				<gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
					<b-link :href="infoLink" target="_blank">{{infoContent}}</b-link>
				</gmap-info-window>
				<gmap-marker
					:key="index"
					v-for="(m, index) in markers"
					:position="m.position"
					:label="m.label"
					:title="m.title"
					:clickable="true"
					:draggable="m.draggable"
					@click="toggleInfoWindow(m, index)"
				></gmap-marker>
		    </gmap-map>
		    </b-card> -->
          <GoogleMaps></GoogleMaps>
        </b-col>
        <b-col sm="12" lg="5" class="d-none d-md-block">
        	<b-card header="瓦斯錶設錶備狀態">
				<div class="chart-wrapper">
				  <pie-example  :width="300" :height="300" />
				</div>
			</b-card>

    <!-- /////////// -->

    <!-- /////////// -->
			<b-card header="系統狀態">
				<b-table class="mb-0 table-outline" responsive="sm" hover :items="tableItems2" :fields="tableFields2" head-variant="light">
		            <div slot="avatar" class="avatar" slot-scope="item">
		              <img :src="item.value.url" class="img-avatar" alt="">
		              <span class="avatar-status" v-bind:class="{ 'bg-success': item.value.status == 'success',  'bg-warning': item.value.status == 'warning', 'bg-danger': item.value.status == 'danger', 'bg-secondary': item.value.status == '' }"></span>
		            </div>
		            <div slot="user" slot-scope="item">
		              <div>{{item.value.name}}</div>
		              <div class="small text-muted">
		                <span>
		                  <template v-if="item.value.new">New</template>
		                  <template v-else>Recurring</template>
		                </span> | Registered: {{item.value.registered}}
		              </div>
		            </div>
		            <i slot="country" class="h4 mb-0" :class="flag(item.value.flag)" slot-scope="item" :title="item.value.flag" :id="item.value.flag"></i>
		            <div slot="usage" slot-scope="item">
		              <div class="clearfix">
		                <div class="float-left">
		                  <strong>{{item.value.value}}%</strong>
		                </div>
		                <div class="float-right">
		                  <small class="text-muted">{{item.value.period}}</small>
		                </div>
		              </div>
		              <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
		            </div>
		            <i slot="payment" slot-scope="item" :class="item.value.icon" style="font-size:24px"></i>
		            <div slot="activity" slot-scope="item">
		              <div class="small text-muted">Last login</div>
		              <strong>{{item.value}}</strong>
		            </div>
          		</b-table>
			</b-card>
        </b-col>
      </b-row>
    </b-card>
    <b-row>
      <b-col md="6">
        <b-card header="用戶 Top 10 使用量">
          <b-row>
            <b-col sm="12" lg="12">
              <!-- <hr class="mt-0"> -->
              <ul class="horizontal-bars type-2">
              	<li class="legend">
                  <b-badge pill variant="info"></b-badge> <small>上期使用量</small> &nbsp; <b-badge pill variant="danger"></b-badge> <small>本期使用量</small>
                </li>
                <li v-for="(item,index) in userStat">
                  <div>
	                  <span class="title">No.{{index+1}} &nbsp; {{item.userName}}</span>
	                  <span class="value">{{item.lastMonth}}/{{item.thisMonth}}</span>
                  </div>
                  <div class="bars">
                    <b-progress height={} class="progress-xs" :value="item.lastMonth/100" variant="info"></b-progress>
                    <b-progress height={} class="progress-xs" :value="item.thisMonth/100" variant="danger"></b-progress>
                  </div>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card header="群組 Top 10 使用量">
          <b-row>
            <b-col sm="12" lg="12">
              <ul class="horizontal-bars type-2">
              	<li class="legend">
                  <b-badge pill variant="info"></b-badge> <small>上期使用量</small> &nbsp; <b-badge pill variant="danger"></b-badge> <small>本期使用量</small>
                </li>
                <li v-for="(item,index) in userStat">
                  <div>
	                  <span class="title">No.{{index+1}} &nbsp; {{item.userName}}</span>
	                  <span class="value">{{item.lastMonth}}/{{item.thisMonth}}</span>
                  </div>
                  <div class="bars">
                    <b-progress height={} class="progress-xs" :value="item.lastMonth/100" variant="info"></b-progress>
                    <b-progress height={} class="progress-xs" :value="item.thisMonth/100" variant="danger"></b-progress>
                  </div>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="12">
        <b-card header="異常清單">
          <b-table class="mb-0 table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields" head-variant="light">
            <div slot="avatar" class="avatar" slot-scope="item">
              <img :src="item.value.url" class="img-avatar" alt="">
              <span class="avatar-status" v-bind:class="{ 'bg-success': item.value.status == 'success',  'bg-warning': item.value.status == 'warning', 'bg-danger': item.value.status == 'danger', 'bg-secondary': item.value.status == '' }"></span>
            </div>
            <div slot="user" slot-scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                <span>
                  <template v-if="item.value.new">New</template>
                  <template v-else>Recurring</template>
                </span> | Registered: {{item.value.registered}}
              </div>
            </div>
            <i slot="country" class="h4 mb-0" :class="flag(item.value.flag)" slot-scope="item" :title="item.value.flag" :id="item.value.flag"></i>
            <div slot="usage" slot-scope="item">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.value.value}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">{{item.value.period}}</small>
                </div>
              </div>
              <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
            </div>
            <i slot="payment" slot-scope="item" :class="item.value.icon" style="font-size:24px"></i>
            <div slot="activity" slot-scope="item">
              <div class="small text-muted">Last login</div>
              <strong>{{item.value}}</strong>
            </div>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '../components/'

import PieExample from './charts/PieExample'
import GoogleMaps from './dashboard/GoogleMaps.vue'

import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA'
    // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  }
})

export default {
  name: 'dashboard',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample,
    PieExample,
    GoogleMaps
  },
  data: function () {
    return {
      selected: 'Month',
      tableItems2: [
        {
          'systemName': '瓦斯表監控',
          'systemStatus': 'Health'
        },
        {
          'systemName': '瓦斯表管理',
          'systemStatus': 'Health'
        },
        {
          'systemName': '裝修管理',
          'systemStatus': 'Health'
        },
        {
          'systemName': '統計報表',
          'systemStatus': 'Health'
        }
      ],
      tableFields2: {
        systemName: {
          label: '系統名稱'
        },
        systemStatus: {
          label: '系統狀態'
        }
      },
      tableItems: [
        {
          date: '2018/02/06',
          time: '23:59:21',
          module1Id: '1234567890',
          module2Id: '002C5738',
          errorDiscription: '五級地震斷閥通知',
          avatar: { url: 'static/img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          date: '2018/02/06',
          time: '23:59:01',
          module1Id: '1234567810',
          module2Id: '002C5739',
          errorDiscription: '五級地震斷閥通知',
          avatar: { url: 'static/img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          date: '2018/02/06',
          time: '23:58:50',
          module1Id: '1234567809',
          module2Id: '002C5737',
          errorDiscription: '五級地震斷閥通知',
          avatar: { url: 'static/img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          date: '2018/02/06',
          time: '23:58:50',
          module1Id: '1234567808',
          module2Id: '002C5736',
          errorDiscription: '五級地震斷閥通知',
          avatar: { url: 'static/img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          date: '2018/02/06',
          time: '23:57:40',
          module1Id: '1234567807',
          module2Id: '002C5735',
          errorDiscription: '五級地震斷閥通知',
          avatar: { url: 'static/img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          date: '2018/02/06',
          time: '23:57:40',
          module1Id: '1234563807',
          module2Id: '002C5734',
          errorDiscription: '五級地震斷閥通知',
          avatar: { url: 'static/img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: {
        date: {
          label: '日期'
        },
        time: {
          label: '時間'
        },
        module1Id: {
          label: '瓦斯錶號'
        },
        module2Id: {
          label: '通訊模組編號'
        },
        errorDiscription: {
          label: '異常描述'
        }
        // ,
        // avatar: {
        //   label: '<i class="icon-people"></i>',
        //   class: 'text-center'
        // },
        // country: {
        //   label: 'Country',
        //   class: 'text-center'
        // },
        // usage: {
        //   label: 'Usage'
        // },
        // payment: {
        //   label: 'Payment method',
        //   class: 'text-center'
        // },
        // activity: {
        //   label: 'Activity'
        // }
      }
    }
  },
  computed: {
    userStat: function () {
      return [
        {
          'userName': '何玫樺',
          'lastMonth': '340',
          'thisMonth': '9948'
        },
        {
          'userName': '洪新蘋',
          'lastMonth': '1740',
          'thisMonth': '8948'
        },
        {
          'userName': '蔡尚志',
          'lastMonth': '4740',
          'thisMonth': '7948'
        },
        {
          'userName': '陳亦彰',
          'lastMonth': '1340',
          'thisMonth': '7748'
        },
        {
          'userName': '林飛',
          'lastMonth': '370',
          'thisMonth': '7448'
        },
        {
          'userName': '劉冠伶',
          'lastMonth': '3980',
          'thisMonth': '7048'
        },
        {
          'userName': '王節茹',
          'lastMonth': '1340',
          'thisMonth': '6923'
        },
        {
          'userName': '李盈臨',
          'lastMonth': '3340',
          'thisMonth': '6548'
        },
        {
          'userName': '許文謙',
          'lastMonth': '4340',
          'thisMonth': '5949'
        },
        {
          'userName': '周岳胤',
          'lastMonth': '9470',
          'thisMonth': '5848'
        }
      ]
    },
    groupStat: function () {
      return [
        {
          'userName': '何玫樺',
          'lastMonth': '340',
          'thisMonth': '9948'
        },
        {
          'userName': '洪新蘋',
          'lastMonth': '1740',
          'thisMonth': '8948'
        },
        {
          'userName': '蔡尚志',
          'lastMonth': '4740',
          'thisMonth': '7948'
        },
        {
          'userName': '陳亦彰',
          'lastMonth': '1340',
          'thisMonth': '7748'
        },
        {
          'userName': '林飛',
          'lastMonth': '370',
          'thisMonth': '7448'
        },
        {
          'userName': '劉冠伶',
          'lastMonth': '3980',
          'thisMonth': '7048'
        },
        {
          'userName': '王節茹',
          'lastMonth': '1340',
          'thisMonth': '6923'
        },
        {
          'userName': '李盈臨',
          'lastMonth': '3340',
          'thisMonth': '6548'
        },
        {
          'userName': '許文謙',
          'lastMonth': '4340',
          'thisMonth': '5949'
        },
        {
          'userName': '周岳胤',
          'lastMonth': '9470',
          'thisMonth': '5848'
        }
      ]
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  }
}
</script>
