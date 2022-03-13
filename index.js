function add()
{
    // Calculate info
    const gas = document.getElementById("t1").value;
    const gwei = document.getElementById("t2").value;

    // Start calculate
    const gas_fee = parseFloat(gas)*parseFloat(gwei)*0.000000001

    // Const result info
    const result = gas_fee+'ETH'

    // Result
    document.write('<html style="background-color: pink;">')
    document.write('<div style="text-align: center;">')

    document.write('<h2>'+result+'</h2>');
    document.write('<form action="./index.html"><input type="submit" value="Caluculate again" /></form>');

    document.write('</div>')
    document.write('</html>')
}
