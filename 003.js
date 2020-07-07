var deretangka=[5,9,8,20,24,48,37,51,7,25];

function maxangka(deretangka) {
return Math.max.apply(null,deretangka);
}

function minangka(deretangka) {
return Math.min.apply(null,deretangka);
}

function averangka(deretangka){
const reducer = (accumulator, currentValue) => accumulator + currentValue;
sum = deretangka.reduce(reducer)
len=deretangka.length;
average= sum/len;
return average;
}

console.log(averangka(deretangka));