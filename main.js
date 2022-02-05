// && *	and
// || +	or
// !	not



// 1
// let a = true
// let b = false
// let c = false
// alert( 'a ) ' + a || b )
// alert( 'b ) ' + a && b )
// alert( 'c ) ' + b || c )

// 2
// let x = false
// let y = true
// let z = false
// alert('a) ' + x || z)
// alert('b) ' + x && y)
// alert('c) ' + x && z)

// 3

// let a = true
// let b = false
// let c = false
// alert('a) ' + ! ( a && b ))
// alert('b) ' + a && (!b))
// alert('c) ' + a && b || c)

// 4
 
// let x = true
// let y = true
// let z = false
// alert( ! ( 'a) ' + x && z))
// alert('b) ' + x || (!y))
// alert('c) ' + x || y && z)

// 5

// let a = true
// let b = false
// let c = false
// alert('a) ' + (a || b) && (!c))
// alert('b) ' + a && (!b) || c)
// alert('c) ' + !(a && c) || c)

// 6

// let a = true
// let b = false
// let c = false
// alert('a) ' + a || !( a && b ) || c)
// alert('b) ' + !a || a && ( b || c ))
// alert('c) ' + (a || b && !c) && c)

// 7

let x = 15
let y = 10

alert('a) ' + x<2 && y<3 )
alert('b) ' + !( x<2 ))
alert('c) ' + x<1 || y<2 )
alert('d) ' + !( x<0 && x<5 ))
alert('e) ' + 10<x<20 )
alert('f) ' + x>3 || x<1 )
alert('g) ' + 0<y<4 && x<5 )
alert('h) ' + x>3 && x<10 )