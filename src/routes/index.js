import Message from '../pages/Message.vue'
import Language from '../pages/Language.vue'
import UserSetting from '../pages/UserSetting.vue'
import Theme from '../pages/Theme.vue'
import Operation from '../pages/Operation.vue'

export default [
  {
    path: '/message',
    component: Message
  },
  {
    path: '/language',
    component: Language
  },
  {
    path: '/userSetting',
    component: UserSetting
  },
  {
    path: '/theme',
    component: Theme
  },
  {
    path: '/operation',
    component: Operation
  },
  // {
  //   path: '/',
  //   redirect: '/message'
  // }
]