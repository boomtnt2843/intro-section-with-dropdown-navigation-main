const activeDrawer = (element) => {
    const drawer = document.getElementById(element);
    drawer.classList.toggle('active');
}

const mobileActive = () =>{
    const menu = document.getElementById("navbar-group");
    menu.classList.toggle('mobile-active');
}