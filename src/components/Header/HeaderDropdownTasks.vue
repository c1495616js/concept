<template>
      <!-- <b-nav-item-dropdown right no-caret >
        <template slot="button-content">
          <i :class="langFlagMap()"></i>
        </template>
        <b-dropdown-header tag="div" class="dropdown-menu-lg text-center"><strong>You have {{itemsCount}} pending tasks</strong></b-dropdown-header>
        <b-dropdown-item v-for="lang in langs" :key="lang" @click="changeLocale(lang)">
          <div class="small mb-1">{{lang}} <span class="float-right"><strong><i :class="langFlagMap(lang)"></i></strong></span></div>
        </b-dropdown-item> -->
        <!-- <b-dropdown-item>
          <div class="small mb-1">ReactJS Version <span class="float-right"><strong>25%</strong></span></div>
          <b-progress height={} class="progress-xs" variant="danger" :value="25"/>
        </b-dropdown-item> -->
      <!-- </b-nav-item-dropdown> -->
</template>
<script>
  // import langFlagMap from '../../lang/map'
  // export default {
  //   name: 'header-dropdown-tasks',
  //   data: () => {
  //     return { itemsCount: 15 }
  //   },
  //   computed: {
  //     langs () {
  //       const messages = this.$i18n.messages
  //       return Object.keys(messages)
  //       // return this.$i18n.messages
  //     }
  //   },
  //   mounted: function () {
  //     console.log(this.$i18n.messages)
  //   },
  //   methods: {
  //     langFlagMap (country) {
  //       if (!country) {
  //         country = this.$i18n.locale
  //       }
  //       return `flag-icon flag-icon-${langFlagMap[country]} h5`
  //     },
  //     changeLocale (locale) {
  //       this.$i18n.locale = locale
  //     }
  //   }
  // }
</script>
