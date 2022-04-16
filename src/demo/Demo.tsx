import { PropType, defineComponent, type ExtractPropTypes } from 'vue'
import { createNamespace } from '../utils'

const [name, bem] = createNamespace('demo')

export const demoProps = {
  /** 标签 */
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'div',
  },
  /** 标题 */
  title: {
    type: String,
  },
}

export type DemoProps = ExtractPropTypes<typeof demoProps>

export default defineComponent({
  name,

  props: demoProps,

  emits: ['click'],

  setup(props, { slots }) {
    return () => {
      const { tag, title } = props
      return (
        <tag class={bem()}>
          <h1>{title}</h1>
          {slots.default?.()}
        </tag>
      )
    }
  },
})
