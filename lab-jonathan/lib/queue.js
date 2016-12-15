let Node = require('./node');
let Queue = module.exports = function(){
  let newNode = new Node(val)
  if(!this.back) {
    this.back = newNode
    this.front = this.back
    return
  } else {
    this.back.prev = newNode
    this.back = newNode
  }

}

Queue.prototype.enqueue  = function(val) {
  this.back = new Node(val, this.back)
};

Queue.prototype.dequeue = function(){
  let temp = this.front;
  if(this.front && this.front === this.back) {
    this.front = null;
    this.back = null;
    return temp.val;
  } else {
    this.front = temp.prev;
    rturn temp.val;
  }
};
