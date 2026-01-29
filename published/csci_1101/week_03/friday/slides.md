---
layout: intro
theme: neversink
color: bowdoin
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

# Importing and Turtle

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />
<twemoji-framed-picture v-drag="[602,83,144,144]" />
<twemoji-turtle v-drag="[722,70,215,215]" />
<twemoji-artist-palette v-drag="[658,212,77,77]" />
<twemoji-paintbrush v-drag="[747,255,54,54]" />

---
layout: section
color: bowdoin
---

### In today's class, we are going to be taking a short break from the fundamentals of programming to explore something more fun and interactive!

<twemoji-star-struck v-drag="[830,397,90,90]" />

---
layout: section
color: bowdoin
---

### So far, our programs have been written in one file

<br>

### This is not super realistic as programs often consist of hundreds, thousands, and even <u>millions</u> of lines of code!

<twemoji-face-screaming-in-fear v-drag="[848,388,90,90,10]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Too much code!

:: content ::

<br>

## It would be almost impossible to maintain a codebase that big in one huge file, _especially_ if multiple people were working on it together!

<br>
<br>

## It makes it very difficult to share / reuse code since we would need to constantly copy-paste it into every new project we have!

<br>
<br>
<br>
<br>

## To fix these issues, we need a way to split our programs up across multiple files and somehow reference them in one another!

<twemoji-angry-face v-drag="[861,288,90,90]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# `import` Statements

:: content ::

<br>

# `import` statements allow us to tell Python to include code from other files in our code when we execute our programs!

<br>

### With them, you can split your own programs into multiple, more focused, files and it allows you to reuse those files by referencing them in future programs as a ==library==.

<br>
<br>

## Additionally, you can also use ==libraries== written by other people!

<br>

### Python is actually _very_ good at this and it is why it is so commonly used in web development, data science, AI, and so many other areas!

---
layout: top-title
color: bowdoin-title
---

:: title ::

# `import` Statements in Action

:: content ::

#### We can reference things from these external files by ==qualifying== them with the name of the file (without `.py`) followed by a period and the thing we want to access.

```python {monaco-run} {autorun:true, editorOptions: { lineNumbers:'on', fontSize:14}}
# Here we ask Python to 'include' the built-in math library.
import math # We don't add a ".py" here!

print(f"e is equal to {math.e}")

degrees: float = 270.0
print(f"{degrees}° in radians is {math.radians(degrees) / math.pi}π")

a: int = 30
b: int = 20
print(f"The gcd of {a} and {b} is {math.gcd(a, b)}")
print(f"The lcm of {a} and {b} is {math.lcm(a, b)}")
```

---
layout: section
color: bowdoin
---

# Now, let's look at the `turtle` library!

<br>

### Turtle is a built-in graphics library that allows us to draw things to the screen!

<twemoji-framed-picture v-drag="[611,314,144,144]" />
<twemoji-turtle v-drag="[738,287,215,215]" />
<twemoji-artist-palette v-drag="[686,450,77,77]" />
<twemoji-paintbrush v-drag="[768,475,54,54]" />
