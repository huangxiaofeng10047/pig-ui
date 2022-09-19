import {createApp} from 'vue'
import website from './config/website'
import axios from './router/axios';
import router from './router/';
import store from './store';
import i18n from './lang/';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Avue from '@smallwei/avue';
import AvueFormDesign from '@sscfaith/avue-form-design';
import '@smallwei/avue/lib/index.css';
import {getScreen, downBlobFile} from '@/util/index'
import './permission';
import error from './error';
import basicBlock from 'components/basic-block/main.vue'
import basicContainer from 'components/basic-container/main.vue'
import App from './App.vue'
import animate from 'animate.css'
import dayjs from 'dayjs'
import 'styles/common.scss';
// 字典标签组件
import DictTag from '@/components/DictTag/index.vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//注册全局容器
app.component('basicContainer', basicContainer)
app.component('basicBlock', basicBlock)
app.component('DictTag', DictTag)

app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.website = website
app.config.globalProperties.getScreen = getScreen
app.config.globalProperties.downBlobFile = downBlobFile
app.use(error);
app.use(i18n)
app.use(animate)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(Avue, {
    axios,
    tableSize: 'small'
})
app.use(AvueFormDesign)
app.mount('#app')
