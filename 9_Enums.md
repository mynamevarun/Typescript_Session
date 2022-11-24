# Enum

    Represent list of related constant

    Size of T-shirt

        const small = 1;
        const medium = 2;
        const large = 3;

    Use enum keyword to group same type of constants

        enum Size {
            Small,
            Medium,
            Large
        }

    We can set some values with it also.

        enum Size {
            Small = 1,
            Medium,
            Large
        }

    We can set string but then we have to set values for all.

        enum Size {
            Small = 'S',
            Medium = 'M',
            Large = 'L'
        }

    Now declare variable like

        let mySize: Size = Size.Medium;

    Compile it to see the corresponding JS code.

    If we define enum as constant compiler will generate more optimized code.
    
    We just have variable.