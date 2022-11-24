# Objects

In JS objects were dynamic so we are able to add new properties dynamically but in TS it is not allowed.

    let employee = {
        id: 1
    };

    employee.name = 'varun' // gives an error.

We can annotate it

    let employee: {
        id: number,
        name: string
    } = {
        id: 1           // if we not provide name then it will give an error.
    }                   // so set the empty string to name or make it as optional

As TS provide this but we should not use this optional.

Not going to use this optional feature here.

    let employee: {
        id: number,
        name: string
    } = {
        id: 1,
        name: 'Varun'
    } 

To make readonly 

    let employee: {
        readonly id: number, // we cannot modify its value.
        name: string
    } = {
        id: 1,
        name: 'Varun'
    } 

Define method in an object;

    let employee: {
        readonly id: number, // we cannot modify its value.
        name: string,
        retire: (date: Date) => void
    } = {
        id: 1,
       name: 'Varun',
        retire: (date: Date) {
            console.log(date);
        }
    } 

Better way to work with objects

Issue with it is We are not following DRY as we have to repeat the signature.

All instance do not have same signature

hard to read.