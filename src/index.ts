interface Animal {
    move: (str: string) => string 
}

class Horse implements Animal {

    move (str: string) : string {
        return str;
    }
}

let horse1: Animal = new Horse();