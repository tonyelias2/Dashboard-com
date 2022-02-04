/*Remove Video*/

function removeVideo(id) {
    const myDiv = document.getElementById(id);
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);
}

/*Calculator*/

       
    /* Creating function in HTML for backspace operation */
    function backspace(calc) {                                            
        size = calc.display.value.length;
        calc.display.value = calc.display.value.substring(0, size-1);
    }
     
    /* Creating function to calculate factorial of element */
    function calculate(calc) {
         
        /* Check if function include ! character then
        calculate factorial of number */
        if(calc.display.value.includes("!")) {
             
            size = calc.display.value.length;
            n = Number(calc.display.value.substring(0, size-1));
            f = 1;
             
            for(i = 2; i <= n; i++)
                f = f*i;
            calc.display.value = f;
        }
         
        /* If function include % character then calculate
        the % of number */
        else if(calc.display.value.includes("%")) {
             
            size = calc.display.value.length;
            n = Number(calc.display.value.substring(0, size-1));
            calc.display.value = n/100;
        }

        else   
            /* Otherwise evaluate and execute output */
            calc.display.value = eval(calc.display.value);
    }

    /*Loan Calculator*/

    function calculateLoan(){
        const amount = document.querySelector('#amount').value;
        const interest_rate = document.querySelector('#interest').value;
        const months = document.querySelector('#months').value;
        const interest = (amount * (interest_rate * 0.01)) / months;
        const payment = ((amount / months) + interest).toFixed(2);
    
    
        document.querySelector('#payment').innerHTML =  'Payment / Month: ' + payment + '$';
    }

    /*Add Video*/

    function makeRequest() {
        var q = $('#query').val();
        var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet',
            maxResults: 2
        });
        request.execute(function (response) {
            $('#results').empty()
            var srchItems = response.result.items;
            $.each(srchItems, function (index, item) {
                console.log(item.id.videoId)
                vidTitle = item.snippet.title;
                vidThumburl = item.snippet.thumbnails.default.url;
                vidThumbimg = '<iframe src="https://www.youtube.com/embed/' + item.id.videoId + '" width="300" height="280" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" seamless></iframe> ';
               
                $('#results').append(vidThumbimg );
            })
        })
    }
    function keyWordsearch(){
        gapi.client.setApiKey('AIzaSyDE5naLHvKrVtHT6eH8bwcwf4oiP9LcrTg');
        gapi.client.load('youtube', 'v3', function(){
                makeRequest();
        });
    }
    !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');
    
    
    function myFunction() {
         $('#user-video').append(document.getElementById("url").value)
         var url_string = document.getElementById("url").value
         let myIframe = document.getElementById("myIframe");
         myIframe.src = url_string;
         alert(document.getElementById("url").value)
    }
    