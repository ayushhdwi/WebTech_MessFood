$('.storeFood').click(function(){

    const foodId = (this.className.split(' ')[0])
    var body = ({

        name: $('.'+foodId+'-name').text(),
        description: $('.'+foodId+'-description').text(),
        image: $('.'+foodId+'-image img').attr('src')
    })

    const url = 'http://localhost:5000/storeFavFood'

    var requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }

    fetch(url, requestOptions)
        .then(data => { return data.json() })
        .then(response => { 
            console.log(response)

            alert('Food added to popular list successfully !')
        })

})
