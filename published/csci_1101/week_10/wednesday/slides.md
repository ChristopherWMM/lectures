---
layout: intro
theme: neversink
color: bowdoin
title: Introduction to Data Structures
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Introduction to Data Structures <twemoji-globe-with-meridians />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Recap of Lists and Tuples

:: content ::

## Lists and Tuples are the first ==data structures== we saw in this class

### We call them data structures because they store data in a structured way!

- #### Lists are created by surrounding a comma separated sequence with brackets `[]`!
  Recall that lists can be modified!
- #### Tuples are created by surrounding a sequence with parentheses `()`!
  Recall that tuples cannot be modified!

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
numbers: list[int] = [1, 3, 3, 7]
letters: tuple[str] = ("a", "c", "b", "a", "z")

print(numbers)
print(letters)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Recall Lists and Tuple Ordering

:: content ::

## Lists and Tuples store things in an ordered fashion using indices!

### Because individual elements are positioned, they can also store duplicates!

<br>

|  [`1`,  |  `3`,  |  `3`,  |  `7`]  |   |   |   |  (`"a"`,  |  `"c"`,  |  `"b"`,  |  `"a"`,  |  `"z"`)  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :---: | :---: | :---: | :---: | :---: |
|  0  |  1  |  2  |  3  |   |   |   |   0   |   1   |   2   |   3   |  4  |

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
numbers: list[int] = [1, 3, 3, 7]
letters: tuple[str] = ("a", "c", "b", "a", "z")

print(numbers[0], numbers[1:], ": numbers has", len(numbers), "elements!")
print(letters[1], letters[2:], ": letters has", len(letters), "elements!")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Data Structure Traits

:: content ::

<br>

# There are three traits that differentiate data structures:
- ## Ordered / Semi-ordered / Unordered
  ### This trait determines how the data within the structure is maintained
- ## Mutable / Unchangeable / Immutable
  ### This trait determines if / how the data within the structure can be changed
- ## Supports Duplicates / Does not support Duplicates
  ### This trait determines if the structure is capable of storing duplicates

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Ordered / Semi-ordered / Unordered

:: content ::

# Determines how the data within the structure is maintained!

<br>

## This trait supports three different options:
- ### <twemoji-clipboard /> Ordered
  #### The data within the structure is strictly ordered in a consistent way
- ### <twemoji-spiral-notepad /> Semi-ordered
  #### Some of the data within the structure is strictly ordered in a consistent way, other aspects of the data may be inconsistent or change over time
- ### <twemoji-backpack /> Unordered
  #### The data within the structure is inconsistent / unreliable and changes over time

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Mutable / Unchangeable / Immutable

:: content ::

# Determines if the data within the structure can be changed

<br>

## This trait supports three different options:
- ### <twemoji-deciduous-tree /> Mutable
  #### Data can be added to, changed, or removed from the structure freely
- ### <twemoji-cactus /> Unchangeable
  #### Data can be added to or removed from the structure freely but cannot be changed while contained within the structure
- ### <twemoji-evergreen-tree /> Immutable
  #### The data within the structure is fixed after creation - new data cannot be added and existing data cannot be removed or modified

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Supports Duplicates / Does not support Duplicates

:: content ::

# Determines if the structure is capable of storing duplicates

<br>

## This trait supports two different options:
- ### <twemoji-busts-in-silhouette /> Supports Duplicates
  #### The structure can store exact copies of the same elements
- ### <twemoji-bust-in-silhouette /> Does not support Duplicates
  #### The structure is unable to store exact copies of the same elements

---
layout: section
color: bowdoin
---

# Let's see how these traits apply to the different data structures we will see in Python..

<twemoji-thinking-face v-drag="[780,373,88,88]" />

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Lists

:: left ::

# Lists
- ### Lists are ==ordered==
- ### Lists are ==mutable==
- ### Lists ==can store duplicates==

:: right ::

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
numbers: list[int] = [1, 2, 3, 4, 4]

# We can loop through a list
for number in numbers:
  print(number, end=" ")
print()

# We can access data at its position
print(numbers[2])

# We add, remove, and modify data
numbers.append(5)
numbers.pop(0)
numbers[2] = 10

print(numbers)
```

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Tuples

:: left ::

# Tuples
- ### Tuples are ==ordered==
- ### Tuples are ==immutable==
- ### Tuples ==can store duplicates==

:: right ::

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
letters: tuple[str] = ["A", "B", "C", "D", "D"]

# We can loop through a tuple
for letter in letters:
  print(letter, end=" ")
print()

# We can access data at its position
print(letters[2])

# We cannot add, remove, and modify data
# letter.append(5) # ❌ Uncomment for error
# letter.pop(0)    # ❌ Uncomment for error
# letter[2] = 10   # ❌ Uncomment for error

print(letter)
```

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Sets

:: left ::

# Sets
- ### Sets are ==unordered==
- ### Sets are ==unchangeable==
- ### Sets ==cannot store duplicates==

<br>

### Sets either contain something or not

<br>

### They do not store items in a consistent order but have many useful methods

:: right ::

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
decimals: set[float] = {1.0, 2.0, 3.0, 3.0}

# We can loop through a set
for decimal in decimals:
  print(decimal, end=" ")
print()

# We cannot access data at its position
# print(decimals[2]) # ❌ Uncomment for error

# We can add and remove but not modify data
decimals.add(5.0)
decimals.remove(1.0)
# decimals[2] = 10   # ❌ Uncomment for error

print(decimals)
```

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Dictionaries

:: left ::

# Dictionaries
- ### Dictionaries are ==semi-ordered==
- ### Dictionaries are ==mutable==
- ### Dictionaries ==cannot store== ==duplicates==

<br>

### Dictionaries actually store pairs of values, this makes them useful for correlating two pieces of data

<br>

#### Each pair is made up of a key and its value where keys must be unique

:: right ::

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
pairs: tuple[float] = {"a": 5, "b": 2}

# We can loop through a dictionary
for item in pairs:
  print(item, end=" ")
print()

# We can access a value using its key
print(pairs["a"])

# We add, remove, and modify data
pairs["c"] = 3
pairs.pop("b")
pairs["a"] = 1

print(pairs)
```
