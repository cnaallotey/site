import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/mac/Documents/Coding Project/webinar-eazzy-social/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}