import { defineStore } from 'pinia'
import initialSettings from '@/store/modules/layout/initial'

const useLayoutStore = defineStore('Settings', { state: (): SettingsStore => initialSettings })

export default useLayoutStore
