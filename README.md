# Learn to Code JavaScript!

Brought to you by Galvanize. Learn more about the way we teach code at [galvanize.com](http://galvanize.com).

### Overview

In this course, we'll be going over the following!

- Basic syntax of JavaScript
- Variables and Functions
- Conditional statements (if, else if, else)
- Build a “Rock, Paper, Scissors” application

While not required, reviewing our [HTML & CSS](https://github.com/Doubleshot1122/Learn-to-Code-HTML_CSS_JS) course can help!

### Setting Up Your Computer

For this workshop, you need to have the following:

- Install a text editor! We recommend [Atom.io](http://atom.io)
- Have an updated web browser! We recommend [Google Chrome](http://chrome.google.com)

### What IS JavaScript?

Making its first appearance in 1995, JavaScript was created by an engineer at Netscape to provide a user-friendly, lightweight programming language that can be easily adapted for the rise of the Internet. Now, with HTML and CSS, it is one of the core languages of the Internet and is growing quickly to accommodate beyond the client-side.

JavaScript allows web pages to do more than just “sit there." You can animate, calculate, etc. - you can do it all!
It is a great programming bridge between “design” and “development” that allows for endless creativity.

Common confusion: JavaScript is **NOT** Java. They are largely different programming languages and should not be confused with one another.

### A Quick Mini-Tutorial

In order to go over some basic JavaScript concepts, let's follow a tutorial provided by the [JavaScript.com](http://chrome.google.com) team.

It's only 8 lessons and takes less than 5 minutes.

https://www.javascript.com/try

### Dive a Little Deeper

Let's review some of the basic syntax of JavaScript.

- `var` - defines a variable (an object of some value)
- `;` - terminator, commonly found at the end of a code operation
- `"word"` - quotes create strings, which are a form of data
- `function()` - performs some action or method
- `{}` - block notation, contains code that can be initialized by a function
- `.` - dot notation, allows for the chaining of variables and functions

JavaScript is an [Object-Oriented Language](https://en.wikipedia.org/wiki/Object-oriented_programming), a common paradigm of coding that occurs in many other languages and can help you learn them as well.

### Variables

Variables are essentially containers for storing data, values, etc.
In JavaScript, you must declare them with `var` first, then define them with `=`.

Syntax:

```
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
```

What is the value of `total`?

**Variables** can store a variety of data types:

- Strings - `“Hello, my name is Lee.”`
- Numbers - `40, 0.15`
- Boolean - `True` or `False`
- Null - literally nothing
- “” - undefined value
- Functions - here we go…!

#### Gut check!

What's the difference between `=`,`==`, and `===`? I see this all the time.


#####`=` is known as the  **assignment operator**
It sets variables equal to a specific value.
```javascript
var foo = 1
```
##### `==` is known as the **abstract equality comparison**
It compares two items to see if they are of equal value, but it ignores if they are the same exact _type_ of data.
```
“1” == 1 => True
Null == undefined => True
```
##### `===` is known as the **strict equality comparison**
It compares the value & type of the items to see if they are exactly the same. In the case of null vs undefined, null is more specifically typed than undefined, so they are not exactly the same value.
```
“1” === 1 => False
Null === undefined => False
```

### Functions

Functions are blocks of code that perform tasks for us.

In JavaScript, you follow the general syntax: 1) declare, 2) define, 3) call (invoke).

Syntax:
```javascript
var multiply = function(a,b){
return a * b
};
multiply(2,4);
```
~What is the value produced by this function?

###### More on the syntax of functions:
- **Parameters** - `(a,b,c)` - hypothetically what passes through the function
- **Arguments** - real values of the parameters the function affects
- **Block** - `{...}` - the function’s operational code
- **Return** command - the output of the function


### Conditional Statements

Remember [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) books?

Conditional statements work a lot like them and follow the basic format: *if*, *else*, *else if*...

###### If Statements

**if** - if what’s in the parameters is `True`, then a block of code will run.
If it’s `False`, the code will not run.

```javascript
if (hour < 18) {
	greeting = "Good day";
}
```
if statements by themselves default to `True`.


###### Else Statements

**else** - what if you wanted the code to do something else besides nothing if it’s False?

```javascript
if (hour < 18) {
	greeting = "Good day";
} else
	{ greeting = “Go away.”;
}
```

###### Else if Statements

**else if** - What if another scenario comes up?

Add an `else if` in between the `if` and `else` statements.
```javascript
if (hour < 18)
{greeting = "Good day";}
else if (hour < 9)
{greeting = “OK day”;}
else {greeting = “Go away.”;}
```
_This code is actually broken. Can you figure out why?_

##### Recap of Conditional Rules

- **If** statements perform an action if the statement is True
- **Else** statements perform an action if the statement is False
- **Else if** statements perform an action if the first is False but the second is True
_Is there any other way to do this?_


## LET'S CODE

Time for us to make our *Rock, Paper, Scissors* application!

1. Go to: https://github.com/Doubleshot1122/Learn-to-Code-HTML_CSS_JS-2
2. Download the zip file of our code
3. Open the files in your text editor
	* index.html
	* main.js
4. Open the index.html file in your web browser

#### 4 Steps To Building This App

1. Get the user's choice
2. Get the computer's choice
3. Teach the computer how to guess rock, paper, or scissors
4. Compare their choices and tell the user the result


###### 1. Get the user's choice

**Assign a `prompt` method to the variable `userChoice`:**
The ```prompt``` method gets input from the user, ```prompt``` has an optional message parameter which you can use to ask the user for a response.

```javascript
var userChoice = prompt("Do you choose rock, paper or scissors?");
```

This line creates a variable called ```userChoice``` to represent the users response.


###### 2. Get the computer's choice

Assign a `Math.random()` method to the variable `computerChoice`:

What is `Math` in JavaScript?

```Math.random()``` returns a random floating point number between 0 and 1.

```javascript
var computerChoice = Math.random();
```

Here we are setting a variable named ```computerChoice``` to the result of `Math.random()`.

Question: _How else can we get a random choice?_

###### 3. Teach the computer rock, paper, scissors.

This is our first conditional statement.

We change the value of ```computerChoice```
to either rock, paper, or scissors depending on what number the ```computerChoice```
variable gets set to when we run the program.

Computers don't speak English (well, not exactly), so we need to speak in a language they understand: numbers.

```javascript

if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
```

At this point the computer is ready to rumble with it's choice, and the user has made theirs.

###### 4. Compare the choices and tell the user of the result.
Here we're creating a function called ```compare```. The ```compare``` function takes two
arguments ```choice1``` and ```choice2```.

```javascript
var compare = function(userChoice, computerChoice) {
    if (userChoice  === computerChoice) {
        window.alert("The result is a tie!");
    } else if(userChoice === "rock") {
        if (computerChoice === "scissors") {
            window.alert("Rock wins!");
        } else {
            window.alert("Paper wins");
        }
    } else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            window.alert("paper wins!");
        } else {
            window.alert("scissors wins!");
        }
    } else if(userChoice === "scissors") {
        if (computerChoice === "rock") {
            window.alert("Rock wins");
        } else {
            window.alert("scissors wins");
        }
    }
};
```


###### 4.5 Calling the compare function
We're passing values of userChoice and computerChoice to run the equation.

The function is called when someone clicks the button via the ```onclick``` attribute!

```html
<button onclick="compare(userChoice, computerChoice);">LETS PLAY RPS!</button>
```

### Play around in the sandbox some more!

- "How can I make this congratulate me by name?"
- "How could I play this against another person?"
- "How could I choose R, P, or S without an alert box?"
- "How want to keep track of the wins and loses?"


## YOU DID IT, YOU'RE NOW A JAVASCRIPT CODER!

# Additional Training:
## Pay in person training at host location:
+ [<b>Galvanize</b> - Web Development Immersive](https://www.galvanize.com/seattle/web-development)
+ [<b>Galvanize</b> - Web Development Evenings](https://www.galvanize.com/seattle/web-development-101)
+ [<b>Galvanize</b> - Intro to Web Development Evenings](https://www.galvanize.com/seattle/web-development-foundations)

## Pay online training:
+ [<b>Udemy</b> - wait for 9.99$ sales](www.udemy.com)
+ [<b>Treehouse</b> - 25$ - 49$ per month](https://teamtreehouse.com)
+ [<b>Lynda.com</b> - 20$ - 30$ per month](https://www.lynda.com)

## Free online training:
+ [<b>Lynda.com</b> - with King Co library card](https://www.lynda.com/)
+ [<b>Coursera</b>](https://www.coursera.org/)
+ [<b>Khan Academy</b>](https://www.khanacademy.org)
+ [<b>Code Academy</b>](https://www.codecademy.com)

## Free Resources:
+ [<b>Mozilla developer docs</b>](https://developer.mozilla.org)
+ [<b>w3schools</b>](https://www.w3schools.com)

***

Thanks for attending.
