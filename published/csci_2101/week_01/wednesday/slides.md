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
// Uses // or /* */ for comments!

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
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
# Uses # or ''' ''' for comments!
# We can import from other libraries / files!
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

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:12}}
class Main {
  void main() {
    int x = 5;
    double y = 5.3;
    boolean z = true;
    String s = "Hello!";

    String message = "|%-5d|%-5.2f|%5b|%10s|";

    IO.println(message.formatted(x, y, z, s));
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
x: int = 5
y: float = 5.3
z: bool = True
s: str = "Hello!"

print(f"|{x:<5}|{y:<5.2f}|{z!s:>5}|{s:>10}|")
```


---
layout: two-cols-header
---

# Input

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco} {editorOptions: {lineNumbers:'on', fontSize:12}}
import java.util.Scanner;

class Main {
  void main() {
    String name = IO.readln("What is your name?");

    // or

    Scanner scan = new Scanner(System.in);
    name - scan.nextLine();
    
    IO.println("Welcome, " + name + "!")
  }
}
```

</div>


:: right ::

# Python

```python {monaco} {editorOptions: {lineNumbers:'on', fontSize:15}}
name: str = input("What is your name?")

print("Welcome, " + name + "!")
```


---
layout: two-cols-header
---

# Methods / Functions

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:12}}
class Main {
  public  static void a() { IO.println("Called a()"); }
  private static void b() { IO.println("Called b()"); }
  private static  int c() { return 5; }
  private static  int c(int d) { return d + 5; }

  void main() {
    a();
    b();
    IO.println(c());
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
# No accessibility modifiers!
# Everything is public!
def a() -> None:
  print("Called a()")

def b() -> None:
  print("Called b()")

# Functions cannot be overloaded!
# Add default arguments instead!
def c(d: int = 0) -> int:
  return d + 5

a()
b()
print(c())
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

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
x = 3

if x < 5:
  print(x, "is less than 10!")
elif x >= 5 and x <= 10: # 5 <= x <= 10
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
    int start = 1, maximum = 6, seed = 5;
    Random random = new Random(seed);
    int roll = random.nextInt(maximum) + start;
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

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:16}}
import random
start = 1
maximum = 6
seed = 5

random.seed(seed)
roll = random.randint(start, maximum)
target = 3

while roll != target:
  print(roll, "wasn't our target!")
  roll = random.randint(1, 6)

print(target, "rolled!")
```

---
layout: two-cols-header
---

# Range-based For Loops

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
class Main {
  void main() {
    int start = 0;
    int stop = 5;
    int step = 2;
    
    for (int i = start; i < stop; i += step) {
      IO.print(i + " ");
    }
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
start = 0
stop = 5
step = 2

# Can ommit start if you want to begin at 0!
# Can ommit step if you want to increment!
for i in range(start, stop, step):
  print(i, end=" ")
```

---
layout: two-cols-header
---

# Arrays vs Tuples

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:14}}
class Main {
  void main() {
    int[] array = {1, 1, 2, 3, 5, 7};

    IO.println(array.length);
    
    IO.println(array[3]);
    array[3] = 100;
    IO.println(array[3]);
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
array: tuple[int] = (1, 1, 2, 3, 5, 7)

print(len(array))

print(array[3])
# tuples cannot be modified!
# array[3] = 100

print(array[1:4])

print(array.index(3))
print(array.count(1))
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
nums: tuple[int] = (1, 2, 3, 4, 5)

for i in nums:
  print(i, end=" ")
```

---
layout: two-cols-header
---

# Lists

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
import java.util.ArrayList;

class Main {
  void main() {
    ArrayList<String> names = new ArrayList<>();
    names.add("Chris");
    names.add("Alan");
    names.add("Grace");

    IO.println(names.size());

    names.remove("Alan");
    names.remove(0);

    IO.println(names);
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
# Can create a list with initial data too!
names: list[str] = []
names.append("Chris")
names.append("Alan")
names.append("Grace")

print(len(names))

names.remove("Alan")
names.pop(0)

print(names)
```

---
layout: two-cols-header
---

# Sets

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
import java.util.HashSet;

class Main {
  void main() {
    HashSet<Integer> nums = new HashSet<>();
    nums.add(1);
    nums.add(2);
    nums.add(4);
    nums.add(2); // No duplicates!

    nums.remove(2);

    IO.println(nums.contains(5));
    IO.println(nums);
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
# Can create a set with initial data too!
nums: set[int] = set()
nums.add(1)
nums.add(2)
nums.add(4)
nums.add(2) # No duplicates!

nums.remove(2)

print(5 in nums)
print(nums)
```

---
layout: two-cols-header
---

# Maps / Dictionaries

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:13}}
import java.util.HashMap;

class Main {
  void main() {
    HashMap<String, Integer> fruit = new HashMap<>();
    fruit.put("Apple", 1);
    fruit.put("Lemon", 2);
    fruit.put("Strawberry", 3);

    fruit.remove("Lemon");
    fruit.put("Apple", 4);

    IO.println(fruit.containsKey("Banana"));
    IO.println(fruit.get("Apple"));
    IO.println(fruit);
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
# Can create a set with initial data too!
fruit: dict[str, int] = {}
fruit["Apple"] = 1
fruit["Lemon"] = 2
fruit["Strawberry"] = 3

fruit.pop("Lemon")
fruit["Apple"] = 4

print("Banana" in fruit)
print(fruit.get("Apple"))
print(fruit)
```

---
layout: two-cols-header
---

# Try-Catch

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:12}}
class Main {
  void main() {
    int a = 5;
    int b = 2;

    String message = "%d / %d = %d";
    String undefined = "%d / %d is undefined!";

    try {
      IO.println(message.formatted(a, b, a / b));
    } catch (ArithmeticException e) {
      IO.println(undefined.formatted(a, b));
    }
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
a: int = 5
b: int = 2

try:
  print(f"{a} / {b} = {a / b}")
except ZeroDivisionError:
  print(f"{a} / {b} is undefined!")
```

---
layout: two-cols-header
---

# Try-Catch

:: left ::

<div style='margin-right: 15px'>

# Java

```java {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:12}}
class Main {
  public static void throwsException() {
    throw new RuntimeException();
  }

  void main() {
    throwsException();
  }
}
```

</div>


:: right ::

# Python

```python {monaco-run} {editorOptions: {lineNumbers:'on', fontSize:15}}
def raisesException():
  raise RuntimeError

raisesException()
```