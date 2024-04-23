import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { GlobalDataProps } from './index'

export interface EditorProps {
    // 供中间编辑器渲染的数组
    components: ComponentData[];
    // 当前编辑的是哪个元素，uuid
    currentElement: string;

}

interface ComponentData {
    props: { [key: string]: any };
    // id，uuid v4 生成
    id: string;
    // 业务组件库名称 l-text，l-image 等等
    name: string;
}

export const testComponents: ComponentData[] = [
    { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '20px', color: 'red' }},
    { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '10px', fontWeight: 'bold' }},
    { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '15px' }},
]


const editor: Module<EditorProps, GlobalDataProps> = {
    state: {
        components: testComponents,
        currentElement: '',
    }
}

export default editor;