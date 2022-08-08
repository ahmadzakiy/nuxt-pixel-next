import { mount } from '@vue/test-utils'
import IndexPage from '@/pages/index.vue'

const pixelThemeFunction = require('~/node_modules/@mekari/pixel-theme/dist/mekari-pixel-theme.cjs.dev')

describe('IndexPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexPage, {
      stubs: {
        PixelWrapper: {
          template: '<div><slot></slot></div>'
        }
      },
      provide: () => ({
        $pixelTheme: jest.fn().mockReturnValue(pixelThemeFunction),
        $pixelColorMode: jest.fn().mockReturnValue({}),
        $pixelIcons: jest.fn().mockReturnValue({})
      })
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
