import gsap from 'gsap'

export const useSidebarAnimate = () => {
    const hideSidebar = (el:HTMLElement) => {
        gsap.to(el,{
            width: 0
        })
    }

    return { hideSidebar }
}
