var MinStack = function() {
    this.stack = [] 
};
//Creates objects that determine min every step of the way.
MinStack.prototype.push = function(x) {
    let min = this.getMin()
    this.stack.push({
        value: x,
        min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, x)
    })
};

MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        let item = this.stack.pop()
        return item.value
    }
};

MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
        let item = this.stack[this.stack.length - 1]
        return item.value
    }
};

//the last item will always know what the min is since it's most up to date.
MinStack.prototype.getMin = function() {
    if (this.stack.length > 0) {
        let item = this.stack[this.stack.length - 1]
        return item.min
    }
};