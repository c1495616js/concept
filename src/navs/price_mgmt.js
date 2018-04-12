export default {
  name: '收費管理',
  url: '/buttons',
  icon: 'fa fa-credit-card-alt',
  children: [
    {
      name: '收費紀錄查詢',
      url: '/buttons/buttons',
      icon: 'icon-list'
    },
    {
      name: '收費設定',
      url: '/buttons/button-dropdowns',
      icon: 'icon-settings'
    },
    {
      name: '電子發票',
      url: '/buttons/button-groups',
      icon: 'fa fa-scribd'
    }
  ]
}
