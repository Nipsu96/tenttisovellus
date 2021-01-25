const onkoLukuja= (x)=>{
  return x.every(item=>{
       return typeof item=='number'
   })
}

const summa =(a,b)=>{
    if (onkoLukuja([a,b])){
        return a+b;
    }else{
        return "Banaani"
    }
}

const tulo =(a,b)=>{
    return a*b;
}


module.exports={
    summa: summa,
    tulo: tulo,
};

