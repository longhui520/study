window.onload=function(){
    $('#submit').click(function(){
        console.log($('#input').val())
        $('#container').toggle()
    })
    $('#click').click(function(){
        $('#container').toggle()
    })
    
}