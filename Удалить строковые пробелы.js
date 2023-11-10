/*function noSpace(x){
    const arr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
    
        arr.push(x[i]);
    }
  }
  return arr.join(undefined);
}*/

function noSpace(x){
   return (x.split(' ')).join('');
}
console.log(noSpace('abb abbb bbbba'));
