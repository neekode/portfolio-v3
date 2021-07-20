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