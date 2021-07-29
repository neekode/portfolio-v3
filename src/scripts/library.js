import $ from "jquery";

export const addBounceOnHover = (el) => {
    el.current ? el.current.onmouseover = () => {
        $(el.current).addClass('animated bounce');
    } : el.current = null;

    el.current ? el.current.onmouseleave = () => {
        setTimeout(() => $(el.current).removeClass('animated bounce'), 1000);
    } : el.current = null;

    return el;
}

export const themeChange = (el, scrollY, setSection) => {
    const {offsetTop} = el.current
    if (scrollY > (offsetTop - 50)) {
        setSection(el.current.id);
    }
}