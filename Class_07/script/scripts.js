// https://www.geeksforgeeks.org/sorting-in-array/

// 1. masīva aizpildīšana ("hard" dati)
let dati = [1, 2, 5, 7, -89, 74, 0, 4];
document.getElementById("demo").innerText = "Masīvs pirms kārtošanas: "+ dati;

// dati.length -> 8 (N) => 7 (N-1) salīdzināšanas pa pāriem
// [(1[0] , 2[1]) , 5 , 7, -89, 74, 0, 4] -> neko nedaram
// [1 , (2[1] , 5[2]) , 7, -89, 74, 0, 4] -> neko nedaram
// [1 , 2 , (5[2] , 7[3]), -89, 74, 0, 4] -> neko nedaram
// [1 , 2 , 5 , (7[3], -89[4]), 74, 0, 4] -> jāveic izmaiņas [1 , 2 , 5 , (-89[3]], 7[4]), 74, 0, 4]
// [1 , 2 , 5 , -89, (7[4], 74[5]), 0, 4] -> neko nedaram
// [1 , 2 , 5 , -89, 7, (74[5], 0[6]), 4] -> jāveic izmaiņas [1 , 2 , 5 , -89, 7, (0[5], 74[6]), 4]
// [1 , 2 , 5 , -89, 7, 0, (74[6], 4[7])] -> jāveic izmaiņas [1 , 2 , 5 , -89, 7, 0, (4[6], 74[7])]
// -------------------------- 1. "lielā" iterācija ir pabeigta
// -------------------------- pēc šis iterācijas vislielākais burbulis ir beigās

// var atkal veikt N-1 salīdzināšanu pa pāriem, bet var 1 salidzināšanu "ieekonomēt" (jo pats pēdējais jau ir vislielākais)
// [(1[0] , 2[1]) , 5 , -89, 7, 0, 4, 74]
skatitajs = 0;
N = dati.length;
for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < N - 1 - i; j++) {    
    console.log(j, dati[j], j + 1, dati[j + 1], dati[j] < dati[j + 1]);
    skatitajs++;
    if (dati[j] > dati[j + 1]) {
      temp = dati[j];
      dati[j] = dati[j + 1];
      dati[j + 1] = temp;
      console.log("Ir veiktas izmaiņas: ", dati);
    }
  }
}

document.getElementById("demo").innerHTML = document.getElementById("demo").innerText + "<br><br> Masīvs pēc kārtošanas: "+ dati;