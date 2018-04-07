# Sentimental Analysis 

## Objective 

Developing an application that can detect the sentiment of the user input and return whether it was positive, negative, or neutral

## Built With
* [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=adw-brand&gclid=EAIaIQobChMIzLK9o_Co2gIVVFmGCh01YgF0EAAYASAAEgIoavD_BwE)
* [Ubuntu](https://www.ubuntu.com)
* [Babel](https://babeljs.io)
* [Node.JS](https://nodejs.org/en/)
* [Hapi.JS](https://hapijs.com)
* [Python 2+](https://www.python.org/downloads/)
* [Natural Language Toolkit](https://www.nltk.org)
* [Postman](https://www.getpostman.com)
* [React.JS](https://reactjs.org)


## How to use
1. Change into the correct directory 

`cd sentilizer_api/`

2. Run a python command with the following syntax below inside a terminal:

`python src/vader.py -s <User input>`

## Test Cases/Examples

### Example 1
Input: `python src/vader.py -s <I am very happy>`

Output: `[('pos', 0.666), ('neu', 0.334), ('neg', 0.0)]`

### Example 2

Input: `python src/vader.py -s <I am very sad>`

Output: `[('neg', 0.629), ('neu', 0.371), ('pos', 0.0)]`

## Author 

[Christopher Kim](http://chriskimdev.com)

## Build Status

Functional and in progress