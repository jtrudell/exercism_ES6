class HelloWorld {
  hello(name) {
    name === '' ? this.name = 'World' : this.name = name;
    return `Hello, ${this.name}!`;
  }
}

export default HelloWorld;
