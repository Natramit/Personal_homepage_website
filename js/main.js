function loaded() {
    close_loading_page();
    setTimeout(function () {
        open_layout_page();
        show_headshot();
    }, 600);
}
function close_loading_page() {
    let div_E = document.getElementById('loading_page');
    div_E.style.opacity = 0;
    setTimeout(function () {
        div_E.style['z-index'] = -2;
        div_E.style['pointer-events'] = 'none';
        div_E.children[0].children[0].style.animationPlayState = 'paused';
        div_E.children[0].children[1].style.animationPlayState = 'paused';
    }, 1000);
    return 0;
}
function open_layout_page() {
    document.getElementById('layout_page').style['grid-template-rows'] = '1fr';
    return 0;
}
function show_headshot() {
    setTimeout(function () {
        document.getElementById('headshot_div').style['grid-template-rows'] = '1fr';
    }, 600);
    return 0;
}
function background_img_show() {
    document.getElementById('background_img_id').style.opacity = '1';
    return 0;
}