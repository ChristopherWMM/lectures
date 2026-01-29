---
layout: intro
theme: neversink
color: bowdoin
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

# Special Strings and Input <twemoji-speech-balloon />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Quick recap - Text data

:: content ::

<br>

## Last class, we saw that the way we represent text data in our programs is using the `str` (string) data

<br>
<br>

## We also saw that many different applications that have a user interface of some kind rely very heavily on string data

<br>
<br>

## While individual characters are ==primitive==, it is more common that we combine them together to form words, sentences, or paragraphs

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Quick recap - String concatenation

:: content ::

<br>

## We also saw that we can use the `+` operator to ==concatenate== strings

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize: 15}}
fri = "Fri"
day = "day"

# We can join two strings together!
friday = fri + day

# And we can join many strings together!
today = "Today is " + friday + " and it is suppose to snow! ⛄"
# Note:          ^              ^
# We need to explicitly add spaces unlike when printing multiple things!

print(today)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Quick recap - String concatenation limitations

:: content ::

## We can only ==concatenate== strings with other strings

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize: 20}}
# It is not possible to 'add' strings and other types
answer = "The temperature is " + 31.5
```

<br>

## However, we can get around this with ==typecasting==!

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize: 20}}
answer = "The temperature is " + str(31.5)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Verbose string concatenation

:: content ::

<br>

## Remember that we use variables to make our programs dynamic!

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize: 14}}
name = "Chris"
month = 1
day = 31
weekday = "Friday"
temp = 31.5

message = "Hello, " + name + "! Today is "+ weekday + " " + str(month) + "/" + str(day) + ". It is currently " + str(temp) + " °F"

print(message)
```

<br>

#### It is important that we can integrate variables into text but, this pattern breaks down when we try to join too many variables together into one message using string concatenation..

---
layout: top-title
color: bowdoin-title
---

:: title ::

# f-strings

:: content ::

#### One alternative way we can achieve the same behavior is to use an `f-string`!

<br>

#### An `f-string` is a special type of string that accepts placeholders, we can embed expressions directly into them using `{}` (braces) without having to typecast!

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize: 15.5}}
name = "Chris"
month = 1
day = 31
weekday = "Friday"
temp = 31.5

# f-strings have an extra 'f' prefix before their quotes.
message = f"Hello, {name}! Today is {weekday} {month}/{day}. It is currently {temp} °F"

print(message)
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Escape sequences

:: content ::

#### Sometimes we find ourselves wanting to include invisible characters in our strings

<br>

#### Sadly, Python won't let us just type out things like newlines in our strings normally..

<br>

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize: 16}}
message = "This is on one line
This is on another"

# We can make special strings that allow us to do this though!
message = """This string is split across lines!
Wow! Look at that!"""
```

<br>

#### ==Escape sequences== are special character sequences that correspond to different invisible or other special characters.

<br>

#### Escape sequences are interpreted by the computer as the characters they represent!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Escape sequences

:: content ::

<br>

#### The most common escape sequence is `\n` which signifies a newline!

<br>

#### By including the text `\n` in a string, Python will replace it with a newline!

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize: 16}}
message = "This is on one line\nThis is on another"
print(message)
```

<br>

#### Other common escape sequences are `\t` for a tab character, `\"` or `\'` for their respective quote characters, and `\\` for a single `\` character.

<br>

Wait, why do we need `\\` for one `\`?

<twemoji-thinking-face v-drag="[401,448,55,55]"/>

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The `input` function

:: content ::

<br>

### Up until now, all of the data our programs have relied on have been entered by us, the programmer, manually into our code.

<br>

### We can use the `input` function in order to bring outside data into our programs!

<br>

```python {monaco} {editorOptions: {lineNumbers:'on', fontSize:20}}
name = input("What is your name? ")
# Note the space here!          ^

print("Hello, " + name + "!")
```

<br>

### The value we provide the `input` function is the prompt that is shown to the user in the terminal.

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Typecasting input

:: content ::

<br>

### Remember, the input entered by a user is going to be `returned` as `str` data.

<br>

### You may need to convert the data before you can properly use it!

<br>

```python {monaco} {editorOptions: {lineNumbers:'on', fontSize:20}}
name = input("What is your name? ")
age = int(input("How old are you? "))

print("Hello, " + name + ", how does it feel to be" + str(age) + "?")
```

<br>

### Notice that you may have to convert the value back when you need to display it!

<twemoji-thinking-face v-drag="[401,448,55,55]"/>

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Accessing parts of strings

:: content ::

<br>

#### We can access individual pieces of data inside a string using the `[]` (brackets)

<br>


| C | h | r | i | s |
| - | - | - | - | - |
| 0 | 1 | 2 | 3 | 4 |

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:20}}
name = "Chris"

print(name[0], name[1], name[2], name[3], name[4])
```
