# Functions

    function calculateTax(income: number){}

Function with return type

    function calculateTax(income:number) : number {}

We can make parameters optional or can given default values

If we make parameter optional we have to check if it have valid value or not. 

    function calculateTax(income:number, taxYear?: number) : number {
        if ( taxYear || 2022 < 2022) {
            return income * 0.2;
        } 
        return income * 0.4;
    }

    calculateTax(10,000, 2023);
    calculateTax(10000);

Solution is to have default value for it.

    function calculateTax(income:number, taxYear = 2022) : number {
        if (taxYear < 2022) {
            return income * 0.2;
        } 
        return income * 0.4;
    }

    calculateTax(10,000);
    calculateTax(10,000, 2023);