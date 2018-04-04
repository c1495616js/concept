export default {
  name: '系統設定',
  url: '/mgmt',
  icon: 'icon-pencil',
  children: [
    {
      name: '帳號管理',
      url: '/mgmt/group',
      icon: 'icon-pencil'
    },
    {
      name: '角色管理',
      url: '/mgmt/personal',
      icon: 'icon-pencil'
    },
    {
      name: '權限設定',
      url: '/mgmt/fix',
      icon: 'icon-pencil'
    },
    {
      name: '系統參數設定',
      url: '/mgmt/fix',
      icon: 'icon-pencil'
    }
  ]
}
