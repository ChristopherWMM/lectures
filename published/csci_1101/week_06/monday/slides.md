---
layout: intro
theme: neversink
color: bowdoin
title: Introduction to While Loops
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Introduction to While Loops <twemoji-repeat-button />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: section
color: bowdoin
---

### Last week, we saw how ==for== loops can allow us to:
- #### Repeat instructions a set number of times
- #### Repeat instructions once for each piece of data in a collection

<br>

### This week, we will focus on ==while== loops and different behaviors we can accomplish now using nested loops

<twemoji-thinking-face v-drag="[874,421,88,88]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# While Loops

:: content ::

## While loops lend themselves to repeating a list of instructions an unknown number of times until a specified condition is met

### This means we know <u>when</u> to stop but not how many repetitions it will take..

<br>

### Their syntax is as follows:

```python {monaco} {editorOptions: {lineNumbers:'on', fontSize:18}}
while CONDITION:
  Code we want to repeat 'while' the condition is True
  ...
  UPDATE
```


- #### `CONDITION` can be any boolean expression, just like an if statement!
  The code inside the while loop will continue to execute until the condition evaluates to `False`
- #### `UPDATE` code to potentially change the condition's result
  ==Without changing the state of its condition, a while loop can run infinitely!==

---
layout: top-title
color: bowdoin-title
---

:: title ::

# While Loops - Infinite Repetition

:: content ::

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
import random

random.seed(42) # 'Seed' the random number generator so we get consistent random results

target = 3
number = random.randint(1, 10) # Generate a random number between 1 and 10
steps = 1

while number != target:          # Repeat 'while' we haven't generated our target number
  print(number, end=" ")         # Print the current number
  number = random.randint(1, 10) # Generate a new random number between 1 and 10
  steps = steps + 1              # Add 1 to the number of steps we have taken

print(target)
print(f"Randomly generated a {target} after {steps} guess(es)")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Keyboard Interrupt

:: content ::

# This will be the first time we can accidentally cause our code to run <u>forever</u> if we aren't careful!

<br>

## If that happens, what can we do?

### You can forcibly end your program by pressing `Ctrl` + `C` at the same time!

<br>

## You will see the following in your terminal if it worked correctly:

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
raise KeyboardInterrupt
```

<twemoji-repeat-button v-drag="[884,74,88,88]" />
<twemoji-face-screaming-in-fear v-drag="[821,133,88,88]" />

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# While vs For

:: left ::

# While
### Can do anything a for loop can!

<br>

#### Maybe just written out a little differently!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
my_list: list[int] = [1, 2, 3]

pos = 0
while pos < len(my_list):
  print(my_list[pos])
  pos = pos + 1
```

:: right ::

# For
### Can do anything a while loop can!

<br>

#### Maybe just written out a little differently!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
my_list: list[int] = [1, 2, 3]

for num in my_list:
  print(num)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# User Input

:: content ::

## We use while loops a lot when dealing with users and their input..
### Why? Because we have no idea what the user is going to try to do!

<br>
<br>

## We won't know in advance what they want to do, what they will enter, or how many tries it will take them to do what we want!

<br>

### As a result, we tend to use while loops more than for loops for user input because of this uncertainty, it also gives us a chance to force valid inputs!

<br>

### We let the user do whatever they want, but only allow them to continue on through the program once they have entered something we deem as valid!

<twemoji-zany-face v-drag="[876,123,88,88]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# User Input

:: content ::

# Let's look at an example:

```python {monaco} {editorOptions: {lineNumbers:'on', fontSize:18}}
str_number = input("Please enter an integer!")
invalid = True # Assume the input is bad to validate it

while invalid: # Loop 'while' the input is invalid 
  if str_number[0] in "+-" and str_number[1:].isdigit():
    invalid = False # The input was a valid +/- int!
  elif str_number.isdigit():
    invalid = False # The input was valid int!
  # Potentially more checks here ...
  else:
    # The input was invalid! Ask again and keep invalid True!
    str_number = input("Please enter a positive number!")

number = int(str_number) # Safely convert once we know it is valid!
```
