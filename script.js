// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring


// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring


// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering


// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin


// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring



// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring


console.log('==========№1==========')
let num1 = 1;
let num2 = 2;

console.log(num1 + num2);

console.log('==========№2==========')
let a = '12'
a = parseInt(a)
console.log(typeof(a));


console.log('==========№3==========')

let b = 10;
let num = Math.ceil(Math.random() * b);

if(num % 2 == 0){
    console.log('Juft son');
}else {
    console.log('toq son');
}

console.log('==========№4==========')

let f = prompt('Hello')

if (f === 'Mars'){
    console.log(f);
}else{
    console.log('Mars IT School');
}

console.log('==========№5==========')

let arr = ['salom', 'bilmiman', 'kompyuter', 'olma', 'maktab'];
let result = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
        result.push(arr[i]);
    }
}

console.log(result);

console.log('==========№6==========')

for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log('juft');
    }else{
        console.log('toq');
    }
}
