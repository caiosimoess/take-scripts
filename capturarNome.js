function capturarNome(inputUsuario) {

  var regexNome = /(nome [eé]?\ ?\ ?|me chamo\ \ ?|me\ chamar\ de\ \ ?|chame de\ \ ?|aqui [eé]\ [ao]?\ \ ?|sou\ [ao]?\ ?\ ?)([a-zA-ZÁ-Ùá-ù]+(\ [A-ZÁ-Ù])?[a-zá-ú]*)/i;

  var regexInteracao = /\?|\!|boa{1,3} |tudo{1,3} |bom{1,3} |bem{1,3} |ol[aá]{1,3} |obrigad[ao]{1,3}|noite{1,3} |td |valor |avalia[cç][aã]o |tarde |ok{1,3} |dia{1,3} |qual |valores |como |aceita |com |agendar |marcar |agendamento |^oi{1,5} |pode{1,3} |gente{1,3} |^n[aã]o{1,3}|n[aã]o{1,3} |pra |muito{1,3} |d[uú]vidas |para |informa[cç][oõ]es |seria |tdo{1,3} |algu[eé]m |claro |sim |gentileza |por |oie{1,5} |prazer |humano |grato|\"type\"\:|\{\"name\"\:|[0-9]/i;

  var regexNaoPegar = /você|vc|m[aã]e|pai|d[ao] |deficiente|surdo|cego|mudo|gay|homossexual|aluno|cliente|fornecedor/i;

  var count = inputUsuario.trim().split(/\s+/).length;

  if (count <= 7 && regexNaoPegar.test(inputUsuario) == true) {

    return "Por favor digite nome"

  } else if (count <= 2 && regexNome.test(inputUsuario) == false && regexInteracao.test(inputUsuario) == false) {

    return inputUsuario

  } else if (regexNome.test(inputUsuario) == true) {

    return inputUsuario.match(regexNome)[2]

  } else {

    return "Por favor digite nome"

  }

}