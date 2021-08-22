var dark_mode = 0;
var tamanho_letra = 16;

// O vídeo começa escondido e só aparece quando é chamado pela função
$(".img_main").last().hide()

$(document).ready(function () {

    //Essas duas funções servem para acionar de desacionar o modo noturno
    $("#darkmode").click(function () {
        if (dark_mode == 0) {
            $("main").css("background-color", "black")
            $("*").css("color", "#F2F2F2")
            dark_mode = 1;
        }
        else {
            $("main").css("background-color", "#F2F2F2")
            $("main").children().css("color", "#0E2F59")
            dark_mode = 0;
        }
    });

    //Função aumentar e diminuir o tamanho - acessibilidade
    $("#letra_aumenta").click(function () {
        if (tamanho_letra < 25)
            tamanho_letra += 1;
        $("html").css("font-size", tamanho_letra)
    });
    $("#letra_diminui").click(function () {
        if (tamanho_letra > 16)
            tamanho_letra -= 1;
        $("html").css("font-size", tamanho_letra)

    });

    $(".img_cadastro").mouseenter(function () {
        $(this).attr("src", "Imagens/cadastro.jpg");
    });
    $(".img_cadastro").eq(0).mouseleave(function () {
        $(this).attr("src", "Imagens/fila vacina1.jpg");
    });
    $(".img_cadastro").eq(1).mouseleave(function () {
        $(this).attr("src", "Imagens/fila vacina2.jpg");
    });
    $(".img_cadastro").eq(2).mouseleave(function () {
        $(this).attr("src", "Imagens/fila vacina3.jpg");
    });

    //Atualiza data e hora
    atualiza_hora();
});

function atualiza_hora() {
    var d = new Date();
    $("#data").text(d.toLocaleString());
    setTimeout(atualiza_hora, 1000);
}
