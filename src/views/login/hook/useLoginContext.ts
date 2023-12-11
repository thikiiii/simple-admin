import { ref } from 'vue'

type LoginAction = 'PasswordLogin' | 'PhoneLogin' | 'QrCodeLogin' | 'Registered'

const currentAction = ref<LoginAction>('PasswordLogin')


export const useLoginContext = () => {
    const setAction = (action:LoginAction) => {
        currentAction.value = action
    }

    return { setAction,currentAction }
}
