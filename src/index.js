module.exports = function reverse (n) {
    let num = Math.abs(n).toString().split('').reverse().join('')
   return num
}
