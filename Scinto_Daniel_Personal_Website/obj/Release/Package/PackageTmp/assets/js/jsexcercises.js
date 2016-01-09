//start of 5 numbers

function LowestNumber() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    var d = document.getElementById("num4").value;
    var e = document.getElementById("num5").value;
    document.getElementById("answer").innerHTML = Math.min(a, b, c, d, e);
}

function GreatestNumber() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    var d = document.getElementById("num4").value;
    var e = document.getElementById("num5").value;
    document.getElementById("answer").innerHTML = Math.max(a, b, c, d, e);
}

function findMean () {
    var a = +document.getElementById("num1").value;
    var b = +document.getElementById("num2").value;
    var c = +document.getElementById("num3").value;
    var d = +document.getElementById("num4").value;
    var e = +document.getElementById("num5").value;
    var mean = (a + b + c + d + e) / 5
    document.getElementById("answer").innerHTML = mean;
}

function findSum() {
    var a = +document.getElementById("num1").value;
    var b = +document.getElementById("num2").value;
    var c = +document.getElementById("num3").value;
    var d = +document.getElementById("num4").value;
    var e = +document.getElementById("num5").value;
    var sum = (a + b + c + d + e)
    document.getElementById("answer").innerHTML = sum;
}

function findProduct () {
    var a = +document.getElementById("num1").value;
    var b = +document.getElementById("num2").value;
    var c = +document.getElementById("num3").value;
    var d = +document.getElementById("num4").value;
    var e = +document.getElementById("num5").value;
    var product = (a * b * c * d * e)
    document.getElementById("answer").innerHTML = product;
}

//end of 5 numbers

//start of factorial

        function findFact() {
            var num = document.getElementById("num6").value;
            if (num < 0) {
                document.getElementById("facResult").innerHTML = "Please enter a positive number!";
            }
            else if (num === 0) {
                document.getElementById("facResult").innerHTML = "1";
            }
            else {
                var factorial = 1;
                for (i = num; i > 1; i--) {
                    factorial *= i;
                }
                document.getElementById("facResult").innerHTML = factorial;
            }
        }

//end of factorial

//start of fizzbuzz

        function FizzBuzz() {
            var a = document.getElementById("num1").value;
            var b = document.getElementById("num2").value;
            var obj = document.getElementById("fbresult");
            var txt = "";
            var i;

            for (i = 1; i <= 100; i++) {
                if (i % (a * b) === 0) {
                    txt += "FizzBuzz" + " ";
                }
                else if (i % a === 0) {
                    txt += "Fizz" + " ";
                }
                else if (i % b === 0) {
                    txt += "Buzz" + " ";
                }
                else {
                    txt += i + " ";
                }
            }
            obj.innerHTML = txt;
        }

//end of fizzbuzz

//start of palindrome

    function palindrome() {
        var str = document.getElementById('palStr').value;
        console.log("The string entered is: "+str);
        str = str.toLowerCase().replace(/[^az]+/g,"");
        if (str === str.split("").reverse().join("")) {
            document.getElementById("palResult").innerHTML = "This is a palindrome !!!";
        }
        else{
            document.getElementById("palResult").innerHTML = "This is NOT a palindrome. Try something else!";
        }
    }

//end of palindrome