let obj = { 
    "nome": 'Rogério',
    "profisão": 'Desenvolvedor de software',
    "listaEx": [1,2,3,4],
    "listaDeObj": [
        {
            "nome": "ABCD",
            "bairro": "Copacabana"
        },
        {
            "nome": "EFGH",
            "bairro": "Leme"
        },
        {
            "nome": "IJKL",
            "bairro": "Ipaneama"
        },
    ]
}


console.log(obj)
 consolo.log(obj.nome)
 console.log(obj.profissao)

 //listas
 console.log(obj.listaEx)
 for (var i = 0; i < obj.listaEx.length; i ++)  {
    console.log(obj.listaEx[i])
 }

// // lista de obj
// console.log(obj.listaDeObj)
// for ( var i = 0; i < obj.listaDeObl.length; i++)  {
//      console.log(obj.listaDeObj[i].nome) 
//      console.log(obj.listaDeObj[i].bairro) 
// }