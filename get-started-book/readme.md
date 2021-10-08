### Notes from the You don't know JS yet Notes from the You don't know JS yet

------------


important notes
- Js is a compiled language, it's formatted into an AST, which then is compiled into binary
- IC39 every year defines what will be part of the next ECMA version. The idea of adding new things and evaluate them, is not to brak the web(i.e. adding new functions with names that are already in use with old packages)

------------

###### Data Types in javaScript
JS accept two types of values
- Primitives, which could be numbers, strings, and booleand
- Objects, which could be arrays, objects or functions
- there is a thrid type Symbol, but is not commonly seen

------------

###### Variable Declaration
we have three types of declarations, var, let and const, the difference is the scope 
var is global scope
let and const are block scope,
const cannot be reasigned but the value is not immutable(i.e. we can change values inside an object but not reasign it)
###### coercion
coercion is the captability of javaScript to turn a variable to a different type
when we compare two variables, we use == or == , while == use coercion to compare, === does not allow coercion, that's why it's call strict comparision
in the case of objects of functions, JS just check the memory reference to compare, but no the content
###### closures
closure is the captability of functions to remember values outside an other scope
it is more useful with callbacks, which in most cases like http requests, can rememebr the initial values until whole functions inside where executed


------------

###### The This Object
the this object in JS, refers to the execution context, which can be dynamic
One way to use Dynamic "this" object  is to use a function isinde an object and then use the call function which defines this with the argument on tat context



