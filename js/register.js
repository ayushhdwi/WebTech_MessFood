document.getElementById('rzp-button1').onclick = function (e) {
    const Url = 'http://localhost:5000/razorpay'
    axios.get(Url)
        .then(x => {
            const amnt = x.data.amount //amount returned by backend
            const curr = x.data.currency //currency returned by backend
            const idd = x.data.id //order_id returned by order API
            var options = {
                "key": "rzp_live_mxSLM380R7w6zX", //add your razorpay account key
                "amount": amnt,
                "currency": curr,
                "name": "",
                "description": "",
                "order_id": idd,
                "handler": function (response) {
                    if(response.razorpay_payment_id && response.razorpay_order_id && response.razorpay_signature){

                        const url = 'http://localhost:5000/registerStudent'

                        var requestOptions = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                reg: $('#reg').val(),
                                name: $('#name').val(),
                                block: $('#block').val()
                            })
                        }
                    
                        fetch(url, requestOptions)
                            .then(data => { return data.json() })
                            .then(response => { 
                                console.log(response)
                    
                                alert('Payment successful. Student registered successfully !')
                            })

                    }
                    else{
                        alert('Payment failed. Please try again !')
                    }

                },
                "prefill": {
                    "name": "",
                    "email": "",
                    "contact": ""
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
            e.preventDefault();
        })
        .catch(err => console.log(err))

}