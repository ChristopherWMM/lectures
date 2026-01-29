---
layout: cover
theme: neversink
color: bowdoin
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Data Types

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Types of Data

:: content ::

<br>

#### Data makes up every fundamental aspect of a program but not all data is the same.

#### Some forms of data are complex or ==composite== while others are more simple.

<br>

An example of this is an image.

In an image, each pixel is stored as three color values (red, green, and blue)<br> and the combination of all those three values makes up what we see.

The image itself is complex while the individual color values are simple.

<img src="/mario.webp" v-drag="[688,171,290,183]" />

<br>

#### Types of data that cannot be broken down any further are called ==primitive== types.

So far, we have seen some examples of simple data but there are many more types of data to come!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Primitive data

:: content ::

<br>

#### Computers store different kinds of primitive data in different ways, for example:

A whole number / integer, or just ==int== for short,  is stored as an ascending scale of values in binary:

- `0000` is `0`, `0001` is `1`, `0010` is `2`, `0011` is `3`, etc

A real number / floating-point value, or just ==float== for short, is stored in scientific notation.   
This goes outside the scope of our class but here is how `10.5` is stored:

- `0 10000010 01010000000000000000000`

<twemoji-thinking-face v-drag="[863,251,55,55]"/>
<twemoji-red-question-mark v-drag="[903,220,42,42,10]"/> 

Text / string data, or just ==str== for short, is stored in a similar way as `ints` but each binary arrangement corresponds to a character. These characters are then *strung* together to form sequences.

- `1000001` is `A`, `1000010` is `B`, `1000011` is `C`, etc

Some of you may note that it is the individual characters that are primitive, not the string itself!

#### Note: This means the `int` `5`, the `float` `5.0`, and the `str` `"5"` are all different!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `type` function

:: content ::

<br>

#### In Python, we can determine the type of a value using the `type()` function.

The `type()` function will `return` the data-type of whatever expression is provided to it.

<br>

#### Let's see some examples!

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
print(type(5))
print(type(1.5))
print(type("Hello!"))
```

For right now, we can ignore the `class` part of the output and focus on the right-hand section.  

#### In it, we see our familiar `int`, `float`, and `str`!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Types of Variables

:: content ::

<br>

#### Variables store the type of data they hold but also will update as their data changes:

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
answer = 5 + 5
print("answer's type is", type(answer), "with a value of", answer)

answer = 7.5 - 2.3
print("answer's type is", type(answer), "with a value of", answer)

answer = "I don't know"
print("answer's type is", type(answer), "with a value of", answer)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Expressions with Different Types

:: content ::

<br>

#### Sometimes, expressions involve multiple types!

When this happens, the result will usually be the *"larger"* of the types.  

This ensures that, if you end up outside the range of the *"smaller"* type, you will still get a valid answer.

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
# Try changing the values and operation to see if the type of 'answer' changes.
# 7.5 is a float and 2 is an int
answer = 7.5 - 2
print("answer's type is", type(answer), "with a value of", answer)
```

`int` is considered *"smaller"* than `float` because it can't store as many unique values.

Due to this,  we will always get a `float` when evaluating an arithmetic operation that mixes the two.

---
layout: side-title
titlewidth: is-2
align: cm-lm
color: bowdoin-title
---

:: title ::

# Division

:: content ::

#### The division breaks this rule slightly.

<twemoji-grinning-face-with-sweat v-drag="[881,39,55,55]"/>

<br>

Whenever we use the `/` operator, we will always get back a `float` result.

This happens even if the two operands are `int`.

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
answer = 4 / 2
print("answer's type is", type(answer), "with a value of", answer)
```

<br>

If you want the possibility of getting an `int`, you must use the `//` operator:

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
answer = 4 // 2 # Try with a float and an int!
print("answer's type is", type(answer), "with a value of", answer)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Different behavior for different things

:: content ::

<br>

#### Sometimes, we reuse the same operators for different types of data.

<br>

A simple example of this is how we can use the `+` operator on `str` data!

This *"joins"* or ==concatenates== the two strings together!

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
answer = "Mon" + "day"
print("answer's type is", type(answer), "with a value of", answer)
```

<br>

#### This is kind of similar in concept to what `+` does to numbers, but acts differently for a different type of data.

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Print vs Concatenation

:: content ::

<br>

#### Something important to note is that including multiple things in a `print` statement is not the same as `concatenating` them together.

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
mon = "Mon"
day = "day"

print(mon, day)  # "Mon" and "day" are still two independent strings.
print(mon + day) # "Mon" and "day" were joined together before being displayed.
```

<br>

#### Sometimes we prefer one approach over another; it depends on what our goal is.

Do you want to just display something on the same line?

Do you want to use the joined result multiple times?

<twemoji-thinking-face v-drag="[633,447,55,55]"/>

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Type incompatibilities

:: content ::

<br>

#### Sometimes, we run into a situation where we cannot perform the operation we want because some of the data is incompatible with the operation we want to perform:

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
# It is not possible to 'add' strings and other types
answer = "The temperature is " + 58.5
```

<br>

In these situations, we may need to ask the computer to convert a value from one type to another.

<br>

#### This is referred to as ==typecasting==!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Typecasting

:: content ::

<br>

#### To ==typecast== in Python, we *"call"* the name of the type we want to convert into as if it were a function. Then, we pass in what we want to convert.

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
print(type(str(5)))       # Converts the int value 5 into the string "5"
print(type(float("3.5"))) # Converts the string "3.5" into the float value 3.5
print(type(int(3.0)))     # Converts the float value 3.0 into the int value 3
```

<br>

This becomes especially important when data is coming into our program as text because the user is typing it in, it is being read from somewhere online, or if it is coming from a local file on the device.

In these cases, we will need to convert those input strings into their actual values in the correct types before we can use them!

---
layout: side-title
titlewidth: is-2
align: cm-lm
color: bowdoin-title
---

:: title ::

# Typecasting Limitations

:: content ::

#### Typecasting only works if the value you are trying to convert can be represented somehow as a value in the other type:

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on'}}
# The string value "Hello" cannot be represented as an int
int("Hello")
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Type Annotations

:: content ::

#### Python is a ==strongly==, ==dynamically== typed language.

<br>

#### This means that while variables track and maintain their contained data's types, those types can be changed by an explicit instruction asking the computer to do so.

This can lead to some confusion for both the computer and us as the programmers because we may never really know what is stored in a variable at any given time unless we check.

#### To help with this, we can use ==type annotations== to include *"comments"* about the data type variable stores when we create or update them.

<br>

```python {monaco-run} {editorOptions: { lineNumbers:'on'}}
age: int = 20
name: str = "Alice"

gpa: float = "Alice" # These aren't actually checked, they are just for documentation!
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Function Type Annotations

:: content ::

#### We can also include type annotates in function definitions to document what types their parameters are as well as what types they return - if any.

<br>

Similarly to variable type annotations, these are not actually checked by the computer - they are only used by programmers to document the expected behavior!

```python {monaco-run} {editorOptions: { lineNumbers:'on'}}
def distance(x1: float, y1: float, x2: float, y2: float) -> float:
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

def print_distance(x1: float, y1: float, x2: float, y2: float) -> None:
    print("The distance between (", x1, ",", y1, ") and (", x2, ",", y2, ") is", distance(x1, y1, x2, y2))

print_distance(1, 2, 5, 5)
```

<br>

#### From this point forward, I am going to use type annotations to better showcase our expected behaviors and to enable our editor to provide more accurate suggestions.
