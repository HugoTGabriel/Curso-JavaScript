var agora = new Date()
var horaatual = agora.getHours()
var minutos = agora.getMinutes();
var foto = document.getElementById("foto");

document.getElementById("horas").innerText = `Agora são ${horaatual}:${minutos.toString().padStart(2, '0')}`;
    // Manhã
if (horaatual >= 6 && horaatual < 12) {
    foto.src = "manha.jpg";
    document.body.style.background = "#f3eb7cff";
} else if (horaatual >= 12 && horaatual < 18) {
    // Tarde
    foto.src = "tarde.jpg";
    document.body.style.background = "#f38a12b2";
} else {
    // Noite
    foto.src = "noite.jpg";
    document.body.style.background = "#321b99ff";
}