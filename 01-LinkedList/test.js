var LinkedList = require("./01-LinkedList")

var list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)

list.remove(4)

console.log(list.getAllNodes())

