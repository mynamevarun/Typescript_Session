### Primitive Data Types

# Number
Digits of large number can be separated by underscore.

In Ts we always not needed to add type annotation because TS compiler can easily detect the type of variable based on their value.

let sales: number = 123_23_23;

let sales = 123_23_23

# Any Type
    Represents any type of data
    If we declare a variable but don't initialize it. TS Assumes it as any type. 
    We can changes its value at any point of time in code,
    Its not much useful as we use Ts due to its type safety.so if we use this any type we lose the major feature of TS.

    function render(document) {
        console.log(document)
    }

    We get a compiler error saying that variable has implicitly any type.
    Implicitly means here we have not defined type for this so compiler is guessing its type as any.
    If we want to use this type of method to handle any type of data then to resolve this error we can annotate this with any. 
    But what if there are a lot of functions of this type we are not going to annotate all of them so the easy solution is but we do not recommend to use this way.

    Here in tsconfig file there is strict: true and under this we have noImplicitAny enable it and set it to false.