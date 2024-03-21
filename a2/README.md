# WEB222 Assignment 2 Instructions

## Introduction

This assignment will help you learn and practice JavaScript Arrays and Objects, as well as working with real data.

Please do this assignment on your own. You should not work in partners, use AI, and all code must be written by you. Gaining experience with JavaScript and the web takes a lot of personal practice, and working on these problems yourself will help build your skill.

## Submission

To hand in your work, see the “**Submitting your Assignment**” section below.

Please read and follow all instructions below carefully. If you have problems or questions, talk to your professor.

## Setup

Just as we did with assignment 1, this assignment once again uses “Unit Testing”, and relies on a number of dependencies, which must be installed on your computer.

If you haven’t already watched it, please see this walk-through and discussion of how to setup and run the tests: https://www.youtube.com/watch?v=8RuLrmVDOw8

In order to install these dependencies, you must first install Node.js on your computer. See installation instructions at:

https://nodejs.org/en/

You can install the LTS (Long Term Support) version of node.js, which is currently 18.x.

# Install Dependencies

Open a command line terminal (e.g., cmd.exe) and navigate (i.e., cd) to the directory where you have unzipped the assignment files. When you type dir (Windows) or ls (Linux/macOS) you should see the package.json file.

In this directory, install the assignment dependencies using the Node.js Package Manager command, named npm. The `npm` command is installed along with node.js. In your terminal, type the following:

```bash
npm install
```

This will download and save all the necessary dependency files to a folder named `node_modules/` in the current directory. You should see a node_modules folder next to your package.json.

If you have trouble getting `npm install` to work:

  - Did you install node.js?
  - If you type `node –version` in your terminal, does it print the version?
  - Are you in the right directory (you must cd into the correct directory)

If you need help, ask your classmates and/or talk to your professor.

## Learn how to Navigate the Code

The assignment has a number of components:

  - `src/problem-0x.test.js`, unit test files. You need to get these to all pass.
  - `src/data.js`, the data used in many of the tests
  - `src/observations.js`, your code solutions go here


Implement all Functions in `src/observations.js` and Pass All Unit Tests


You are asked to complete the code in the file `src/observations.js`. The tests use data in `src/data.js`, which you’ll use in many of your solutions. A basic file layout has already been created with various functions and variables. Also, detailed comments have been left above each function you need to implement.

In addition, unit tests have been written for each function. They are named `src/problem-00.test.js`, `src/problem-01.test.js` and so on.

These tests will help you determine if your code is working correctly: running the tests should produce the output that the tests expect, and that tests will either pass or fail.

To run the tests, use the `npm` command:

```bash
npm test
```

Your goal is to get all of the tests to pass correctly. If a test fails, pay attention to the error messages that get produced, what was expected vs. what was actually returned, and make corrections to your code.

# Different Ways to Run Tests

If you are going to run your tests over and over as you make changes to `src/observations.js`, you can run the tests so they automatically watch for changes, and re-run whenever you save your file:

```bash
npm run test-watch
```

You can stop the tests from running using `CTRL + c`.

Next, you can run a single test instead of all tests:

```bash
npm test problem-00
```

This will only run the tests in `problem-00.test.js`, making it easier to work on only one problem at a time.

You can also watch a particular test, and re-run it when the code is saved:

```bash
npm run test-watch problem-00
```

## Learn how to Lint your Code

In addition to running unit tests, you can also run a linter called eslint. Linting helps to find and remove common errors in code, for example, missing a semi-colon, or forgetting to declare a variable.

To run eslint, use the `npm` command:

```bash
npm run eslint
```

If there are no problems, there will be no output. If there is any output, pay attention to what it says, so you can make corrections. For example:

> ```bash
> assignment1/assignment1.js
>   18:9 error 'x' is defined but never used no-unused-vars
> ```

Here, we see a lint error, which has various information:

  1. The filename is listed first, `assignment1/assignment1.js`
  2. The line number is listed next: 18
  3. The column number on line 18 is listed next: 9
  4. The actual error or warning comes next: `error 'x' is defined but never used`
  5. The rule name comes last: `no-unused-vars`. You can lookup how to fix these errors using the rule name, for example: https://eslint.org/docs/rules/no-unused-vars

Your code should have no lint errors when you submit it.

## Learn how to Properly Format your Code

Source code needs to be properly structured, use consistent indenting, semi-colons, etc. Doing so makes it easier to understand, read, and debug your code.

Your code must be properly and consistently formatted. You can do it by hand, or, you can use Prettier (https://prettier.io/) to do it automatically.

There are two ways to use Prettier. First, using the `npm` command:

```bash
npm run prettier
```

This will rewrite your files to use proper formatting. NOTE: running this command will overwrite your file, so make sure you have saved your work before you run it.

The second way to run Prettier is using the Prettier extension, and format-on-save. If you install the recommended extensions and settings for this project, saving your file will result in Prettier automatically fixing your code for you.

## Debugging Code and Tests 

You can also use VSCode's built in debugging tools to run and debug your code,

or the test code, within the editor, step through code, inspect variables,

examine call stacks, etc. See the instructions at: https://github.com/microsoft/vscode-recipes/tree/master/debugging-jest-tests#debugging-all-tests 

## Submitting your Assignment

When you have completed your assignment, you need to prepare your submission. To do so, use the npm command:

```bash
npm run prepare-submission
```

You can upload the resulting **submission.zip** file to Blackboard for submission.
