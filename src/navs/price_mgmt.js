export default {
  name: '收費管理',
  url: '/mgmt',
  icon: 'icon-pencil',
  children: [
    {
      name: '出帳設定',
      url: '/mgmt/group',
      icon: 'icon-pencil'
    },
    {
      name: '出帳作業',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    }
  ]
}
