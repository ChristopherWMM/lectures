---
layout: intro
theme: neversink
color: bowdoin
title: Recursion
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Recursion <twemoji-repeat-button />

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>
<Email v="c.martin@bowdoin.edu" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Down the Rabbit Hole

:: content ::

# Recursion
### A problem-solving technique defined by breaking a problem down in terms of a simpler version of itself - viewed as a ==divide and conquer== approach

<br>

## This idea of making a problem self-referential can be a little
## mind-bending at times, we are going to work through this together!

<br>

## Recursion is most commonly encountered in math as what are called ==recurrence relations==, let's take a look at one:

<br>

$$
sum(n) = \left\{\begin{matrix}
n + sum(n - 1) & \text{if n} > 0. \\
0 & \text{if n} = 0. \\
\end{matrix}\right.
$$

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Recursive Code

:: content ::

## Recursion happens when a function <u>directly</u> or <u>indirectly</u> calls itself
### Wait.. calls itself? How would that work?

<br>

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
def f():
  print("Calling f!")
  f()

# f()
```

<br>

# What would this code output?

<br>

# How many functions are running?

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Cases

:: content ::

# In order for recursion to be useful, we need to have at least one ==recursive case== and one ==base case==

<br>

## Recursive case
### A recursive case is one where we need to recursively break the problem at hand down into a simpler version of itself in order to solve

<br>

#### Without a recursive case, your code just isn't recursive

<br>

## Base case
### A base case is one where the answer to the problem is immediately obvious so no recursion is necessary because no further work is required to solve it

<br>

#### Without a base case, the recursion will never stop!

---
layout: section
color: bowdoin
---

<div class="flex flex-col items-center">

![Winnie the Pooh](https://media1.tenor.com/m/TSCA5bze_SkAAAAC/recursion-w-innie-the-pooh.gif)

</div>

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Sum

:: content ::

## Let's revisit that `sum` recurrence relation from earlier:

<br>

$$
sum(n) = \left\{\begin{matrix}
n + sum(n - 1) & \text{if n} > 0. \\
0 & \text{if n} = 0. \\
\end{matrix}\right.
$$

<br>

## What is / are the base case(s)?

<br>

## What is / are the recursive case(s)?

<br>

## Is this a proper recursive function?

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Iteration vs Recursion

:: content ::

## Recursion allows us to repeat code like loops but in a different way
### Iteration and recursion are 'equal in power' meaning any problem can be solved using recursion or looping - however, some problems may lend themselves to being solved easier with loops or recursion

<br>
<br>

## As we move forward, I will try to highlight when you would want to use recursion over iteration but this won't become super important until much later in your Computer Science education

<br>

### Right now, the goal is to just ensure you understand this alternative exists and to showcase some of the situations where it can be helpful!

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Sum Implementations

:: left ::

# Recursive `sum`

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
def sum(n: int) -> int:
  if n > 0:
    return n + sum(n - 1)
  elif n == 0:
    return 0


# Try with different numbers!
print(sum(5))
```

<br>

# Trace the execution by hand
### Can you follow along with both?

:: right ::

# Iterative `sum`

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
def sum(n: int) -> int:
  sum = 0

  for i in range(1, n + 1):
    sum += i

  return sum

print(sum(5))
```
