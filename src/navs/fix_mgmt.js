export default {
  name: '裝修管理',
  url: '/mgmt',
  icon: 'icon-pencil',
  children: [
    {
      name: '新增申裝/報修單',
      url: '/mgmt/group',
      icon: 'icon-pencil'
    },
    {
      name: '申裝/報修單管理',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    },
    {
      name: '派工單管理',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    },
    {
      name: '料件管理',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    },
    {
      name: '廠商管理',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    },
    {
      name: '代碼管理',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    }

  ]
}
