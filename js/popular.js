
const url = 'http://localhost:5000/getFavFood'

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

        for (let i = 0; i < response.length; i++) {

            $('.popular-food').append(`<div class="menu-item-tile col-md-6">
            <div class="row">
              <div class="col-sm-5">
                <div class="menu-item-photo">
                  <img class="img-responsive foodImg" width="250" height="150"
                    src=`+ response[i].image + ` alt="Item">
                </div>
              </div>
              <div class="menu-item-description col-sm-7">
                <h3 class="menu-item-title">`+ response[i].name + `</h3>
                <p class="menu-item-details">`+ response[i].description + `</p>
              </div>
            </div>
            <hr class="visible-xs">
          </div>`)

            if (i !== 0 && i % 2 == 0) {


                $('.popular-food').append('<div class="clearfix visible-lg-block visible-md-block"></div>')


            }

        }



    })