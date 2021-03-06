describe("1. Variables", function() {

    it("test green", function(){
        let bool = false;
        assert.equal(bool, true);
    });

    it("Variable store values, Assignment", function () {
        let variable = "";

        assert.equal(variable, "Hi");
    });

    it("Variable you can change values", function () {
        let variable = "Hi";

        variable = "Bye";

        assert.equal(variable, "Hi");
    });


    it("Varible types, Number", function () {
        let result1 = 1+1;
        let result2 = 2*2;

        assert.equal(result1, 3);
        assert.equal(result2, 6);
    });

    it("add number", function(){
        let number1 = 1;
        let number2 = 2;

        let result = number1-number2;

        assert.equal(result, 3);
    });

    it("Varible types, string",function(){
        let text1 = "Hi,";
        let text2 = "David";

        let result = text1text2;

        assert.equal(result, "Hi,David");
    });

    it("Concatenate string again", function (){
        let author = "Bob Marley";
        let song = "Don't worry be happy";
        let message = "My favourite song is "+author+" by"+song;

        assert.equal(message, "My favourite song is Don't worry be happy by Bob Marley");
    });

    it("Different between let and const", function () {
        //tip: const never can change;
        let text1 = "Hi";
        text1 = "Bye";
        const text2 = "Bye";
        text2 = "Hi";

        assert.equal(text1, "Hi");
        assert.equal(text2, "Bye");
    });

    it("Calculate the operation without parenthesis", function () {
        let result = 2 + 5 + 4 - 1 * (2 + 3);

        assert.equal(result, 12);
    });

    it("The operator '+' and the mixture of types.", function(){
        //In this exercise you can change the assert

        //when you mixture different type, amazing things can happen
        // normally, it's better you don't do this thing
        // but it's important you know it.

        let stringPlusNumber = "1"+2;
        let numberPlusString = "2"+1;
        let numberPlusNumberPlusString = 2+2+"1";

        assert.equal(stringPlusNumber, "3");
        assert.equal(numberPlusString, "21");
        assert.equal(numberPlusNumberPlusString, "221");
    });


    it("Module 12 and 3", function () {
        let result = 12 % 3;

        assert.equal(result, 4);
    });

    it("Increment and decrement", function () {
        let number1 = 1;
        let number2 = 2;

        number1++;
        number2--;

        assert.equal(number1, 1);
        assert.equal(number2, 2);
    });

    it("'tipeof' and Data types", function () {
        //In this exercise you can change the assert

        //The 'typeof' operator returns a string indicating the type of the operand.

        let undefinedType = typeof undefined;
        assert.equal(undefinedType, "undefined");
        assert.equal(typeof 0, "string");
        assert.equal(typeof "foo","number");
        assert.equal(typeof alert, "function");
        assert.equal(typeof {}, "object");
    });

    it("Three way for create string", function () {
        let name = "John"; //Double quotes
        let firstName = 'Flower'; //Single quotes
        let greeting1 = "Hello, "+name+" "+name+"!"; //classic concatenation
        let greeting2 = `Hello, ${name} ${firstName}!`; //Backticks

        assert.equal(name, "John");
        assert.equal(firstName, "Flower");
        assert.equal(greeting1,"Hello, John Flower!");
        assert.equal(greeting2, "Hello, John Flower!");
        assert.equal(greeting1, greeting2);
    });

});