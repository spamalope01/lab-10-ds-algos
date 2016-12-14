![cf](https://i.imgur.com/7v5ASc8.png) lab-10-ds-algos
======
# Data Structures & Algorithms

## Stacks and Queues

[Data Structures: Stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

[Data Structures: Queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

### To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

### Include
* gitignore
* eslint
* package.json
* gulpfile
* readme
 * Write a paragraph about your project
 * Document your methods (format them using markdown for clean readability!)
 * Write docs on your implementation and document your Big-O
* tests
  * use chai's expect and should where applicable
  * ensure that all of your codes has test coverage

### Complete your Data Structures
*In lecture/whiteboarding practice we completed each of the methods for Stacks and Queues.*
* Implementation the Stack in your own modules:
  * `.push()`, `.pop()`, and `.peek()`
* Implementation the Queue in your own modules:
  * `.enqueue()` and `.dequeue()`
* Each of your data structures should be located in it's own module.
  * i.e. `./lib/stack.js` and `./lib/queue.js`
* Write clean test coverage for your data structures
  * Ensure that you've covered any edge cases and tested thoroughly
  * **Write at least three different tests (`it('should do something')` blocks) for each method**
  * **NOTE**: When writing tests, you should be considering constraints and validations that your code should enable. You may want to refactor your modules in order to enable/disable specific variants of your incoming Node data.
    * For example:
      * Should the value of each node be restricted to an integer data type? (Your choice will be the right answer, but implement and test it!)
      * Do Nodes have to have unique values?

### Bonus
* 2pts: Implement the ability to take an array of values as an argument to your Stack and Queue constructors, and create new, ordered values in the data structure for each value in the array.

## Code Challenge: Towers of Hanoi
[Tower of Hanoi Wiki](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
*The Wiki will provide a ton of information!*

![towers](http://ecx.images-amazon.com/images/I/41OgWYImqaL._SX300_.jpg)

### Directions
1. Create a new module for this challenge in your `./lib` directory
2. Complete the code challenge using either an iterative or recursive solution
  * If you choose to do both, put them in separate modules and document them in your README
3. Update your README with information relating to the challenge, and your solution(s)
  * Include Big-O comments to document the efficiency of your solution(s)
4. Write tests that confirm your code functions as expected.
  * Be sure to test edge cases to ensure your not receiving false positives

### Rules of Challenge
* You are given three stacks (A, B, and C)
  * **Use your new implementation of a stack**
* Located on Stack A are six disks (your solution should support `n` disks)
* The disk on bottom is the largest, and each disk above being smaller than that below

* The objective of the puzzle is to move the entire stack of disks from the starting stack to a new stack (i.e. from A to C, or A to B), obeying the following rules:
  * Only one disk can be moved at a time
  * Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack
  * No disk may be placed on top of a smaller disk
