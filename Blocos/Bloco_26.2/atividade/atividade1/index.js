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

FPromise(30, 5, 8)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
