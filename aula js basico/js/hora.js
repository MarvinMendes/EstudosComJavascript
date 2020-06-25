const hora = Number.parseInt(prompt('Digite a hora atual'));

if(hora > 0 && hora <= 12) {
    alert('Bom dia!')
}
else if(hora > 12 && hora <= 18) {
    alert('Boa tarde!')
}
else if(hora >18 && hora <= 24){
    alert('Boa noite!')
}
else{
    alert('A entrada deve estar entre 0 e 24 ')
}







