
$(document).ready(function(){

    jQuery.event.props.push('dataTransfer');
    $('#telefonos').on('dragstart',dragging);
    $('#telefonos').on('dragend',dragremove);
    $('#favoritos').on('dragenter', prevenirDefecto);
    $('#favoritos').on('dragover',prevenirDefecto);
    $('#favoritos').on('drop',dropItem);
   
});

function dragging(e) {
    var value = e.target.getAttribute('data-value');
    e.dataTransfer.setData('text', value);
    e.dataTransfer.effectAllowed = 'copy'
}
function prevenirDefecto(e) {
    e.preventDefault();
}
function dropItem(e) {


    var data = e.dataTransfer.getData('text');
    var li = document.createElement('li');
    
    li.textContent = data;

    e.target.appendChild(li);
}

function dragremove(e)
{

    if(e.dataTransfer.dropEffect !== 'none'){
        $(e.target).remove();
    }
}