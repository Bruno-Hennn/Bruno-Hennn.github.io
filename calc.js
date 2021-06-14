let A = 0
let B = 0

function AtualizaValorA(event)  {
    A = event.target.value
}

function AtualizaValorB(event)  {
    B = event.target.value
}

function Soma()  {
    let valorSoma = perseFloat(A) + parseFloat(B)
    console.log(valorSoma)

    let txtResultado = document.getElementById('txtResultado')
    txtResultado.value = valorSoma
}
function Subtracao()  {
    let valorSoma = perseFloat(A) - parseFloat(B)
    console.log(valorSoma)

    let txtResultado = document.getElementById('txtResultado')
    txtResultado.value = valorSoma
}
function Multiplicação()  {
    let valorSoma = perseFloat(A) * parseFloat(B)
    console.log(valorSoma)

    let txtResultado = document.getElementById('txtResultado')
    txtResultado.value = valorSoma
}
function Divisao()  {
    If (B == 0) 
       {
           alert('Digite um valor válido para a divisão!')
       }
       
    else {
       let valorSoma = perseFloat(A) / parseFloat(B)
       console.log(valorSoma)

       let txtResultado = document.getElementById('txtResultado')
       txtResultado.value = valorSoma
    }
}
    
    function Limpar() {
    let txtboxes = document.getElementsByTagName('imput')
    for (let i = 0; i < txtboxes.length; i++)
    console.log(txtboxes[i])
    txtboxes[i].value = ''
}

  //alterarCorDasLinhas


  function alterarCorDasLinhas()  {
      let rows = document.getElementsByClassName('row')
      for (let i = 0; i < rows.length; i ++)   {
          rows[i].style.backgroud = 'green'
      }
  }