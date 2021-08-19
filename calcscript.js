var input_text = document.getElementById("inputdata")

function pushbutt(value1)
{
    var Value = value1.innerHTML
    if(Value == "=")
    {
        try{
        input_text.innerHTML = eval(input_text.innerHTML)
        }
        catch(e){
            alert(e)
            input_text.innerHTML = ''
        }
    }
    else if(Value == "AC")
    {
        input_text.innerHTML = '0'
    }
    else 
    {
        if(input_text.innerHTML == "0"){
            input_text.innerHTML = Value
        }
        else
        {
            input_text.innerHTML += Value
        }
    }
}