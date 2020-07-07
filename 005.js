function tkabisat (awal,akhir) {
while (awal <= akhir)
{
if ((awal%4)==0 || (awal%400)==0){
console.log(`${awal} adalah tahun kabisat`);
} else if ((awal%100)!=0) {
console.log(`${awal} adalah bukan tahun kabisat`);
}

awal++;
}

}
console.log(tkabisat(1600,2020));