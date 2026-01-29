---
layout: intro
theme: neversink
color: bowdoin
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

### Logical Operators and Complex Conditions <twemoji-thinking-face />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: section
color: bowdoin
---

### Last class, we saw how we can instruct our computer to ask simple `True` or `False` questions about the state of our programs using the relational operators..

<br>

### But what if we want to ask more complex questions?

<twemoji-thinking-face v-drag="[830,397,90,90]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Logical Operators

:: content ::

<br>

## We can still only ask `True` or `False` questions, but we can combine them to investigate more complex scenarios!

<br>

| Human Operator | Python Symbol | Example Expression | Explanation |
|:-:| :----------------------: | :-----------: | :----------------: |
| And | `and`| `grade >= 80 and grade < 90` | All must be `True` |
| Or | `or` | `day == "T" or day == "Th"` | At least one must be `True` |
| Not | `not` | `not is_snowing` | ==Negates== (inverts) the question |

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Logical Operator in Action

:: content ::

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:16}}
today: str = "Wednesday"
class_cancelled: bool = False

time: int = 754 # Stores the current time in minutes (754 = 12:34pm)

is_class_time: bool = time >= 605 and time <= 690 # (605 = 10:05am, 690 = 11:30am)
is_class_day: bool = today == "Monday" or today == "Wednesday" or today == "Friday"

is_during_1101: bool = is_class_time and is_class_day and not class_cancelled

print(f"Today is {today} at {time // 60}:{time % 60}")
if is_during_1101:
    print("I should be in CSCI: 1101! 😀")
else:
    print("No CSCI: 1101! 😭")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Mutually Exclusive Situations

:: content ::

# Last class we saw how we can conditionally execute code...

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:16}}
temperature: float = 31.5

if temperature < 32.0:
    print("It is freezing! 🥶")
    print("Maybe it will snow! ⛄")
else:
    print("It is above freezing! 🌞")
    print("Maybe it will rain! ☔")
```

<br>

#### `If-else` statements work great for representing binary conditions (situations where there are two ==mutually exclusive== outcomes) but what if we need more?

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Mutually Exclusive Situations

:: content ::

### Let's look at a situation where we have three mutually exclusive outcomes!

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:13}}
temperature: float = 45.0

if temperature < 32.0:
    print("It's freezing! 🥶")
else:
    if temperature < 50.0:
        print("It's chilly. Bundle up! 🧥")
    else:
        print("It's warm and sunny! 😎")

# Or, we could do it like this?
if temperature < 32.0:
    print("It's freezing! 🥶")
if temperature >= 32.0 and temperature < 50.0:
    print("It's chilly. Bundle up! 🧥")
if temperature >= 50.0:
    print("It's warm and sunny! 😎")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `elif` Clause

:: content ::

<br>

#### The `elif` clause, short for "else if", lets you test additional backup conditions or other multiple mutually exclusive situations tied to a single `if` statement!

If no condition evaluates to `True`, then the `else` clause runs if there is one.

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:16}}
temperature: float = 45.0

if temperature < 32.0:
    print("It's freezing! 🥶")
elif temperature < 50.0:
    print("It's chilly. Bundle up! 🧥")
else:
    print("It's warm and sunny! 😎")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `elif` Clause in Action

:: content ::

### You can have as many `elif` clauses as needed!

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:15}}
score: float = 87.5

if score >= 90:
    print("You got an A!")
elif score >= 80:
    print("You got a B!")
elif score >= 70:
    print("You got a C!")
elif score >= 60:
    print("You got a D!")
else:
    print("You got an F!")
```

<br>

### Notice the order of the statements and how only one happened, it matters!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `elif` Clause - Statement Order

:: content ::

#### Python evaluates each condition in order until one is found to be `True`.

<br>

#### Only that condition's code will be executed - the rest will be skipped!

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:13}}
score: float = 87.5

# Ordering the statements wrong can result in incorrect behavior!
if score >= 60:
    print("You got a D!")
elif score >= 90:
    print("You got an A!")
elif score >= 70:
    print("You got a C!")
elif score >= 80:
    print("You got a B!")
else:
    print("You got an F!")
```

<twemoji-astonished-face v-drag="[851,86,90,90]" />
<twemoji-bug v-drag="[783,127,90,90]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `len()` Function

:: content ::

<br>

## The `len()` function returns the number of characters in a collection.

### We commonly use it to check how many characters there are in a string.

<br>

### This includes any letters, numbers, whitespace, and punctuation.

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:16}}
name: str = "Christopher"

length: int = len(name)

print(f"The string '{name}' has {length} characters.")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `in` Operator

:: content ::

## The `in` operator checks if a collection contains a specified element!

### We commonly use it to check if a string contains some other specified text.

<br>

### It evaluates to `True` if the value of the left-operand is contained within the right-operand. otherwise, it evaluates to `False`.

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:15}}
# Try with other words / sentences!
message: str = "Team"
substring: str = "i"

if substring in message:
    print(f"\"{message}\" contains \"{substring}\"!")
else:
    print(f"There is no \"{substring}\" in \"{message}\"!")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# More Questions we can ask about String data

:: content ::

#### Strings include many helpful tools called that can inspect and modify their data!

We will discuss these ==methods== more next week, but for right now let's look at some more of the additional ways we can ask questions about the contents of a string!


| Method        | Description                                                                 |
| :-----------: | --------------------------------------------------------------------------- |
| `my_str.islower()`   | Returns `True` if all letters in a given `my_str` are lowercase |
| `my_str.isupper()`   | Returns `True` if all letters in a given `my_str` are uppercase |
| `my_str.isdigit()`   | Returns `True` if all characters in a given `my_str` are digits |
| `my_str.startswith(sub_str)`| Returns `True` if a given `my_str` starts with the specified `sub_str` |
| `my_str.endswith(sub_str)`  | Returns `True` if a given `my_str` ends with the specified `sub_str`  |
