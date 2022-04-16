import { withInstall } from '../utils'
import _Demo from './Demo'

export const Demo = withInstall(_Demo)

export default Demo

export { demoProps } from './Demo'

export type { DemoProps } from './Demo'

declare module 'vue' {
  export interface GlobalComponents {
    EagDemo: typeof Demo
  }
}
