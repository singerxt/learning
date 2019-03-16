
class Node {
  /**
   * @constructor
   * @param {Number} initialValue for BST Node.
   */
  constructor(initialValue) {
    if (!Number.isInteger(initialValue)) {
      throw new Error();
    }

    this.value = initialValue;
    this.left = null;
    this.right = null;
  }

  /**
   * Node is leaf when do not have any children's.
   * This is helper function what help to figure out if current
   * Node is last Node in three or check if Node can have children's
   * @return {boolean} is leaf ?
   */
  isLeaf() {
    return this.left === null && this.right === null;
  }

  add(number) {

  }
}

class BST {

}

module.exports = BST;
