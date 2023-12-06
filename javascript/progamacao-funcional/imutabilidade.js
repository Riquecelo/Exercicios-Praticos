// Exemplo em JS
const cart ={
    quantity:2,
    total: 200
}
// bad 
cart.quantity = 3;

// good
const newCart = {...cart, quantity:3}

//Exemplo em ReactJS
const [amount, setAmout] = useState(0)

// bad
amount = 2;

// good
setAmout(2);