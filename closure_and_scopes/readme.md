### Scopes and closures

------------

###### scopes
- scopes are context where de code is exectuted
- while var is function scoped, let and const are block scoped
- an scope is defined wherther the block {} has variables inside, if it doen't have variables, JS does not create a new scope
- we can shadow variables with scopes, it means we can have the same named variables either in children scopes
- when we shadow var , take in count than a let can be shadowed if there is a var outside, but we cannot shadow a var if there is a let ouside scope

------------

###### hoisting
- hoisting is the captability for variables, object and functions, to be used before they are declared
- we can use functions and var before they are already declared, but we cannot use let or const before they are declared

------------

- 
POLP and POLE are principles that says , that variables should be accessed just since the scope they are needed, and should be used and modified just in the block they are spected to be used

------------


##### closures
closure is the captability for a function to use the scope they were created in outside other scope(to remember the variables they were initialized with)
- to mantain a closure alive, there must be a reference to that closure or function
even if a function has closure properties, if there is no a link, JS does not use it and delete the closure that was created

------------
###### patterns
- closure can be use while an reference to it is still alive
- another way to do to this is with IIFE, which acts like singletons, it means that once an instance is created, all references point to that only instance,( no other instance is created)
- module pattern is almost the same,it is also singleton.