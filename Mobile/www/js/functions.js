$(document).ready(function () {
    inicializar_favoritos();
});

window.fn = {};

window.fn.open = function () {
    var menu = document.getElementById('menu');
    menu.open();
    console.log("221")
};


window.fn.load = function (template, page, params) {
    var menu = document.getElementById('menu');
    menu.close();
    let nav = document.getElementById("nav");
    for (i = 0; i < nav.pages.length; i++) {
        if (nav.pages[i]["id"] == page) {
            nav.bringPageTop(i, params);
            return;
        }
    }
    nav.pushPage(template, params);
    console.log("222")
};
 
// LOG IN
 
$(document).on("click", "#btn_login", function () {
    fn.load(`t_recovery`, `d_recovery`); // te lleva a la pagina principal

});

$(document).on("click", "#btn_login_registro", function () {
    let nav = document.getElementById("nav");
    nav.options = { animation: "lift", animationOptions: { duration: 3 } }
    fn.load(`t_registro`, `d_registro`);
});




// CERRAR SESION
$(document).on("click", ".cerrar_sesion", function () {
    let mensaje = "Estas seguro que deseas cerrar sesion";
    fn.load(`t_login`, `d_login`);
    // let opciones = {
    //     buttonLabels: ["SI", "NO"], title: "Cerrar sesion", callback: function (pos) {
    //         if (pos == 0) {

    //             // if (localStorage.getItem("email") == null) {
    //             //     localStorage.removeItem("email");
    //             //     localStorage.removeItem("password");
    //             // }

    //             item = `<ons-tabbar swipeable position="auto" id="contenidoMenuInicio">
    //                         <ons-tab page="t_login" label="Iniciar sesion" active>
    //                         </ons-tab>
    //                         <ons-tab page="t_registro" label="Registrarse"  active-icon="md-face">
    //                         </ons-tab>
    //                     </ons-tabbar>  `;

    //             $("#menuInicio").append(item);
    //             // Borro el mapa por que cuando se vuelve a iniciar sesion salta un error de que ya esta creado
    //             // map.remove();

    //             fn.load(`t_login`, `p_login`);
    //             ons.notification.toast("La sesion se cerro correctamente", { timeout: 3000 })
    //         }
    //     }
    // }
    // ons.notification.confirm(mensaje, opciones)
});
