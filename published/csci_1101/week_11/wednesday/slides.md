---
layout: intro
theme: neversink
color: bowdoin
title: Handling Errors
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Handling Errors <twemoji-warning />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Error!!

:: content ::

## As you are probably _intimately_ familiar, our code can have errors..
### Grappling with the machine to understand these errors and diagnosing what causes them is an essential part of  programming

<br>

### Today, we will be discussing different types of errors, how we can interpret them, and how we can recover from them instead of crashing!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
x = 1
y = 0
z = x / y
```

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Errors vs Exceptions

:: left ::

## Errors

### 'Fatal' issues that prevent our code from executing at all - mostly typos

<br>

#### These occur when the syntax of your code is not valid Python

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
print("Hello world"
```

:: right ::

## Exceptions

### Avoidable issues that occur when our code executes - our mistakes

<br>

#### These occur when the syntax of your code is correct but the logic is invalid!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
int("hello")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Traceback

:: content ::

## Python tries to help us understand the issues caused by our code
### These error messages called ==tracebacks== tell us what happened and where

<br>

### Sometimes, these don't tell us exactly what the root issue is and instead just show us a symptom of a bigger issue, that is up to you to decipher!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
grades: dict[str, int] = {"A": 9, "B": 6, "C": 2, "d": 1, "F": 0}

print(grades["D"])
```

---
layout: section
color: bowdoin
---

## There are a lot of different exceptions but most are pretty self-explanatory

<br>

### We are going to cover the most common ones that I will expect you to be able to recognize

<twemoji-warning v-drag="[765,385,83,83,-8]" />

<twemoji-fearful-face v-drag="[866,415,83,83,13]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# NameError

:: content ::

### NameErrors occur when attempting  to use <u>something</u> that doesn't exist!

<br>

### Something here usually refers to variable names and function names
#### These are usually due to typos!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
my_num = 5

print(m_num)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# AttributeError

:: content ::

### AttributeErrors occur when attempting to use an invalid variable <u>attribute</u>

<br>

### Attributes here usually refers to method names

#### These are usually due to typos or an improper understanding of method names!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
my_list: list[int] = [1, 2, 3]

my_list.add(4)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# IndexError

:: content ::

### IndexErrors occur when attempting to access an invalid numeric position

<br>

### These are usually due to improper bound checking on lists, tuples, or strings

#### Does not apply to range-based slicing!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
my_list: list[int] = [1, 2, 3]

print(my_list[2:100]) # ✅ Fine!

print(my_list[100])   # ❌ Exception!
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# KeyError

:: content ::

### KeyErrors occur when attempting to access a nonexistent item in an unordered data structure (sets and dictionaries)

<br>

### These are usually due to improperly assuming an item is in a data structure

#### Sets and dictionaries both have workarounds!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
commands: set[str] = {"register", "login", "quit"}

commands.discard("save") # ✅ Fine!

commands.remove("save")  # ❌ Exception!
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# TypeError

:: content ::

### TypeErrors occur when attempting to perform an operation with a type not supported by that operation

<br>

### These are usually due to an improper understanding of a variables type or the assumptions made by the given operation

#### Usually fixed by typecasting

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
"High" + 5
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# ValueError

:: content ::

### ValueErrors occur when attempting to perform an operation with an invalid value of a proper type not supported by that operation

<br>

### These are usually due to an improper understanding of the assumptions made by the given operation

#### Usually requires an intermediate step to ensure a value is valid

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
int("hello")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# ZeroDivisionError

:: content ::

### ZeroDivisionErrors occur when attempting divide by zero

<br>

### These are usually due to an improper checking to ensure a value is not zero

#### Usually requires an intermediate step to ensure a value is valid

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
zero = 0

5 / zero  # ❌ Exception!
4 % zero  # ❌ Exception!
3 // zero # ❌ Exception!
```

---
layout: section
color: bowdoin
---

## Phew, that was a lot!
### You're telling me there are even more?!

<br>

## Unfortunately, yes..
### Luckily, those are the only ones I expect you to know

<twemoji-warning v-drag="[765,385,83,83,-8]" />

<twemoji-fearful-face v-drag="[866,415,83,83,13]" />

---
layout: section
color: bowdoin
---

## Now, let's talk about how we can prevent these exceptions from crashing our programs even if they do occur!

<twemoji-warning v-drag="[765,385,83,83,-8]" />

<twemoji-smirking-face v-drag="[866,415,83,83,13]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Try Except

:: content ::

## A `try except` block allows us to safely try to execute some code if we know an exception may happen in advance

### If the exception does happen, we start executing the except block instead!

<br>

### Their syntax is as follows:

```python {monaco} {editorOptions: {lineNumbers:'on', fontSize:18}}
try:
  Code we want to execute that may cause an exception
  ...
except EXCEPTION_TYPE:
  Code we want to execute instead of crashing
  ...
```

- #### `EXCEPTION_TYPE` can be any type of exception!
  The code inside the except will run instead of crashing your program, once it is complete your program will continue executing like normal!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Try Except

:: content ::

# Here is an example of how we can use them!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
# Try changing the numbers!
x = 5
y = 0

try:
  print(f"{x} / {y} = {x / y}")
except ZeroDivisionError:
  print(f"{x} / {y} is undefined!")

print("\nThanks for using the program!")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Try Except

:: content ::

# You can add multiple excepts if multiple exceptions can occur!

<br>

```python {monaco} {editorOptions: {lineNumbers:'on', fontSize:16}}
try:
  x = float(input("Enter a value for x: "))
  y = float(input("Enter a value for y: "))
  print(f"{x} / {y} = {x / y}")
except ValueError:
  print("That isn't a valid number!")
except ZeroDivisionError:
  print(f"{x} / {y} is undefined!")

print("\nThanks for using the program!")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Raising Exceptions

:: content ::

# You can choose to manually 'raise' any type of exception!

<br>

## This is done to inform other developers that they are using your code incorrectly

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
raise KeyError("This is the message that will show up in the traceback!")
```

<br>

### Typically, we use this when our functions don't have something valid to return for given arguments

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Raising Exceptions

:: content ::

# Here is an example:

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
def sum(n: int) -> int:
  if n < 0:
    raise ValueError("n cannot be negative!")

  return (n * (n + 1)) / 2

print(sum(5))
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Try Except Finally

:: content ::

### We can add a `finally` clause to a `try except` block to ensure code runs even if none of the excepts match

<br>

#### The finally code will run if an anticipated exception, unanticipated exception, or no exception occurs!

<br>

### The syntax is as follows:

```python {monaco} {editorOptions: {lineNumbers:'on', fontSize:14}}
try:
  Code we want to execute that may cause an exception
  ...
except EXCEPTION_TYPE:
  Code we want to execute instead of crashing
  ...
finally:
  Code we want to execute if an exception happens or not
  ...
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Try Except Finally

:: content ::

# Here is an example of using a finally clause!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
x = 5
y = 2

try:
  print(f"{x} / {y} = {x / y}")
except ZeroDivisionError:
  print(f"{x} / {y} is undefined!")
finally:
  print("Exitting the try-except!")

print("\nThanks for using the program!")
```
