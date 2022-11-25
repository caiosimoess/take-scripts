// Extração dos números do cpf em formato string

function strCPF(inputUsuario) {

  var regex = /[0-9]{3}[\.\ \-]?[0-9]{3}[\.\ \-]?[0-9]{3}[\.\ \-]?[0-9]{2}/;
  var cpfMatch = regex.exec(inputUsuario)[0];
  var cpf = cpfMatch.replace(/\D/g, "");

  return cpf
}


// função TestaCPF está disponível no site da Receita Federal 

function TestaCPF(strCPF) {

  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}