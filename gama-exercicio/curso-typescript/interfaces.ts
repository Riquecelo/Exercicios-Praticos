//---Criando Interfaces com TypeScript----//
//As interfaces são usadadas de forma semelhante aos types
interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return{
        nome: "A",
        email: "mmm@mmmm.com"
    }
}

function setUser(usuario: Usuario){

}