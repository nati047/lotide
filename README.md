# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @isaac047/lotide`

**Require it:**

`const _ = require('@isaac047/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts if two arrays are exact match
* `assertEqual`: checks if two given data are exact match  
* `assertObjectsEqual`: asserts if two objects are exact match
* `countLetters`: returns an object with count of each letter in  a string
* `countOnly`: returns an object with count of given item in  an object
* `eqArrays`: checks if two arrays are exact match
* `findKey`: finds a key that has a value equal to the return of a callback passed
* `findKeyByValue`: finds a key that has a value equal to a value passed 
* `head`: returns the first value of an array
* `letterPosition`: returns an object with letters in a string and their index 
* `map`: itterates through an array and returns an array of values that are returned from  a callback
* `middle`: returns the middle element of an array
* `tail`: returns an array of all but the first element of a given array 
* `takeUntil`: returns an array containing values of a given array until the item that is equal to return of a callback 
* `without`: returns an array without given values in a passed array