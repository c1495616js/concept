export default {
  name: '瓦斯表監控',
  url: '/monitor',
  icon: 'icon-drop',
  children: [
    {
      name: '瓦斯表清單',
      url: '/monitor/list',
      icon: 'icon-drop'
    },
    {
      name: '瓦斯表詳細資訊',
      url: '/monitor/detail',
      icon: 'icon-drop'
    },
    {
      name: '瓦斯表地圖',
      url: '/monitor/map',
      icon: 'icon-drop'
    }
  ]
}
