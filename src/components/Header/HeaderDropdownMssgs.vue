<template>
  <b-nav-item-dropdown right no-caret>
    <template slot="button-content">
      <i class="icon-envelope-letter"></i>
      <b-badge pill variant="info">{{itemsCount}}</b-badge>
    </template>
    <div class="dropdown-menu-lg">
      <b-dropdown-header tag="div" class="text-center"><strong>You have {{itemsCount}} messages</strong></b-dropdown-header>
      <b-dropdown-item to="message" :class="{action:false}">
        <div class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img src="static/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com"/>
              <b-badge class="avatar-status" variant="success"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">許文謙</small>
            <small class="text-muted float-right mt-1">2018/03/22 11:54</small>
          </div>
          <div class="text-truncate font-weight-bold"><span class="fa fa-exclamation text-danger"></span>中油費率調整</div>
          <div class="small text-muted text-truncate">中油自107年1月2日零時起調降氣費 ....</div>
        </div>
      </b-dropdown-item>
      <b-dropdown-item to="message" :class="{action:false}">
       <!-- :to="url" -->
        <div class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img src="static/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com"/>
              <b-badge class="avatar-status" variant="warning"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">陳亦彰</small>
            <small class="text-muted float-right mt-1">2018/02/01 11:54</small>
          </div>
          <div class="text-truncate font-weight-bold">系統更新</div>
          <div class="small text-muted text-truncate">智慧瓦斯雲測試環境中午12:00~13:00 將安裝3月份微軟更新，暫停服務，不便之處，尚祈見諒...</div>
        </div>
        </router-link>
      </b-dropdown-item>
<!--       <b-dropdown-item href="#">
        <div class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img src="static/img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com"/>
              <b-badge class="avatar-status" variant="danger"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Janet Doe</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
        </div>
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <div class="message">
          <div class="py-3 mr-3 float-left">
            <div class="avatar">
              <img src="static/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com"/>
              <b-badge class="avatar-status" variant="info"></b-badge>
            </div>
          </div>
          <div>
            <small class="text-muted">Joe Doe</small>
            <small class="text-muted float-right mt-1">4:03 AM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
        </div>
      </b-dropdown-item> -->
      <b-dropdown-item href="#" class="text-center"><strong>View all messages</strong></b-dropdown-item>
    </div>
  </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown-mssgs',
    data: () => {
      return { itemsCount: 2 }
    }
  }
</script>
