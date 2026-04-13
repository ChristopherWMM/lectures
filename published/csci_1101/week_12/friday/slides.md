---
layout: intro
theme: neversink
color: bowdoin
title: Formatting with f-strings
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Formatting with f-strings <twemoji-thread />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Formatting with f-strings

:: content ::

## In addition to being able to insert values into strings, f-strings are able to apply special formatting rules to those values too!

<br>

## This allows them to change the way values are represented
### This doesn't change their value, just controls how they appear visually

<br>

## For example, we can control the way numbers are displayed
### Adding a `:` after a value lets you specify additional formatting parameters

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
# '.#' controls how many points of precision are shown, .2 means 2 decimal places
# 'f' means show the value in 'fixed-point' notation
# 'e' means show the value in 'scientific' notation
print(f"{100} vs {100:.2f} vs {100:.1e}")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Width and Justification

:: content ::

## Width controls how much space is reserved in the string for a value
### Establishes a minimum amount of space reserved for a value, but has no effect on values with a string representation that is longer than the set width

<br>

## Justification controls where a value is placed within that space
### They can be placed on the left `<`, in the middle `^`, or on the right `>`

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
first_name = "Chris"
last_name = "Martin"

# Try changing the width and justification! What are the defaults?
print(f"|{first_name:<10}|{last_name:<10}|")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Fill

:: content ::

## You can also control the character that fills the extra spaces reserved by a formatted width before the justification!

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
first_name = "Chris"
last_name = "Martin"

# Try modifying the width, justification, and fill!
print(f"|{first_name:.<10}|{last_name:.<10}|")
print(f"|{first_name:=^10}|{last_name:=^10}|")
print(f"|{first_name:*>10}|{last_name:*>10}|")
```

---
layout: iframe
url: https://docs.python.org/3/library/string.html#formatspec
---
