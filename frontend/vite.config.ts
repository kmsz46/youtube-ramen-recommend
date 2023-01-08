import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'    // 追加
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 追加
const tamaguiCompilerConfig = {
  components: ['tamagui'],
  config: 'tamagui.config.ts',
  useReactNativeWebLite: true,
}

// https://vitejs.dev/config/
// https://tamagui.dev/blog/version-one#vite-support
export default defineConfig({
  clearScreen: false,
  plugins: [
    react({
      fastRefresh: true,
      jsxPure: true,
    }),
    tamaguiPlugin(tamaguiCompilerConfig),
    tamaguiExtractPlugin(tamaguiCompilerConfig),
  ],
})
