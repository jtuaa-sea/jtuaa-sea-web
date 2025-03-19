import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.events': 'Events',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'home.welcome': 'Welcome to JTU and CTU Alumni Association Seattle',
      'home.description': 'Connecting JiaoTong and ChiaoTung University alumni in the Seattle area',
      'about.title': 'About JTUAA Seattle',
      'about.description': 'We are a chapter of CTUAA (交大美洲校友会) serving alumni in the Seattle area. It is a registered 501(c)(3) non-profit organization.',
      'about.mission': 'Our Mission',
      'about.mission.1': 'Enhance connections among alumni from the five JiaoTong Universities in the Seattle area, leveraging major companies and schools as platforms to provide opportunities for career development, entrepreneurship, investment, and networking.',
      'about.mission.2': 'Foster relationships with various community organizations in the Greater Seattle area (including but not limited to other alumni associations, entrepreneurship alliances, technical forums, and both Chinese and non-Chinese communities).',
      'about.mission.3': 'Strengthen connections with other JiaoTong University alumni associations in North America for mutual benefit.',
      'about.mission.4': 'Promote exchange and communication between the four mainland JiaoTong Universities and National Chiao Tung University in Taiwan, thereby enhancing connections between alumni associations and both mainland China and Taiwan, as well as cross-strait relations.',
      'about.mission.5': 'Establish channels for JiaoTong alumni to give back to society and contribute to their alma maters.',
      'about.history.title': 'Our History',
      'about.history': 'The Jiao Tong University and Chiao Tung University Alumni Association of Greater Seattle (JTU&CTUAA-SEA) was officially established on January 9, 2015. The association upholds the spirit of "Five Schools, One Family; Remembering Our Roots" and is dedicated to wholeheartedly serving all alumni in the Greater Seattle area.',
      'events.upcoming': 'Upcoming Events',
      'events.past': 'Past Events',
      'contact.reach': 'Get in Touch',
      'contact.email': 'Email',
      'contact.social': 'Social Media',
      'contact.location': 'Location',
      'contact.location.description': 'We are located in the Greater Seattle area. Our events are held at various locations throughout the region. Please contact us for specific event locations.',
      'about.connect.title': 'Connect',
      'about.connect.description': 'Building bridges between alumni through regular social gatherings and professional events.',
      'about.support.title': 'Support',
      'about.support.description': 'Providing resources and mentorship opportunities for new alumni in the Seattle area.',
      'about.grow.title': 'Grow',
      'about.grow.description': 'Fostering personal and professional growth through knowledge sharing and collaboration.'
    }
  },
  zh: {
    translation: {
      'nav.home': '首页',
      'nav.about': '关于我们',
      'nav.events': '活动',
      'nav.gallery': '相册',
      'nav.contact': '联系我们',
      'home.welcome': '欢迎来到西雅图交通大学校友会',
      'home.description': '连接西雅图地区交通大学校友',
      'about.title': '关于西雅图交通大学校友会',
      'about.description': '我们是交大美洲校友会下属的西雅图分会。交通大学西雅图校友会为注册在案501(c)(3)非营利性组织。',
      'about.mission': '愿景',
      'about.mission.1': '增进交大五校校友在西雅图地区的联系， 以西雅图地区各大公司， 学校为依托， 提供校友职业发展， 创业投资， 交流联谊的平台。',
      'about.mission.2': '增进同大西雅图地区各大社会团体（包括但不限于其他学校校友会， 创业联盟， 技术论坛 ， 华人及非华人社团)）交流联系。',
      'about.mission.3': '增进同北美其他交大校友会的交流联系，互通互惠。',
      'about.mission.4': '增进大陆四所交大及台湾新竹交大的交流联系， 进而增进校友会与大陆，台湾的交流联系，以及海峡两岸之间的交流联系。',
      'about.mission.5': '建立交大校友回馈社会，反哺母校的渠道。',
      'about.history.title': '校友会历史',
      'about.history': '交通大学大西雅图地区校友会(JTU&CTUAA-SEA) 于2015年1月9日正式成立。校友会秉持“五校一家，饮水思源”的精神，为大西雅图地区来自五所交通大学的校友们竭诚服务。',
      'events.upcoming': '即将举行的活动',
      'events.past': '往期活动',
      'contact.reach': '联系方式',
      'contact.email': '电子邮件',
      'contact.social': '社交媒体',
      'contact.location': '服务区域',
      'contact.location.description': '我们在西雅图地区。我们的活动将在区域内的各个地点举行。请联系我们以获取特定活动的地点。',
      'about.connect.title': '纽带',
      'about.connect.description': '通过定期的社交聚会和专业活动搭建校友之间的桥梁。',
      'about.support.title': '支持',
      'about.support.description': '为西雅图地区的新校友提供资源和指导机会。',
      'about.grow.title': '成长',
      'about.grow.description': '通过知识共享和协作促进个人和职业发展。'
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n