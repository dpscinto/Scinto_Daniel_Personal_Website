// JavaScript source code

<script>
    function palindrome() {
        var str = document.getElementById('palStr').value;
        console.log("The string entered is: "+str);
        str = str.toLowerCase().replace(/[^az]+/g,"");
        if (str === str.split("").reverse().join("")) {
            document.getElementById("result").innerHTML = "This is a palindrome !!!";
        }
        else{
            document.getElementById("result").innerHTML = "This is NOT a palindrome. Try something else!";
        }
    }
</script>