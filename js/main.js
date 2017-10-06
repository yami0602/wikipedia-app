// const wiki_link = 'https://en.wikipedia.org/wiki'


//REgualr JS
// (function(){
//     document.querySelector('#searchButton').addEventListener('click', function'(){
//         let searchTerm = document.querySelector('#searchTerm').value;
//         "
        
//     })
// })()



$(document).ready(function() {
    $('#searchButton').click(function(){
        var searchTerm = $('#searchTerm').val();
        const api_url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"
            
        $.ajax({
            type: "GET",
            url : api_url,
            async: false,
            dataType: "json",
            success: function(data){
                $('#output').html('');
                for(let i= 0; i<data[1].length; i++){
                    $('#output').prepend(`<li class="lists"><a href=${data[3][i]}>${data[1][i]}</a><p>${data[2][i]}</p></li>`);
                }  
            },
            error: function(errorMessage){
                console.log('error')
            }

        });

    });

});
