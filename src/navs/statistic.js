export default {
  name: '統計報表',
  url: '/mgmt',
  icon: 'icon-pencil',
  children: [
    {
      name: '用量統計',
      url: '/mgmt/group',
      icon: 'icon-pencil'
    },
    {
      name: '時數統計',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    },
    {
      name: '料件統計',
      url: '/mgmt/fix',
      icon: 'icon-pencil'
    }
  ]
}
