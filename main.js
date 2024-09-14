function totalpoints(n, w, d, l) {
  let t = w * 3 + d;
  let mp = w + d + l;
  return `${n} have played ${mp} matchs and he got total points ${t}`;
}
console.log(totalpoints("zmalk", 25, 10, 3));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

var hamo = [1, 2, 3, 4, 5, 6, 7];
console.log(hamo[1]);

var dod = 10 + 20 - "30";
console.log(dod);

var arr = [1, 2, 3, 4, 5, 6];

let ody = arr.forEach((val, ind, arra) => console.log(val));

console.log(ody);

let dosa = document.getElementById("zorar");

dosa.addEventListener("click", hamody);

function hamody() {
  console.log("dosaaaaaaaaaaaaaaaaaaaaaaaaa");
}
let mainH = document.createElement("h1");
let mainHT = document.createTextNode(`mody habib baba`);

mainH.appendChild(mainHT);

console.log(mainH);

/////////////////////////////////////////////////////////////////
//promises
// resolve promise 7sl
// reject  promise m7slsh                    handel el promise  [then => dh lw 7sl,catch => dh lw feh reject]

function getUsers(callback) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>  res.json())
    .then( data => callback(data));
}
getUsers(function(d){
    console.log(d);
    
})

//callback  


// async -- await
async function getUse(){
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  console.log(data);
  }
  catch {
    console.log(err);
    
  }
}
getUse()

