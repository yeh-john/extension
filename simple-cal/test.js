document.getElementById("calc").addEventListener("click", function () {
        // Get id
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        var oper = document.getElementById("operators").value;


        // Calculate addition
        if(oper == '+'){
        document.getElementById("result").value = n1+n2;
        }

        // Calculate subtraction
        if(oper == '−'){
        document.getElementById("result").value = n1-n2;
        }

        // Calculate multiplication
        if(oper == '÷'){
            document.getElementById("result").value = n1/n2;
        }

        // Calculate division
        if(oper == 'x'){
            document.getElementById("result").value = n1*n2;
        }
}, false);
  