function revalute(){
    let waluta = document.getElementById("waluta").value;
    let suma = document.getElementById("kwota").value;
    let wynik;
    switch(waluta){
        case "dolar":
            wynik = suma*4.14;
            break;
        case "funt":
            wynik = suma*5;
            break;
        case "euro":
            wynik = suma*4.43;
            break;
        case "jen":
            wynik = suma*0.027;
            break;
             default:
            alert("nie ma takiej waluty na liście");
    }
    
    document.getElementById("wynikP").innerHTML = "wynik: "+wynik;
}

