/*1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию */




function tcalc() {
    var tcels;
    var tfareng;

    do {
        tcels = prompt("Enter temperature in Celsium.");
    } while (isNaN(tcels) || tcels == "")
    tfareng = (9 / 5) * parseFloat(tcels) + 32;
    alert("Temperature in farengheit is " + tfareng);

}
tcalc()
