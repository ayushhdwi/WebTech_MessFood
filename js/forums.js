const url = 'http://localhost:5000/getAllComment'

var requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
}

fetch(url, requestOptions)
    .then(data => { return data.json() })
    .then(response => {

        console.log(response)

        $('#total_commentors').text('Total Commentors (' + response.length + ')')

        for (let i = 0; i < response.length; i++) {

            $('.comment').append(`<div style="border:2px white solid;padding:10px; border-radius:15px;"><div id="username"><b>` + response[i].name + `</b> posted a comment for ` + response[i].food + `</div><div id="user_comment">` + response[i].comment + `</div></div><br>`)

        }



    })


$('.addComment').click(function () {

    const url = 'http://localhost:5000/addComment'

    var requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: $('.name').val(),
            food: $('.foodname').val(),
            comment: $('#comment').val()
        })
    }

    fetch(url, requestOptions)
        .then(data => { return data.json() })
        .then(response => { 
            console.log(response)

            alert('Comment added successfully ! ')
        })

})

$('.searchComment').click(function () {

    const url = 'http://localhost:5000/searchComment'

    var requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            food: $('#search').val(),
        })
    }

    fetch(url, requestOptions)
        .then(data => { return data.json() })
        .then(response => { 

            console.log(response)

            $('.comment').empty()

            for (let i = 0; i < response.length; i++) {

                $('.comment').append(`<div style="border:2px white solid;padding:10px;"><div id="username"><b>` + response[i].name + `</b> posted a comment for ` + response[i].food + `</div><div id="user_comment">` + response[i].comment + `</div></div><br>`)
    
            }
        })

})