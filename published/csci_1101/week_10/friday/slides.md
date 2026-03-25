---
layout: intro
theme: neversink
color: bowdoin
title: Sets
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
addons:
  - slidev-addon-excalidraw
---

## Sets <twemoji-backpack />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Creating a Set

:: content ::

## Sets can be created empty or with initial data
### When creating an empty set, you must use the `set()` function, not `{}`!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
empty: set[int] = set()
has_initial_data: set[str] = {"a", "c", "b", "z"}

print(f"The empty set: {empty}")
print(f"The set with data: {has_initial_data}")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Essential Set Methods

:: content ::

## The following methods perform all of the basic operations we need when working with sets such as adding and removing data

<br>

| Method        | Description                                                                 |
| :----------- | :------------------------------------------------------------------------- |
| `my_set.add(v)`   | Adds the given value `v` to `my_set` |
| `my_set.discard(v)`   | Removes the given value `v` from `my_set` |
| `my_set.remove(v)`   | Removes the given value `v` from `my_set`, causes an error if `v` is not in `my_set` |
| `my_set.pop()`   | Removes a random value from `my_set`, returns the removed value |
| `my_set.clear()`   | Removes all the values stored within `my_set` |

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Set Operations

:: content ::

## Sets also have their own unique behaviors called set operations!
### This category of operations are all performed between two sets:

<br>

## We will break down each of these operations by comparing their results using a Venn Diagram of the following two sets A and B:
<div class="flex flex-col items-center">
<Excalidraw
  drawFilePath="./sets.excalidraw"
  class="w-[400px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: top-title-two-cols
color: bowdoin-title
align: l-l-ct
---

:: title ::

# Set Union

:: left ::

# Union

### The union of twos sets is a new set which contains the unique elements from both sets!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
A: set[int] = {1, 2, 4, 8, 16}
B: set[int] = {1, 2, 3, 5, 8}

print("A | B:", A.union(B))
print("B | A:", B.union(A))
```

:: right ::
<div class="flex flex-col items-center">
<Excalidraw
  drawFilePath="./union.excalidraw"
  class="w-[350px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: top-title-two-cols
color: bowdoin-title
align: l-l-ct
---

:: title ::

# Set Intersection

:: left ::

# Intersection

### The intersection of twos sets is a new set which only contains the shared elements from both sets!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
A: set[int] = {1, 2, 4, 8, 16}
B: set[int] = {1, 2, 3, 5, 8}

print("A & B:", A.intersection(B))
print("B & A:", B.intersection(A))
```

:: right ::
<div class="flex flex-col items-center">
<Excalidraw
  drawFilePath="./intersection.excalidraw"
  class="w-[350px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: top-title-two-cols
color: bowdoin-title
align: l-l-ct
---

:: title ::

# Set Difference

:: left ::

# Difference

### The difference of twos sets is a new set which contains the elements in one set but not the other!

<br>

#### This operation is not commutative!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
A: set[int] = {1, 2, 4, 8, 16}
B: set[int] = {1, 2, 3, 5, 8}

print("A - B:", A.difference(B))
print("B - A:", B.difference(A))
```

:: right ::
<div class="flex flex-col items-center">
<Excalidraw
  drawFilePath="./difference.excalidraw"
  class="w-[350px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: top-title-two-cols
color: bowdoin-title
align: l-l-ct
---

:: title ::

# Set Symmetric Difference

:: left ::

# Symmetric Difference

### The symmetric difference of twos sets is a new set which contains only the unique elements from both!

<br>

#### You can also think about this as the difference between the union and intersection!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
A: set[int] = {1, 2, 4, 8, 16}
B: set[int] = {1, 2, 3, 5, 8}

print("A ^ B:", A.symmetric_difference(B))
print("B ^ A:", B.symmetric_difference(A))
```

:: right ::
<div class="flex flex-col items-center">
<Excalidraw
  drawFilePath="./symmetric_difference.excalidraw"
  class="w-[350px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: top-title-two-cols
color: bowdoin-title
align: l-l-ct
---

:: title ::

# Set Subset

:: left ::

# Subset

### A set is a subset of another if all of its elements are contained by the other set!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
A: set[int] = {1, 2, 4, 8, 16}
B: set[int] = {1, 2, 3, 5, 8}
C: set[int] = {1, 2, 3}

print("C <= A:", C.issubset(A))
print("C <= B:", C.issubset(B))
```

:: right ::
<div class="flex flex-col items-center">
<Excalidraw
  drawFilePath="./subset.excalidraw"
  class="w-[350px]"
  :darkMode="false"
  :background="false"
/>
</div>

---
layout: top-title-two-cols
color: bowdoin-title
align: l-l-ct
---

:: title ::

# Set Superset

:: left ::

# Superset

### A set is a superset of another if it contains all of the elements of another set!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
A: set[int] = {1, 2, 4, 8, 16}
B: set[int] = {1, 2, 3, 5, 8}
C: set[int] = {1, 2, 3}

print("A >= C:", A.issuperset(C))
print("B >= C:", B.issuperset(C))
```

:: right ::
<div class="flex flex-col items-center">
<Excalidraw
  drawFilePath="./subset.excalidraw"
  class="w-[350px]"
  :darkMode="false"
  :background="false"
/>
</div>
