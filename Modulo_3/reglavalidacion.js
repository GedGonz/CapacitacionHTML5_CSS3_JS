
var modelo = document.getElementById("modelotxt");
modelo.addEventListener('input', validar);


function validar()
{
    if(modelo.value == "")
    {
        modelo.setCustomValidity('campo vacio');
        document.getElementById("modelotxt").className = 'Invalido';
    }
    else
    {
        modelo.setCustomValidity('');
        document.getElementById("modelotxt").className = 'valido';

    }

    console.log(modelo);

}