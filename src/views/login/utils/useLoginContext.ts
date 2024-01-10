import { defineStore } from 'pinia'
import { LoginAction,LoginContext } from '@/views/login/utils/type'

export const useLoginContext = defineStore('LoginContext',{
    state: (): LoginContext => ({
        currentLoginAction: LoginAction.PasswordLogin
    }),
    actions: {
        setAction(action: LoginAction) {
            this.currentLoginAction = action
        }
    }
})
