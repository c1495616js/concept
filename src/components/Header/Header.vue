<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand" to="/"></b-link>
    <button class="navbar-toggler sidebar-toggler h-100 b-r-1 px-3 d-md-down-none" type="button" @click="sidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-nav-form is-nav-bar class="d-md-down-none">

    </b-nav-form>
    <!-- <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item px-3">
        <a class="nav-link" href="/index.html">瓦斯表監控</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="/index.html">瓦斯表管理</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="/index.html">裝修管理</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="/index.html">統計報表</a>
      </li>
    </ul> -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item class="d-md-down-none">
        <HeaderDropdownLanguage/>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <HeaderDropdownMssgs/>
      </b-nav-item>

      <!-- <b-nav-item class="d-md-down-none">
        <HeaderDropdownNotif/>
      </b-nav-item> -->
      <!-- <b-nav-item class="d-md-down-none">
        <HeaderDropdownTasks/>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <HeaderDropdownMssgs/>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-location-pin"></i>
      </b-nav-item> -->
      <HeaderDropdownAccnt/>
    </b-navbar-nav>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>
</template>
<script>
  import HeaderDropdown from './HeaderDropdown.vue'
  import HeaderDropdownAccnt from './HeaderDropdownAccnt.vue'

  import HeaderDropdownNotif from './HeaderDropdownNotif.vue'
  import HeaderDropdownMssgs from './HeaderDropdownMssgs.vue'
  import HeaderDropdownLanguage from './HeaderDropdownLanguage.vue'

  export default {
    name: 'appheader',
    components: {
      HeaderDropdownAccnt,
      HeaderDropdownNotif,
      HeaderDropdownMssgs,
      HeaderDropdownLanguage,
      HeaderDropdown
    },
    methods: {
      sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
      },
      sidebarMinimize (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-minimized')
      },
      mobileSidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-mobile-show')
      },
      asideToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('aside-menu-hidden')
      }
    }
  }
</script>
