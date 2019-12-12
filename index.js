class StackMin {
  constructor () {
    this.stack = []
    this.minStack = []
  }

  push (value) {
    if (value <= this.min()) this.minStack.push(value)
    this.stack.push(value)
  }

  pop () {
    const top = this.stack.pop()
    if (top === this.min()) this.minStack.pop()
    return top
  }

  min () {
    if (!this.minStack.length) return Number.MAX_VALUE
    return this.minStack[this.minStack.length - 1]
  }
}

const stack = new StackMin()
stack.push(5)
console.log(stack.min())

stack.push(6)
console.log(stack.min())

stack.push(3)
console.log(stack.min())

stack.push(7)
console.log(stack.min())

stack.pop()
console.log(stack.min())

stack.pop()
console.log(stack.min())