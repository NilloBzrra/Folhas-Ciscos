document.addEventListener("DOMContentLoaded", function () {


    // =========================================================
    // ELEMENTOS
    // =========================================================

    const btnMais = document.getElementById("btnMais");

    const btnMenu = document.getElementById("btnMenu");

    const btnFechar = document.getElementById("btnFechar");

    const sidebar = document.getElementById("sidebar");

    const overlay = document.getElementById("overlay");


    // =========================================================
    // ABRIR SIDEBAR
    // =========================================================

    function abrirSidebar() {

        sidebar.classList.add("aberta");

        overlay.classList.add("ativo");

    }


    // =========================================================
    // FECHAR SIDEBAR
    // =========================================================

    function fecharSidebar() {

        sidebar.classList.remove("aberta");

        overlay.classList.remove("ativo");

    }


    // =========================================================
    // BOTÃO +
    // =========================================================

    btnMais.addEventListener("click", function () {

        abrirSidebar();

    });


    // =========================================================
    // BOTÃO MENU MOBILE
    // =========================================================

    btnMenu.addEventListener("click", function () {

        abrirSidebar();

    });


    // =========================================================
    // BOTÃO X
    // =========================================================

    btnFechar.addEventListener("click", function () {

        fecharSidebar();

    });


    // =========================================================
    // CLICAR NO FUNDO
    // =========================================================

    overlay.addEventListener("click", function () {

        fecharSidebar();

    });


    // =========================================================
    // FECHAR AO CLICAR EM UM LINK
    // =========================================================

    const linksSidebar =
        sidebar.querySelectorAll("a");


    linksSidebar.forEach(function (link) {

        link.addEventListener("click", function () {

            fecharSidebar();

        });

    });


});