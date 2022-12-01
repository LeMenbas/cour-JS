// let guest = []
// guest = ['Sarah Fraisou', "Mister V", "Leo TeckMarker"]

// let firstGuest = guest[0];
// let deuxièmeGuest = guest[1];
// let ThirdGuest = guest[2];

// console.log(firstGuest);

const div = document.querySelector(".affiche")

// // div.innerHTML = "salut ça va"


// // div.appendChild(newElement)


// // const ul = document.createElement('ul');

// // // for(i =0; i< 3 ; i++){
// // //     let li= document.createElement("li")
// // //     li.innerHTML = "je suis un nouveau élément"
// // //     ul.appendChild(li);
// // // }

// // div.appendChild(ul)

// const newLi = document.createElement("li");
// const newText = document.createTextNode("Tasse")
// newLi.appendChild(newText);

const malist = document.getElementById('list')
// malist.insertBefore(newLi, malist.children[1])

const simplArrow = [1,2,3,4,5]
console.log(simplArrow);


// exercice 1 : doublé les chiffres du tableaux

const doublArray = simplArrow.map(a => a * 2) // a est un nom que je peux définir par ce que je veux 
console.log(doublArray)

const newP = document.createElement("p")
const a = document.createTextNode(doublArray)
newP.appendChild(a)

malist.insertBefore(newP, malist.children[0])