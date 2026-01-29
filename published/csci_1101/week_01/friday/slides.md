---
layout: cover
theme: neversink
color: bowdoin
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Expressions, Variables, and Printing

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Computers follow instructions to the letter

:: content ::

<br>

Computers are really _frustratingly_ good at following our instructions **EXACTLY**.  

They will do only what we specifically tell them to do - **nothing more**, **nothing less**.  

<br>

This means that when we communicate with a computer, we have to be especially mindful about what we are asking them to do and in what order we ask them to do it.  

<br>

This is - without a doubt - going to be the one aspect of programming you struggle with the most.  

Go slow, take your time, and really try to plan out what you are actually "saying".

---
layout: side-title
titlewidth: is-2
align: cm-lm
color: bowdoin-title
---

:: title ::

# Instructions

:: content ::

There are two different kind of instructions we can issue to the computer.  

<br>

==Expressions== are instructions that are evaluated (like in math) to produce a value or answer. Anything that evaluates to a value is considered an expression. (Even a single value!)  

<br>

==Statements== are instructions that are executed to perform an action or task.

---
layout: side-title
titlewidth: is-2
align: cm-lm
color: bowdoin-title
---

:: title ::

# Arithmetic Operators

:: content ::

One thing that computers are especially good at is _math_.  

Some of the most fundamental things we ask computers to do is to perform simple arithmetic using the ==operators== we are familiar with.

| Human Operator    | Python Symbol | Example       |
| ----------------- | ------------- | ------------- |
| Addition          | `+`           | `5 + 5` = 10  |
| Subtraction       | `-`           | `2 - 7` = -5  |
| Multiplication    | `*`           | `3 * 4` = 12  |
| Division          | `/`           | `5 / 2` = 2.5 |
| Integer Quotient  | `//`          | `5 // 2` = 2  |
| Integer Remainder | `%`           | `5 % 2` = 1   |
| Exponentiation    | `**`          | `2 ** 3` = 8  |

---
layout: side-title
titlewidth: is-3
align: cm-lm
color: bowdoin-title
---

:: title ::

# Arithmetic Expressions

:: content ::

We can chain these operators together to create whatever ==expressions== we want! They can be as complex or as simple as you would imagine.  

These ==arithmetic expressions== follow the standard order of operations.  

For example:  

`5 + 5 * 2` = 15  
`(5 + 5) * 2` = 20

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Variables

:: content ::

==Expressions== allow us to perform calculations but we usually want to store/save the results of those calculations.  

Additionally, we may want to use placeholders in our expressions to represent where outside data might make the results of our expressions _vary_.  

<br>

==Variables== allow us to define containers that store values within them.

We can define a variable by specifying it's name to be followed by an `=` and an expression.  

`temperature = 74`, `name = "Chris"`  

`answer = 5 + 3 / 2`

<br>

All variables need their own unique name in Python and names are case-sensitive.

The variable `y` and `Y` are different!

---
layout: side-title
titlewidth: is-2
align: cm-lm
color: bowdoin-title
---

:: title ::

# Variable Naming Rules

:: content ::

<u>All Python variable names must follow these rules:</u>

- All variable names must begin with a letter or underscore
- Variable names can only contain letters, numbers, and underscores

<br>

<u>Let's look at some examples:</u>
- `hello`, `_hello`, `hello_world` ✅
- `hello world` ❌ Variable names cannot contain spaces
- `Student1`, `student_1`, `first_student` ✅
- `1_student` ❌ Variable names cannot start with a number
- `student#1` ❌ Variable names cannot contain #'s

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The need to output

:: content ::

Having to "think like a computer" gets a little annoying..  

<br>

For example, suppose we wanted the computer to calculate something. To you and me, it is part of the assumed context that - if I ask you to calculate something for me - I also want you to tell me the answer.

<br>

However, computers don't understand any type of context.  

When we want the computer to do something **AND** tell us the result, we need to explicitly tell them that!  

<br>

```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on'}}
5 + 5 # Produces no output?
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `print` Statement

:: content ::

A very common way we visualize the results of a program is using `print()` ==statements==.

<br>

The `print()` statement allows us to tell the computer to output a line of text to the terminal.

<br>

Let's see how adding a `print()` statement makes a difference:

```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on'}}
print(5 + 5) # Tells the computer to "Calculate 5 + 5 and then print the result"
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Printing Expressions

:: content ::

<br>

A `print()` statement takes in zero or more expressions separated by a comma in its `()` and displays them as text in the terminal. Remember that an ==expression== is anything that evaluates to a ==value==.

Try changing the statements below to see how it changes the results:

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
print(5 + 5)
print("Hello world!")

answer = 7 - 2
print("The answer is", answer)

print("It is currently", 64, "degrees outside!")
```

