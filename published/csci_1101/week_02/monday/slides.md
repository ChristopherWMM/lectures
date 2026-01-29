---
layout: cover
theme: neversink
color: bowdoin
download: true
routerMode: hash
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Functions

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Repeated problems

:: content ::

#### As we program, we may find ourselves rewriting the same code over and over again.

<br>

For example, say we were writing a calculation program to help us check some of our math homework.

<br>

Using the quadratic equation:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

<br>

1. Find the solutions for the equation $x^2 + 5x + 6 = 0$.

2. Find the solutions for the equation $2x^2 - 3x + 1 = 0$.

3. Find the solutions for the equation $x^2 + 4x + 5 = 0$.


---
layout: top-title
color: bowdoin-title
---

:: title ::

# Implementing a solution

:: content ::

#### We could implement our program like so:

```python {monaco-run} {editorOptions: { lineNumbers:'on'}}
# Try different numbers to see what happens!
a = 1
b = 5
c = 6

b_squared = b ** 2
four_a_c = 4 * a * c
two_a = a * 2

solution_1 = (-b + (b_squared - four_a_c) ** 0.5) / two_a
solution_2 = (-b - (b_squared - four_a_c) ** 0.5) / two_a
print("The solutions are", solution_1, "and", solution_2)
```

<twemoji-smirking-face v-drag="[787,403,96,89]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# The issue...

:: content ::

#### This would work but we need to duplicate all of this code for each problem...

```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on'}}
a = 1
b = 5
c = 6

b_squared = b ** 2
four_a_c = 4 * a * c
two_a = a * 2

solution_1 = (-b + (b_squared - four_a_c) ** 0.5) / two_a
solution_2 = (-b - (b_squared - four_a_c) ** 0.5) / two_a

a = 2
b = -3
c = 1

b_squared = b ** 2
four_a_c = 4 * a * c
two_a = a * 2

solution_1 = (-b + (b_squared - four_a_c) ** 0.5) / two_a
solution_2 = (-b - (b_squared - four_a_c) ** 0.5) / two_a

a = 1
b = 4
c = 5

b_squared = b ** 2
four_a_c = 4 * a * c
two_a = a * 2

solution_1 = (-b + (b_squared - four_a_c) ** 0.5) / two_a
solution_2 = (-b - (b_squared - four_a_c) ** 0.5) / two_a
```

<twemoji-fearful-face v-drag="[787,403,96,89]" />

---
layout: section
color: bowdoin
---

### This will get *really* annoying...

<br>

### It would be so much easier if we could define a new 'word' in our programming language that means "Solve the quadratic equation of an equation with these coefficients"!

<twemoji-angry-face v-drag="[787,403,96,89]" />

---
layout: top-title
color: bowdoin-title
---

:: title ::

# A solution!

:: content ::

#### ==Functions== allow us to do just that! We can create our own 'mini-programs' with their own names, inputs, and outputs and execute them using those names we decide!

<br>

To create a function, we use the `def` keyword followed by the function name (follows the same rules as variable names), and a set of parentheses.

Within the parenthesis, we can create variables that the mini-program expects as inputs - these are called parameters.

Finally, we write a colon `:` to signify the start of the function's 'body'.

Everything we want to be a part of the functions definition must be ==indented== over by one level.

```python
def my_function(a):
    # Code within my_function
    # More code within my_function

# Code outside of my_function
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Returning

:: content ::

#### Functions can perform any action and can ==evaluate== to their result.

<br>

To have a function evaulate to it's final result, we can use a `return` statement.

However, once again we can experience that same issue of the computer doing exactly what we tell it. This code only *defines* the function, it never says to execute it!

```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on'}}
def my_function(a):
    return a * 2
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Function call

:: content ::

#### To execute a function, we must use its name followed by a set of parentheses.

<br>

We must ensure we provide an ==argument== for each of the parameters the function is expecting.

However, if we do so, the "function call" becomes an expression we can reuse in our code!

```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on'}}
def my_function(a):
    return a * 2

print(my_function(5))
print(my_function(2.4))
```

---
layout: top-title
color: bowdoin-title
---

:: title ::

# Quadratic Function

:: content ::

#### Let's use this information to create two new `quadratic` functions!

```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on'}}
# Our process for solving a quadratic equation needs the coefficients! We need a, b, and c to be inputs.
def quadratic_plus_solution(a, b, c):
    b_squared = b ** 2
    four_a_c = 4 * a * c
    two_a = a * 2

    return (-b + (b_squared - four_a_c) ** 0.5) / two_a

def quadratic_minus_solution(a, b, c):
    b_squared = b ** 2
    four_a_c = 4 * a * c
    two_a = a * 2

    return (-b - (b_squared - four_a_c) ** 0.5) / two_a

print("The solutions are", quadratic_plus_solution(1, 5, 6), "and", quadratic_minus_solution(1, 5, 6))
print("The solutions are", quadratic_plus_solution(2, -3, 1), "and", quadratic_minus_solution(2, -3, 1))
print("The solutions are", quadratic_plus_solution(1, 4, 5), "and", quadratic_minus_solution(1, 4, 5))
```

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Function Documentation

:: left ::

#### While we tend to use regular comments to provide extra explanation about _why_ we are doing something in our code

<br>

#### We will use ==function docstrings== to describe in detail _what_:
- #### a function does
- #### a function accepts as parameters
- #### a function returns

:: right ::

```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on', fontSize:12}}
def quadratic_plus_solution(a, b, c):
  '''
  Computes the positive solution to a quadratic
  equation in the following form:
    a*x^2 + b * x + c
  '''
  b_squared = b ** 2
  four_a_c = 4 * a * c
  two_a = a * 2

  return (-b + (b_squared - four_a_c) ** 0.5) / two_a
```

<twemoji-thinking-face v-drag="[787,403,96,89]" />

---
layout: top-title-two-cols
color: bowdoin-title
---

:: title ::

# Printing within a function vs Returning

:: left ::

```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on', fontSize:11}}
def returns(local_a):
    '''
    This function returns double whatever is given.
    '''
    return 2 * local_a

a = 5

returns(a)

print(returns(a))
```

:: right ::
```python {monaco-run} {autorun:false, editorOptions: { lineNumbers:'on', fontSize:11}}
def prints(local_a):
    '''
    This function prints double whatever is given
    to the terminal.
    '''
    print(2 * local_a)

a = 5

prints(a)

print(prints(a))
```

:: default ::

<v-drag pos="198,355,589,32"><h2>It is extremely important that we understand the difference between these two!</h2></v-drag>
