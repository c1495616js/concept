// 瓦斯表監控
import Monitor from './navs/monitor'
// 瓦斯表管理
import GasMgmt from './navs/gas_mgmt'
// 收費管理
// 裝修管理
// 統計報表
// 瓦斯業者管理
// 系統設定
export default {
  items: [
    {
      name: '儀表板',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    Monitor,
    GasMgmt

  ]
}
