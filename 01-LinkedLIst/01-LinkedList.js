//Node 节点类

function Node(value){
    this.value = value;
    this.next = null;
}

//链表类

function LinkedList() {
    this.head = null;
    this.foot = null;
    this.length = 0
}

var proto = LinkedList.prototype = {
    //在链表末端添加新节点
    push: function(value){
        var newNode = new Node(value);
        if(this.head === null){ 
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = newNode;
        }
        this.length += 1
        return newNode
    },

    //在链表首端添加新节点
    shift: function(value){
        var newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
        }else{
            var currentHead = this.head;
            newNode.next = currentHead;
            this.head = newNode;
        }
        this.length ++ 
        return newNode
    },

    //在任意位置后面插入新节点
    insert: function(position, value){
        var length = this.length
        if(position <= length && position>=0 ){
            if(position === 0){
                this.shift(value)
                return
            }
            if(position === length){
                this.push(value)
                return
            }
            var currentNode = this.head;
            var prevNode = null
            var index = 0;
            var newNode = new Node(value)
            while( index ++ < position){
                prevNode = currentNode;
                currentNode = currentNode.next;
            }

            prevNode.next = newNode;
            newNode.next = currentNode;
            
            this.length ++
            return newNode
        }
    },

    //根据值 查找节点
    findByValue: function(value){
        var result = null;
        if(this.head === null){
            console.log("这是个空链表")
            return result
        }
        if(this.head.value === value){
            return this.head
        }
        var currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
            if(currentNode.value === value){
                result = currentNode;
                return result;
            }
        }
        console.log("找不到")
        return result
    },

    //获取头节点
    getHead: function(){
        return this.head
    },

    //获取所有节点
    getAllNodes: function(){
        var result = [];
        if(this.head === null){
            return result;
        }else{
            var currentNode = this.head;
            while(currentNode.next !== null){
                result.push(currentNode.value);
                currentNode = currentNode.next;
            }
            result.push(currentNode.value)
            return result
        }
    },
    
    //根据节点value 返回索引值
    indexOf: function(value, start){
        if(start > this.length - 1){
            return -1
        }
        start = start -1;
        var index = start || 0;
        var currentNode = this.head
        if(currentNode){
            if(currentNode.value === value) {
                return 0
            }
            while(currentNode.next){
                index++
                currentNode = currentNode.next;
                if(currentNode.value === value){
                    return index
                }
            }
        }
        return -1
    },

    //根据value 移除节点
    remove: function(value){
        var node = this.findByValue(value)
        console.log(node)
        // if(node.value === this.head.value){
            
        // }
    }
    
};


module.exports = LinkedList;



