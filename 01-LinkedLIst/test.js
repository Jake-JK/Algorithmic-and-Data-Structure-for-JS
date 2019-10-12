var LinkedList = require("./01-LinkedList")

var list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(1)
list.push(4)




console.log(list.findByValue(0))

console.log(list.getAllNodes())

console.log(list.remove(2))

