![cf](https://i.imgur.com/7v5ASc8.png) lab-10-ds-algos
======
# Data Structures & Algorithms

### Stacks and Queues

[Data Structures: Stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

[Data Structures: Queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Include
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

## Complete your Data Structures
*You should have the `.push()` and `.peek()` methods of a Stack, and the `.enqueue()` method of the Queue.*
* Complete the implementation of of the Stack:
  * `.push()`, `.pop()`, and `.peek()`
* Complete the implementation of of the Queue:
  * `.enqueue()` and `.dequeue()`
* Write clean test coverage for your data structures
  * ensure that you've covered any edge cases and tested thoroughly

## Bonus
* 2pts: Implement the ability to take an array of values as an argument to your Stack and Queue constructors, and create new Nodes in the data structure for each value in the array.

## Code Challenge: Towers of Hanoi
[Tower of Hanoi Wiki](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
*The Wiki will provide a ton of information!*

* You are given three stacks (A, B, and C)
  * **Use your new implementation of a stack**
* Located on Stack A are six disks
* The disc on bottom is the largest, and each disc above being smaller than that below

* The objective of the puzzle is to move the entire stack of disks from A to C, obeying the following rules:
  * Only one disk can be moved at a time
  * Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack
  * No disk may be placed on top of a smaller disk

* Write tests that confirm your code functions as expected.
  * Be sure to test edge cases to ensure your not receiving false positives
