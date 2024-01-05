

$(document).ready(function(){
    fetch('https://api.sheetson.com/v2/sheets/workshops', {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer wkU1O06aFm4QkA8qmSHTaJHdN89it5j6oZwz5JGIqwfxO1VNj6oL7drUT-SnAg',
            'X-Sheetson-Spreadsheet-Id': '1YCFlsEofX_mQW_bdcCbUW8opHY9I65xO-3qUYf_tczw'
        }
    })
    .then(r => r.json())
    .then(data => {
        var template = Handlebars.compile($('#workshop-template').html());
        $('#workshops').html(template(data.results));
    })
    .catch(error => console.log(error));
});
