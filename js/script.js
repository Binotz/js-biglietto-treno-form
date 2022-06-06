//vars setup
const generateBtn = document.getElementById('btn-generate');
const undoBtn = document.getElementById('btn-undo');
const euroPerKm = 0.21;
const childDiscount = 0.2;
const elderDiscount = 0.4;
let userName = '';
let userKm = 0;
let userAge = '';
let price = 0;

generateBtn.addEventListener('click',
    function(){
        // Data retrieve
        userName = document.getElementById('ticket-name').value;
        userKm = document.getElementById('ticket-km').value;
        userAge = document.getElementById('ticket-age').value;
        console.log(userName, userKm, userAge);
        
        // price calc
        price = euroPerKm * userKm;
        if(userAge === 'minorenne'){
            price -= price * childDiscount;
        } else if(userAge ==='over'){
            price -= price * elderDiscount;
        }
        console.log(`Prezzo biglietto per ${userAge} è di ${price}`);


    }
);
console.log(userName);

//
