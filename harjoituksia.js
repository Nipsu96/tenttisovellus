
// Arrayt
// let weekday=[["Maanantai",8],["Tiistai",8],["keskiviikko",8],["Torstai",8],["Perjantai",8]]
let workhours= [8,9,5,6,7]
let num= [1,4,100,2,5,4]
let Sortnum= [1,4,100,2,5,4]

function Weekday(day,workhours) {
    this.day = day;
    this.workhours = workhours;  
    
  }
  var ma = new Weekday("Maanantai", 8);
  var ti = new Weekday("Tiistai", 9);
  var ke = new Weekday("Keskiviikko", 6);

  var weekdays= ([ma,ti,ke])
  console.table(weekdays)

// Työtuntien keskiarvot
let summa=0;
for(i=0;i< workhours.length;i++){
    summa+=workhours[i];
}
let avg= summa/workhours.length

// Min ja Max Math funktiolla
let min =Math.min(...workhours)    // 1
let max= Math.max(...workhours) 

//Min ja max for loopilla
const forLoopMinMax = (workhours) => {
    let min = workhours[0], max = workhours[0]
    for (let i = 1; i < workhours.length; i++) {
      let value = workhours[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }
  
    return [min, max]
  }
  
  const [forLoopMin, forLoopMax] = forLoopMinMax(workhours)

  //Sort ilman comparea
num.sort();

// Sort Comparen kanssa
Sortnum.sort(function(a, b) {
    return a - b;
  });
console.log("Tämä on Min:",min,"Tämä on max:",max)
console.log("Tämä on Min forloopilla:",forLoopMin, "Tämä on Max forloopilla",forLoopMax) 
console.log("Tämä on keskiarvo",avg)
console.log("Tämä on sort ilman Comparea",num);
console.log("Tämä on sort Comparen kanssa",Sortnum);