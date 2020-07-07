function grade(nilai)(
if (nilai >= 90) {
console.log('Grade anda A');
} else if (nilai >=80 && nilai < 90) {
console.log('Grade anda B');
} else if (nilai >=70 && nilai < 80) {
console.log('Grade anda C');
} else if (nilai >=60 && nilai < 70) {
console.log('Grade anda D');
} else {
console.log('Grade anda E');
}
}
console.log(grade(80));