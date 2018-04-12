export default {
  name: '裝修管理',
  url: '/editors',
  icon: 'icon-pencil',
  children: [
    {
      name: '新增申裝/報修單',
      url: '/editors/text-editors',
      icon: 'icon-pencil'
    },
    {
      name: '我的申裝/報修單',
      url: '/editors/code-editors',
      icon: 'icon-pencil'
    },
    {
      name: '申裝/報修單管理',
      url: '/editors/code-editors',
      icon: 'icon-pencil'
    },
    {
      name: '派工單管理',
      url: '/editors/code-editors',
      icon: 'icon-note'
    },
    {
      name: '料件管理',
      url: '/editors/code-editors',
      icon: 'fa fa-code'
    },
    {
      name: '廠商管理',
      url: '/editors/code-editors',
      icon: 'fa fa-code'
    },
    {
      name: '代碼管理',
      url: '/editors/code-editors',
      icon: 'fa fa-code'
    }
  ]
}
