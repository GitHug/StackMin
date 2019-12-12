class StackMin {
  constructor () {
    this.stack = []
  }

  push (value) {
    const top = this.peek()

    if (top) {
      const { min: previousMin } = top

      const min = Math.min(value, previousMin)

      this.stack.push({ value, min })
    } else {
      this.stack.push({ value, min: value })
    }
  }

  pop () {
    return this.stack.pop()
  }

  min () {
    const top = this.peek()

    return top && top.min
  }

  peek () {
     return this.stack[this.stack.length - 1] 
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