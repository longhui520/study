interface Returnv<T>{
    (s:T):T
}
const returnItem:Returnv<number> = s=>s
console.log(returnItem(1))