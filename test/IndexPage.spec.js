import { mount } from '@vue/test-utils'
import IndexPage from '@/pages/index.vue'
// import PixelWrapper from '@/components/PixelWrapper.vue'

const pixelThemeFunction = require('~/node_modules/@mekari/pixel-theme/dist/mekari-pixel-theme.cjs.dev')

describe('IndexPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexPage, {
      stubs: {
        PixelWrapper: {
          template: '<div><slot></slot></div>'
        }
      },
      // components: {
      //   PixelWrapper
      // },
      provide: () => ({
        $pixelTheme: jest.fn().mockReturnValue(pixelThemeFunction),
        $pixelColorMode: jest.fn().mockReturnValue({}),
        $pixelIcons: jest.fn().mockReturnValue({})
      })
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
