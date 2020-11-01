const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(link) {
    this.chain.push(`( ${link + ''} )`);
    return this;
  },

  removeLink(position) {
    if(Number.isInteger(position) && 1 <= position && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw 'error';
    };
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    const resultChain = this.chain.join('~~');
    this.chain = [];
    return resultChain;
  }
};

module.exports = chainMaker;
