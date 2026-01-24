---
layout: intro
theme: neversink
color: bowdoin
routerMode: hash
title: Python vs Java
favicon: https://avatars.githubusercontent.com/u/9260792
---

## Python vs Java
Procedural Programming

<br>

<hr><br>

Christopher Martin - _Bowdoin College_ <a href="https://bowdoin.edu/" class="ns-c-iconlink"><mdi-open-in-new /></a>

<twemoji-hot-beverage v-drag="[498,314,181,181]" />
<twemoji-snake v-drag="[788,328,148,148]" />
<twemoji-crossed-swords v-drag="[683,337,116,116,8]" />

---
layout: two-cols-header
---

# Basic Program Setup

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
class Main {
  void main() {
    IO.println("Hello Java!");

    int x = 5;
    int y = 7;
    String message = "%d + %d = %d%n";
    IO.println(message.formatted(x, y, x + y));

    IO.println("pi is " + Math.PI);
  }
}
//
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
import math

def main():
  print("Hello Python!")

  x = 5
  y = 7
  print(f"{x} + {y} = {x + y}")

  print("pi is " + str(math.pi))

if __name__ == "__main__":
    main()
```

---
layout: two-cols-header
---

# Variable declaration and initialization

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
class Main {
  void main() {
    int x = 5;
    double y = 5.3;
    boolean z = true;
    String s = "Hello!";

    String message = "%d %f %b %s";

    IO.println(message.formatted(x, y, z, s));
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:18}}
x: int = 5
y: float = 5.3
z: bool = True
s: str = "Hello"

print(x, y, z, s)
#
#
#
```

---
layout: two-cols-header
---

# Arithmetic Operators

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
class Main {
  void main() {
    double x = 10.2;
    double y = 5.3;

    IO.println("+ " + (x + y));
    IO.println("- " + (x - y));
    IO.println("* " + (x * y));
    IO.println("/ " + (x / y));
    IO.println("% " + (x % y));
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
x = 10.2
y = 5.3

print("+", x + y)
print("-", x - y)
print("*", x * y)
print("/", x / y)
print("%", x % y)
print("//", x // y) # Not an operator in Java
print("**", x ** y) # Not an operator in Java
#
#
```

---
layout: two-cols-header
---

# Relational Operators

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:11}}
class Main {
  void main() {
    double x = 10.2;
    double y = 5.3;

    IO.println(x + " <= " + y + " is " + (x <= y));
    IO.println(x + " < " + y + " is " + (x < y));
    IO.println(x + " > " + y + " is " + (x > y));
    IO.println(x + " >= " + y + " is " + (x >= y));
    IO.println(x + " == " + y + " is " + (x == y));
    IO.println(x + " != " + y + " is " + (x != y));
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
x = 10.2
y = 5.3

print(x, "<=", y, "is", x <= y)
print(x, "<", y, "is", x < y)
print(x, ">", y, "is", x > y)
print(x, ">=", y, "is", x >= y)
print(x, "==", y, "is", x == y)
print(x, "!=", y, "is", x != y)
#
```

---
layout: two-cols-header
---

# Logical (Boolean) Operators

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:11}}
class Main {
  void main() {
    boolean a = true;
    boolean b = false;

    IO.println("!" + b + " is " + (!b));
    IO.println(a + " && " + b + " is " + (a && b));
    IO.println(a + " || " + b + " is " + (a || b));
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
a = True
b = False

print("not", b, "is", not b)
print(a, "and", b, "is", a and b)
print(a, "or", b, "is", a or b)
#
```

---
layout: two-cols-header
---

# Conditional Statements

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
class Main {
  void main() {
    int x = 3;
    
    if (x < 5) {
      IO.println(x + " is less than 5!");
    } else if (x >= 5 && x <= 10) {
      IO.println(x + " is between 5 and 10!");
    } else {
      IO.println(x + " is more than 10!");
    }
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:17}}
x = 3

if x < 5:
  print(x, "is less than 10!")
elif 5 <= x <= 10:
  print(x, "is between 5 and 10!")
else:
  print(x, "is more than 10!")
#
#
```

---
layout: two-cols-header
---

# While Loops

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
import java.util.Random;

class Main {
  void main() {
    Random random = new Random();
    int roll = random.nextInt(6) + 1;
    int target = 3;
    
    while (roll != target) {
        IO.println(roll + " wasn't our target!");
        roll = random.nextInt(6) + 1;
    }

    IO.println(target + " rolled!");
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:17}}
import random
roll = random.randint(1, 6)
target = 3

while roll != target:
  print(roll, "wasn't our target!")
  roll = random.randint(1, 6)

print(target, "rolled!")
#
#
#
```

---
layout: two-cols-header
---

# Range-based For Loops

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
class Main {
  void main() {
    int target = 3;
    
    for (int i = 0; i < target; i++) {
      IO.print(i + " ");
    }
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
target = 3

for i in range(target):
  print(i, end=" ")
#
#
#
#
```

---
layout: two-cols-header
---

# Iterator For Loops

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
class Main {
  void main() {
    // An array (like a tuple!)
    int[] nums = {1, 2, 3, 4, 5};
    
    for (int i : nums) {
      IO.print(i + " ");
    }
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
nums = (1, 2, 3, 4, 5) # tuple!

for i in nums:
  print(i, end=" ")
#
#
#
#
#
```
