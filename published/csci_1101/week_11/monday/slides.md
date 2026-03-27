---
layout: intro
theme: neversink
color: bowdoin
title: Dictionaries
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
addons:
  - slidev-addon-excalidraw
---

## Dictionaries <twemoji-open-book />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Creating a Dictionary

:: content ::

## Dictionaries can be created empty or with initial data using `{}`
### Pairs in a dictionary are formed by separating the key and value with a colon

<br>

## For example: `key: value`
### Where `key` and `value` can be anything! Even other data structures!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
empty: dict = {}
has_initial_data: dict[str, int] = {"A": 9, "B": 3, "C": 1}

print(f"The empty dict: {empty}")
print(f"The dict with data: {has_initial_data}")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Creating a Dictionary

:: content ::

## To make longer pairs more easily visible, we will sometimes split up the initialization of the dictionary across multiple lines like so:

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
has_initial_data: dict[str, int] = {
  "A": 9,
  "B": 3,
  "C": 1
}

print(f"The dict with data: {has_initial_data}")
```

<br>

## Note that this doesn't change the way it is stored/printed!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Essential Dictionary Methods

:: content ::

## The following methods do <u>most</u> of the basic operations we need!

| Method        | Description                                                                 |
| :----------- | :------------------------------------------------------------------------- |
| `my_dict.get(k)`   | Returns the value associated with the key `k` if it exists in `my_dict`, returns `None` or an optionally specified default value otherwise |
| `my_dict.keys()`   | Returns a list containing all of the keys from each pair in `my_dict` |
| `my_dict.values()`   | Returns a list containing all of the values from each pair in `my_dict` |
| `my_dict.items()`   | Returns a list containing all of the pairs in `my_dict` |
| `my_dict.pop(k)`   | Removes the pair with the specified key `k` from `my_dict`, returns the removed value associated with the key `k` but causes an error if `k` is not in `my_dict` |
| `my_dict.clear()`   | Removes all the pairs stored within `my_dict` |

---
layout: section
color: bowdoin
---

## What essential behaviors are missing?

<twemoji-thinking-face v-drag="[860,399,88,88]"  />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Adding and Modifying pairs

:: content ::

## Adding and modifying pairs in a dictionary are done using the `[]`!
### If the specified key isn't already in the dictionary, you add it with the provided value; otherwise, you change its value!

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:12}}
grades: dict[str, int] = {"A": 9, "B": 3, "C": 1}

print("Before:", grades)

# The key "D" isn't already in grades so this adds the pair "D": 2
grades["D"] = 2

# The key "A" is already in grades so this changes the pair "A": 9 to "A": 7
grades["A"] = 7

# You can also modify a pair's value like any other variable!
grades["B"] += 2

print("After: ", grades)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Looping through Dictionaries

:: content ::

## We can customize which aspects of the dictionary we loop through!

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
grades: dict[str, int] = {"A": 9, "B": 3, "C": 1}

print("for key in grades", end=": ")
for key in grades: # Implicitly calls .keys()
  print(key, end=" ")
print("\n")

print("for key in grades.keys()", end=": ")
for key in grades.keys():
  print(key, end=" ")
print("\n")

print("for value in grades.values()", end=": ")
for value in grades.values():
  print(value, end=" ")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Looping through Dictionaries

:: content ::

## The `items()` method allows us to access the pairs themselves!

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
grades: dict[str, int] = {"A": 9, "B": 3, "C": 1}

print("for item in grades.items()", end=": ")
for item in grades.items():
  # 'item' is a tuple so you can access the key at item[0] and the value at item[1]
  print(item, end=" ")
print("\n")

print("for key, value in grades.items():")
for key, value in grades.items(): # You can 'destructure' the item tuple!
  print(f"Key: {key}, Value: {value}") # This makes printing super customizable!
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `in` Operator

:: content ::

## Using the `in` operator on a dictionary only checks their keys!

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
grades: dict[str, int] = {"A": 9, "B": 3, "C": 1}

print("The grade A is in the dictionary:", "A" in grades)
print("The number 1 is in the dictionary:", 1 in grades)

print("\n")

# We can use in on the list of values!
print("The number 1 is in the dictionary:", 1 in grades.values())
```

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Accessing with `[]` vs `get`

:: left ::

## Accessing with the `[]` operator

### `[]` allows us to get the value associated with a key if it exists!
#### Fails if the key doesn't exist!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:12}}
grades: dict[str, int] = {
  "A": 9,
  "B": 3,
  "C": 1
}

print("Number of A's:", grades["A"]) # ✅ Works!
print("Number of E's:", grades["E"]) # ❌ Crashes!
```

:: right ::

## Accessing with the `get` method

### `get()` allows us to get the value associated with a key if it exists!

#### Returns `None` if the key doesn't exist!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:12}}
grades: dict[str, int] = {
  "A": 9,
  "B": 3,
  "C": 1
}

# With no default value
print("Number of E's:", grades.get("E"))

# With a default value of 0
print("Number of E's:", grades.get("E", 0))
```
