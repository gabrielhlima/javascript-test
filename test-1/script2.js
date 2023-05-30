var user = {
    username: "gabrielhlima",
    password: "bololo"
};

var database = [
    {
        username: "gabriel",
        password: "doidera"
    },
    {
        username: "felipe",
        password: "nutricao"
    },
    {
        username: "cecilia",
        password: "lara_serena"
    }
];

var newsFeed = [
    {
        user: "gabriel",
        feed: "Eita que chuva"
    },
    {
        user: "gabriel",
        feed: "Eita que vontade de treinar"
    },
    {
        user: "felipe",
        feed: "hoje tem academia e crossfit"
    },
    {
        user: "cecilia",
        feed: "eu amo minhas nenens"
    }
];

// função para checar se o usuário é válido
function isUserValid (username, password) {
    // fazer um loop for para percorrer todo o database para ver se o username e password correspondem
    for (var i=0; i < database.length; i++){
        // "se o username do indice atual de database e o password do incice atual de database corresponderem..."
        if (database[i].username === username  && database[i].password === password){
            // caso corresponder, retornará true
            //uma função termina quando vê o "return"
            return true;
        }
    }
    // se não corresponder, retornará false
    return false;
}

function signIn (username, password) {
    if (isUserValid(username, password) === true){
        alert("Seja bem-vindo(a)");
        console.log(newsFeed)
    } else {
        alert("Login ou senha inválidos.");
    }
}

var usernamePrompt = prompt("What is your usename:");
var passwordPrompt = prompt("What is your password:");
signIn(usernamePrompt, passwordPrompt);