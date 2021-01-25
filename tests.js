const funktiot = require ('./Testimoduuli')

let onnistuneet=0;
let ajetut=0;

// TestSuite
// TestCase

const setUp=()=>{
    // alustukset
}
const tearDown=()=>{
    // puretaan resurssivaraukset, suljetaan tietokahvat jne.
}

const Testisumma = ()=>{
    ajetut++;
    let palautui = funktiot.summa(1,2)
if (palautui == 3){
    onnistuneet++
    console.log("Summa Testi onnistui")
} else{
    console.log("Summa Testi Epäonnistui")
}
}

const Testitulo = ()=>{
    ajetut++;
    let palautui = funktiot.tulo(1,2)
if (palautui == 2){
    onnistuneet++
    console.log("Tulo Testi onnistui")
} else{
    console.log("Tulo Testi Epäonnistui")
}
}
setUp();
Testisumma();
Testitulo();
tearDown();
console.log("Testitulos:",+onnistuneet,"/", +ajetut)
