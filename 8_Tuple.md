# Tuple

    What if want to define data like this.

        1, 'Varun'

    We have special syntax to do it.

    We define a variable 

        let tuple = [number, string] = [1, 'Varun'];     // fix length array. // need to follow order if order changed we get an error.

    It get converted into regular JS array.

    Tuple is like an array with fixed length.

    Here we have one problem with push method. so If i use tuple.push(1)

    Compiler is not going to give us an error. 

    Tuples are useful when we have two values like key value.