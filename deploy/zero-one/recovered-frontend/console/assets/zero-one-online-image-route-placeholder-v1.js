import {
  k as createVNode,
  B as createElementVNode,
  o as onMounted,
} from './vendor-vue-iKpM1E08.js'
import { _ as AppLayout } from './AppLayout.vue_vue_type_script_setup_true_lang-gmb2csy1.js'

const ZeroOneOnlineImageRoutePlaceholder = {
  __name: 'ZeroOneOnlineImageRoutePlaceholder',
  setup() {
    onMounted(() => window.__ZERO_ONE_ONLINE_IMAGE_SHELL_MOUNTED__?.())
    return () => createVNode(AppLayout, null, {
      default: () => [
        createElementVNode('div', {
          id: 'zero-one-online-image',
          'data-zero-one-online-image-placeholder': 'true',
        }),
      ],
    })
  },
}

export { ZeroOneOnlineImageRoutePlaceholder as default }
