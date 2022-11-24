### Typescript

    TS is build on the base of JS so we need basic understanding of JS and ES concepts like variables, Arrays, Objects, functions, Arrow functions, Destructuring

## Agenda

1. What is Type Script and when and why to use this.
2. Then we will discuss setting up development environment.
3. Creating hello world program in TS
4. Configuring the TS Compiler
5. Debugging TS Application.


# What is TS?
    Typescript is a programming language created by Microsoft to address shortcomings of JS

    We can think away it like Brother or the sister of Javascript

# How it is different from JS?
    Javascript is like a kid without any discipline who does whatever he or she wants.

    Typescript on the other hand is like a kid with discipline

    Technically Ts is build on top of JS so every JS file is valid TS file.

# When do we need it?
    Typescript add some cool feature to JS that helps us to build more robust and maintainable applications in less time.

# Benefits

Static typing   -   Most Important

code completion

Refactoring

short hand notations   

# Types of Languages
    1. Statically Typed
    2. Dynamically Typed

# Statically Typed
    In this type of language like CPP, C#, JAVA we know the type of Variable at compile time or while coding.

    Eg - we can declare integer like this

    int age = 21; // now this variable can only held integer value nothing else.

    We cannot set it to any string or any other type of data.

 
# Dynamically Typed
In this type of languages like JS, Python, Ruby the type of variable is dynamic. So it is determine at runtime and it can also changed. 

so we can declare a variable and set it to a integer

let age = 21;

age = 'Twenty One';

This variable does not have a fix data type. And type is determined at runtime and may changed during execution.

This is great and provide a lot of flexibility but it also causes the problem.

# Problems it Causes

What if we passes this variable in to a function that expects a number then our application might misbehaves or crash. Problem is that we will not encounter this issue until we run our application or unit tests.

We need to test every function with various edge cases to find these bugs and this is a problem that TS try to solve.

Eg- 

Math.round(age);

Typescript is essentially Javascript with type checking.

With TS  set type at time of declaration just how we code in statically typed languages. then it passes the code to TS compiler and compiler inform us if we are doing some wrong so we catch a lot of our mistakes at compile time.

So if we declare a variable as number

let y :  number = 10;

we can't set it to string

number = 'x';  // will give error

TS compiler will give error at compile time and we easily get to know the reason.

TS is a more than just type checking. More code editor have a great support for TS so they can detect type of variables and our productivity boosting feature like code completion and refactoring.

Additionally TS Provides more features that gives us ability to write more cleaner and concise code.

Over the time these features can be added to JS but as we have various browsers and runtime environment for executing JS code it take some time until these features are implemented in various browsers.

We can do anything with TS that can be done with JS. like frontend and backend.


# Drawbacks

1. TS compilation step involves.
        At this time browser don't understand our TS code so we give our code to TS compiler and it gives us JS code.
        This process is called Transpilation.

2. We have to add more discipline while writing the TS code.

    TS - medium to large projects

    JS - simple projects