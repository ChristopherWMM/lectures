---
layout: intro
theme: neversink
color: bowdoin
title: Slices and String Methods
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Slices and String Methods <twemoji-scissors />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Recall we can access parts of strings

:: content ::

<br>

#### We can access individual pieces of data inside a string using the `[]` (brackets)

<br>

#### Remember, we start counting from 0!

<br>


|  C  |  h  |  r  |  i  |  s  |
| :-: | :-: | :-: | :-: | :-: |
|  0  |  1  |  2  |  3  |  4  |

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:20}}
name = "Chris"

print(name[0], name[1], name[2], name[3], name[4])
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Slices

:: content ::

#### We can access multiple pieces of data inside a string using the `[]` (brackets) like so:

<br>

#### `my_str[start:stop]` where `start` is inclusive and `stop` is exclusive!

- #### `start` defaults to 0 if it is not provided!

- #### `stop` defaults to the length of the string if it is not provided!

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
name = "Christopher Martin"

print(name[5:9])
print(name[:5])
print(name[12:])
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# More Advanced Slices

:: content ::

#### The indices we use when slicing can be positive or negative
- Indices that are positive are relative to the start of the String
- Indices that are negative are relative to the end of the String

|  C  |  h  |  r  |  i  |  s  |  t  |  o  |  p  |  h  |  e  |  r  |    |  M  |  a  |  r  |  t  |  i  |  n  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
|  -18  |  -17  |  -16  |  -15  |  -14  |  -13  |  -12  |  -11  |  -10  |  -9  | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:12}}
name = "Christopher Martin"

print(name[-6:]) # Try to isolate everything but the first and last character!
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# More String behaviors

:: content ::

#### As we discussed, Strings have methods that let us inspect and modify their data!

| Method        | Description                                                                 |
| :-----------: | --------------------------------------------------------------------------- |
| `my_str.lower()`   | Returns `my_str` with all alphabetic characters in lowercase |
| `my_str.upper()`   | Returns `my_str` with all alphabetic characters in uppercase |
| `my_str.count(sub_str)`| Returns the number of times the specified `sub_str` occurs in `my_str` |
| `my_str.index(sub_str)`  | Returns the `int` position as an index of the **first** occurance of the specified `sub_str` if it occurs anywhere in `my_str`, otherwise raises a `ValueError` |
| `my_str.rindex(sub_str)`  | Returns the `int` position as an index of the **last** occurance of the specified `sub_str` if it occurs anywhere in `my_str`, otherwise raises a `ValueError` |

<twemoji-thinking-face v-drag="[878,418,90,90,6]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Even more String behaviors!

:: content ::

## The ==methods== mentioned today and those discussed last week only represent a small selection of the possible String methods

### Strings have about `50` different methods they can execute by default!

<br>

## Of these, there are many with different, more specific capabilities
### We will see some of them later, but most won't be required for you to know

<br>
<br>

# You can accomplish anything you'd need with slicing and the methods we have discussed in our slides!

<twemoji-face-with-spiral-eyes v-drag="[878,418,90,90,6]" />
