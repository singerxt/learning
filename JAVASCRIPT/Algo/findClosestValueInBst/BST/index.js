
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
   * Check if branch is ready to get value.
   * @param {'left' | 'right '} branch to check
   * @return {boolean} is empty ?
   */
  isEmpty(branch) {
    if (branch !== 'left' || branch !== 'right') {
      throw new Error('NODE :: .isEmpty invalid branch must be \'left\' or \'right\'.');
    }

    return !isInteger(this[branch]);
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

  /**
   * Helper method for adding values to node.
   * Creating three structure
   *         1
   *        /\
   *       2  3
   * @param {Number} value
   * @return {void}
   */
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
  constructor(node) {
    this.root = node;
  }

  add() {

  }

  static search() {

  }

  static exists() {

  }
}

module.exports = BST;
