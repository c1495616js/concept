<template>
      <b-nav-item-dropdown right no-caret class="pr-4">
        <template slot="button-content" class="dropdown-toogle">
          <i class="flag-icon" v-bind:class="langComputed.clz" v-bind:title="langComputed.lang" v-bind:id="langComputed.lang" style="font-size:18px"></i>
          <i class=" dropdown-toggle" style="display:inline"></i>
        </template>
        <b-dropdown-item v-for="lang in langs" :key="lang" @click="setLang(lang)">
          <i :class="langFlagMap(lang)" :title="lang" :id="lang" style="font-size:18px" ></i> {{langTextMap(lang)}}
        </b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
  import langMap from '../../i18n/mapping'
  import { mapActions } from 'vuex'
  export default {
    name: 'header-dropdown-language',
    data: function () {
      return {}
    },
    computed: {
      langComputed: function () {
        var clz = {}
        clz['flag-icon-' + this.$store.state.lang] = true
        return {
          lang: this.$store.state.lang,
          clz: clz
        }
      },
      // 獲得目前有多少語言
      langs () {
        const messages = this.$i18n.messages
        return Object.keys(messages)
      }
    },
    methods: {
      // 國旗
      langFlagMap (country) {
        return `flag-icon flag-icon-${country}`
      },
      // 語言顯示的文字
      langTextMap (lang){
        return langMap[lang]
      },
      // 傳到store
      ...mapActions(['setLang'])

    }
  }
</script>
