

$(document).ready(function(){
    fetch('https://api.sheetson.com/v2/sheets/partners', {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer wkU1O06aFm4QkA8qmSHTaJHdN89it5j6oZwz5JGIqwfxO1VNj6oL7drUT-SnAg',
            'X-Sheetson-Spreadsheet-Id': '1ganuK6Tkq97aml09E2YyKeuqQT_UpgKoKRFTHHmHx9k'
        }
    })
    .then(r => r.json())
    .then(data => {
        var template = Handlebars.compile($('#partner-template').html());
        $('#partners').html(template(data.results));
    })
    .catch(error => console.log(error));
});
