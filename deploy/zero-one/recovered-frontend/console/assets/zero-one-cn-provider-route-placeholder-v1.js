import {
  k as createVNode,
  B as createElementVNode,
  o as onMounted,
} from './vendor-vue-iKpM1E08.js'
import { _ as AppLayout } from './AppLayout.vue_vue_type_script_setup_true_lang-gmb2csy1.js'

const ZeroOneCNProviderRoutePlaceholder = {
  __name: 'ZeroOneCNProviderRoutePlaceholder',
  setup() {
    onMounted(() => window.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?.())
    return () => createVNode(AppLayout, null, {
      default: () => [
        createElementVNode('div', {
          id: 'zero-one-cn-provider-admin',
          'data-zero-one-cn-provider-placeholder': 'true',
        }),
      ],
    })
  },
}

export { ZeroOneCNProviderRoutePlaceholder as default }
