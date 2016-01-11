//start of 5 numbers

function getValues() {
    var a = parseInt(document.getElementById("num1").value, 10);
    var b = parseInt(document.getElementById("num2").value, 10);
    var c = parseInt(document.getElementById("num3").value, 10);
    var d = parseInt(document.getElementById("num4").value, 10);
    var e = parseInt(document.getElementById("num5").value, 10);
    var arr = [a, b, c, d, e]
    return arr;
}

function LowestNumber() {
    var arr = getValues();
    document.getElementById("answer").innerHTML = Math.min(arr[0], arr[1], arr[2], arr[3], arr[4]);
    }

function GreatestNumber() {
    var arr = getValues();
    document.getElementById("answer").innerHTML = Math.max(arr[0], arr[1], arr[2], arr[3], arr[4]);
    }

function findMean() {
    var arr = getValues();
    var mean = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]) / 5;
    document.getElementById("answer").innerHTML = mean;
    }

function findSum() {
    var arr = getValues();
    var sum = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
    document.getElementById("answer").innerHTML = sum;
    }

function findProduct(a, b, c, d, e) {
    var arr = getValues();
    var product = (arr[0] * arr[1] * arr[2] * arr[3] * arr[4]);
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
                for (var i = num; i > 1; i--) {
                    factorial *= i;
                }
                document.getElementById("facResult").innerHTML = factorial;
            }
        }

//end of factorial

//start of fizzbuzz

        function FizzBuzz() {
            var a = document.getElementById("fbnum1").value;
            var b = document.getElementById("fbnum2").value;
            var txt = "";

            for (var i = 1; i <= 100; i++) {
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
            document.getElementById("fbresult").innerHTML = txt;
        }

//end of fizzbuzz

//start of palindrome

        function palindrome() {
            var str = document.getElementById('palStr').value;
            str = str.replace(/\s/g, '');
            console.log(str + " and then " + str.split("").reverse().join(""))
            if (str === str.split("").reverse().join("")) {
                document.getElementById("palResult").innerHTML = "This is a palindrome !!!";
            }
            else {
                document.getElementById("palResult").innerHTML = "This is NOT a palindrome. Try something else!";
            }
        }

//end of palindrome