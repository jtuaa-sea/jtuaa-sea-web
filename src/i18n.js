import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.events': 'Events',
      'nav.membership': 'Membership',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'home.welcome': 'Welcome to JTU and CTU Alumni Association Seattle',
      'home.description': 'Connecting JiaoTong and ChiaoTung University alumni in the Seattle area',
      'about.title': 'About JTUAA Seattle',
      'about.description': 'We are a chapter of CTUAA (交大美洲校友会) serving alumni in the Seattle area',
      'events.upcoming': 'Upcoming Events',
      'events.past': 'Past Events',
      'contact.reach': 'Get in Touch',
      'contact.email': 'Email',
      'contact.social': 'Social Media'
    }
  },
  zh: {
    translation: {
      'nav.home': '首页',
      'nav.about': '关于我们',
      'nav.events': '活动',
      'nav.membership': '会员',
      'nav.gallery': '相册',
      'nav.contact': '联系我们',
      'home.welcome': '欢迎来到西雅图交通大学校友会',
      'home.description': '连接西雅图地区交通大学校友',
      'about.title': '关于西雅图交通大学校友会',
      'about.description': '我们是交大美洲校友会下属的西雅图分会',
      'events.upcoming': '即将举行的活动',
      'events.past': '往期活动',
      'contact.reach': '联系方式',
      'contact.email': '电子邮件',
      'contact.social': '社交媒体'
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n