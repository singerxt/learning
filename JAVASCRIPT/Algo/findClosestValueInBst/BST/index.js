
const { isInteger } = Number;

class Node {
  /**
   * @constructor
   * @param {Number} initialValue for BST Node.
   */
  constructor(initialValue) {
    if (!isInteger(initialValue)) {
      throw new Error();
    }

    this.root = initialValue;
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

  add(value) {
    if (!isInteger(value)) {
      throw new Error('NODE :: .add require value argument (int)');
    }

    if (!isInteger(this.root)) {
      this.root = value;
      return;
    }

    if (!isInteger(this.left)) {
      this.left = new Node(value);
      return;
    }

    if (!isInteger(this.right)) {
      this.right = new Node(value);
      return;
    }

    throw new Error('NODE :: root, left and right is already allocated');
  }
}

class BST {

}

module.exports = BST;
