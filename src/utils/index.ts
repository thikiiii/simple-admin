// hex转rgb 或 rgba
export const colorHexToRgb = (hex: string, opacity: number | null = null) => {
    return `rgb(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt('0x' + hex.slice(5, 7))},${opacity === null ? 1 : opacity})`
}

// 执行策略模式
export const runTacticsAction = (tacticsAction: TacticsAction[]) => tacticsAction.some(([ flag, action ]) => {
    flag && action()
    return flag
})

// 设置CSS变量
export const setCSSVariable = (variable: { [x: string]: string }) => {
    const htmlElement = document.querySelector('html')
    if (!htmlElement) return
    Object.keys(variable).forEach(key => {
        htmlElement.style.setProperty(`--${key}`, variable[key])
    })
}
