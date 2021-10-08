##### SOLID PRINCIPLES
- Single responsability
	- refers to the principal tha a class or a function should just do one thing, and what it is suppossed to do, not to have unexpected or extra functionality within
- Open for extension and close for modification
	- refers to the principal that a class should not be modified unless it is neccesary, instead we should always extend that class, if we see that is neccesary add properties that were not needed at the beggining
- Liskov substitution 
	- it means that every subclass or child should be substitute by its base or parent class
- interface Segregation Principle
	- it means that instances should not have funcionality that they will not use, so we should create interfaces just with the funcionality we will use, and instead, not to share interfaces 
- Dependency inversion
	- tells us that only child or low-level modules must depend on parents but, parents should not depend on childs both of them should depend on abstraction

------------

#### design Patterns

------------

##### Creational patterns
###### Builder
this pattern tell us that we should just create a base instance, and the others that inherite this class should all of them have complex funcionality and different behavior
###### Factory
this pattern helps us to create interfaces without expossing functionality, it means each child class will have the same name functions but do different actions according to them
###### Prototype
prototype patterns allows us to create objects from other already created and manipulate its funcionality apart from the one that we copy
###### Singleton
singleton patterns allows us to create only one instance form the object, and every time we create a new instance, just return us the first object that we created

------------

##### Structural patterns
###### Adapter
helps  us to join two incompatible classes into functions so that they can interact beetwen them
###### Bridge
this pattern allows us to create an interface that connect to classes, and can intercat with them without modifying the pattern classes
###### Composite
this pattern tells that every child class from the base class should have the same functionality than the parent, like in binary trees, all childs acts exact the same as the parent
###### Decorator
this pattern allows as to add properties or funcionality without neccesarly inherit or modifying the class, instead we have the base class as a property and then add other properties that we need
###### Facade
this pattern hides all complex functionality just providing simple functions to the consumer
###### Flyweight
flyewwight use existing objects to store memory, so that the new class can reduce memory ussage improving perfomance

------------

##### Behavioral Patterns
###### command
this patterns pretends to have a base class, which we can invoke, so the class internally invokes the corresponent class function
###### Interpreter
acts like a compiling program, each part has a lexical convertions then a parsing convertion
###### Iterator
this patterns pretends, that when it's possible or useful, instead of unique properties, use an array of properties so that the processing becomes easier
###### Memento
this patterns allows us to save previus status of the object, so that we can rollback to a previus status.
###### observer 
it pretends to mantain comunication beetwen objects, so when they have dependency, and an event is fired, they mantain updated with these changes