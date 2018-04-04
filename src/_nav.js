// 瓦斯表監控
import Monitor from './navs/monitor'
// 瓦斯表管理
import GasMgmt from './navs/gas_mgmt'
// 收費管理
import PriceMgmt from './navs/price_mgmt'
// 裝修管理
import FixMgmt from './navs/fix_mgmt'
// 統計報表
import Statistic from './navs/statistic'
// 瓦斯業者管理
import IndustryMgmt from './navs/industry_mgmt'
// 系統設定
import Setting from './navs/setting'

export default {
  items: [
    {
      name: '儀表板',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    Monitor,
    GasMgmt,
    PriceMgmt,
    FixMgmt,
    Statistic,
    IndustryMgmt,
    Setting
  ]
}
