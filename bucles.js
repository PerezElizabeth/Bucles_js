
let i = 1;
for(let i = 1 ; i<= 10; i++){
    console.log(`5 x ${i} = ${ 5*i}`)
} 




 
let array = [1,2,3,4,5,6,7,8,9,10];
 for(let elemento of array){
    console.log(elemento)
 } 

 
 let array1 = [1,2,3,4,5,6,7,8,9,10];
 for( let elemento of array1){
    console.log( elemento * 2)
 }  

 let objetoFamiliar = [
    {
        nombre : "Rosa",
        edad : 52,
        profesion: "Administrador",
        hobby:"Leer"
    },

    {
        nombre : "Elizabeth",
        edad: 35,
        profesion:"Tecnologa",
        hobby:" ir al cine"
    },

    {
        nombre: "Oscar",
        edad: 30,
        profesion:"Ingeniero",
        hobby:"trotar"
    },

    {
        nombre:"Julio",
        edad: 27,
        profesion:"Vago",
        hobby:"ir de fiesta"
    },

    {
        nombre:"Johanna",
        edad: 38,
        profesion:"Administrador",
        hobby:"leer"
    }
 ]
console.log("Presentacion de Familia:")
for(let i = 0; i<objetoFamiliar.length;i++){
    console.log(`El miembro "${objetoFamiliar[i].nombre}" de la familia tiene ${objetoFamiliar[i].edad} años. Se desempeña como ${objetoFamiliar[i].profesion} y en su tiempo libre le gusta ${objetoFamiliar[i].hobby}.`)
} 
 
 


let arrayImpares = [];
for(let i = 1; i <=10; i+= 2){
    arrayImpares.push(i);
    console.log(arrayImpares);
} 


let array10 = [2,20,5,11,16,26,8,15,1,22];
let numMasGrande = array10[0];
for (let i = 1; i < array10.length; i++){
    if(array10[i] > numMasGrande){
        numMasGrande = array10[i];
    }
}
console.log(numMasGrande);





 







