import { createStore } from 'vuex'

export interface UserProps {
  isLogin: boolean;
  username?: string;
}

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplateProps[];
}

const testData: TemplateProps[] = [
  {id: 1, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png', title: '前端架构师直播海报', author: 'wang', copiedCount: 10},
  {id: 2, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png', title: '前端架构师直播海报', author: 'wang', copiedCount: 10},
  {id: 3, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-682056.png', title: '前端架构师直播海报', author: 'wang', copiedCount: 10},
  {id: 4, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png', title: '前端架构师直播海报', author: 'wang', copiedCount: 10},
  {id: 5, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png', title: '前端架构师直播海报', author: 'wang', copiedCount: 10},
  {id: 6, coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png', title: '前端架构师直播海报', author: 'wang', copiedCount: 10}
]
export default createStore({
  state: {
    templates: testData,
    user: { isLogin: false },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
