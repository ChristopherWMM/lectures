---
layout: intro
theme: neversink
color: bowdoin
title: Nested Lists
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Nested Lists <twemoji-nesting-dolls />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: section
color: bowdoin
---

### When we first talked about lists and tuples, we saw how we can store anything inside of them!

<br>

### Today, we are going to see how 'anything' even means other lists / tuples!

<twemoji-thinking-face v-drag="[874,421,88,88]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# 2D Lists

:: content ::

## We can store lists and tuples within other lists and tuples!

### When we do this, we say we are created 'nested' or multi-dimensional data!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
# To make them easier to understand, we try to space out the definition
grid = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"]
]

print(grid)       # We can use the entire structure
print(grid[1])    # Just one of the nested lists
print(grid[1][2]) # Or one element within one of the nested lists!
```

<twemoji-nesting-dolls v-drag="[813,437,69,69,-13]" />
<twemoji-thinking-face v-drag="[874,421,88,88]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Understanding a 2D List

:: content ::

## Sometimes, we will call the special case of a 2D list / tuple a matrix!
### We always access into a matrix first by row and then by column!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
grid = [
# Column:
#   0    1    2    Row:
  ["A", "B", "C"], # 0
  ["D", "E", "F"], # 1
]

print(grid)       # Access the entire grid
print(grid[1])    # Access row 1 of the grid
print(grid[1][2]) # Access column 2 of row 1 of the grid
```

<br>

#### Nested lists do not need to be square!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Building up a nested list

:: content ::

## Adding a list / tuple to a list will cause a nested list to be formed!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
my_list = ["a", "b", "c"]
my_number_list = [1, 2, 3]

my_list.append(my_number_list)

print(my_list)

print(len(my_list)) # len only counts the surface-level elements!
print(2 in my_list) # in only checks the surface-level elements!
```

<br>

#### Many of the operations we are familiar with only apply to the surface-level data!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# 3D.. 4D! Even 5D!

:: content ::

## There is no limitation to how deeply you can nest lists!
### However, we typically don't go above 2D or 3D very often..

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
grid = [
# Column:
#      0          1              2    Row:
  [[1, 2, 3], [4, 5, 6], [7, 8, 9, 0]], # 0
  [["A", "B", "C"], ["D", "E"], ["F"]], # 1
  [4.5, [3.2, 7.1], [[4.3, 5.6], 3.1]], # 2
]
```

<twemoji-nesting-dolls v-drag="[813,437,69,69,-13]" />
<twemoji-astonished-face v-drag="[874,421,88,88]" />
