export default {
  name: '瓦斯表管理',
  url: '/mgmt',
  icon: 'icon-pencil',
  children: [
    {
      name: '瓦斯表群組管理',
      url: '/mgmt/group',
      icon: 'icon-pencil'
    },
    {
      name: '瓦斯用戶管理',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    },
    {
      name: '裝修紀錄',
      url: '/mgmt/fix',
      icon: 'icon-pencil'
    }
  ]
}
