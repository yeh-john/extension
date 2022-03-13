// Video src
// https://www.youtube.com/watch?v=yJ_U7eJmGts


// Setting
const h1 = document.createElement('h1');

// Calculate info
const gas = document.getElementById("t1").value;
const gwei = document.getElementById("t2").value;
const btn = document.getElementById("btn");

// Start calculate
const gas_fee = parseFloat(gas) * parseFloat(gwei) * 0.000000001

// Const result info
const result = gas_fee + 'ETH'
h1.textContent = result;

const div = document.querySelector('div');

// Result
btn.addEventListener('click', () => {
    div.appendChild(h1);
});
