export default {
  name: '瓦斯表管理',
  url: '/buttons',
  icon: 'icon-drop',
  children: [
    {
      name: '瓦斯表群組管理',
      url: '/buttons/buttons',
      icon: 'icon-drop'
    },
    {
      name: '瓦斯表用戶管理',
      url: '/buttons/button-dropdowns',
      icon: 'icon-drop'
    },
    {
      name: '集中器管理',
      url: '/buttons/button-groups',
      icon: 'icon-drop'
    },
    {
      name: '異常清單',
      url: '/buttons/loading-buttons',
      icon: 'icon-drop'
    },
    {
      name: '告警設定',
      url: '/buttons/social-buttons',
      icon: 'icon-drop'
    }
  ]
}
