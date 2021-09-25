const FPromise = (ParamA, ParamB, ParamC) => {
  
  const promises = new Promise((resolve, reject) => {
    
    if (typeof ParamA !== 'number' ||
    typeof ParamB !== 'number' ||
    typeof ParamC !== 'number') {
      throw new Error("Informe apenas números");
    }
    const expression = (ParamA + ParamB) * ParamC;
    if (expression < 50 ) reject(new Error("abaixo do valor informado"));

    resolve(expression);

  });

  return promises;
}

const number1 = Math.floor(Math.random() * 100 + 1);
const number2 = Math.floor(Math.random() * 100 + 1);
const number3 = Math.floor(Math.random() * 100 + 1);

try {
  const data = FPromise(number1, number2, number3);
  console.log("O resultado foi:",data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}
