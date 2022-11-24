# Interfaces

An interface describes the shape of an object in TypeScript. 

They can be used to provide information about object property names and the data types their values can hold to the TypeScript compiler.

    interface Dimension {
        width: string;
        height: string;
    } 

    let imageDim: Dimension = {
        width: "200px",
        height: "300px"
    };

    interface User {
        id: number;
        firstName: string;
        lastName: string;
        getFullName(): string;
    }

    const user: User = {
        id: 12,
        firstName: "Josh",
        lastName: "",
        getFullName: () => `${firstName} ${lastName}`
    };

# Interface with class

    interface Size {
        width : string,
        height: string,
        getWidth(): string; 
    }

    class Shapes implements Size {
        width: string;
        height: string;
        constructor (width:string, height:string) {
            this.width = width;
            this.height = height;
        }

        getWidth() {
            return this.width;
        }
    }