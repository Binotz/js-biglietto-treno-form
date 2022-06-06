//vars setup
const generateBtn = document.getElementById('btn-generate');
const undoBtn = document.getElementById('btn-undo');
const nameLabel = document.getElementById('passenger-name');
const offerLabel = document.getElementById('ticket-offer');
const carriageLabel = document.getElementById('ticket-carriage');
const CPcodeLabel = document.getElementById('ticket-CPCode');
const priceLabel = document.getElementById('ticket-price');

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
        
        // price calc
        price = euroPerKm * userKm;
        if(userAge === 'minorenne'){
            price -= price * childDiscount;
        } else if(userAge ==='over'){
            price -= price * elderDiscount;
        }

        console.log(`Prezzo biglietto per ${userAge} è di ${price}`);

        // Output
        nameLabel.innerHTML = userName;
        
        if (userAge === 'minorenne'){
            offerLabel.innerHTML ='Biglietto Minorenne'
        } else if(userAge === 'over'){
            offerLabel.innerHTML = 'Biglietto Over65'
        } else{
            offerLabel.innerHTML = 'Biglietto Standard'
        }

        carriageLabel.innerHTML = Math.floor(Math.random() * 10) +1;
        CPcodeLabel.innerHTML = Math.floor(Math.random() * 10001);
        priceLabel.innerHTML = `${price.toFixed(2)} &euro;`
    }
);

//
