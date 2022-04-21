$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault()
	    <!--
        var username = $("#username").val()
        var password = $("#password").val()

        let auth = btoa(username + ":" + password);

        fetch("https://api.github.com/user", {
            headers: {
                'Authorization': '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'
            }
        })
            .then(function (data) {
            return data.json()
            })
            .then(function (data) {
                $("#username").val("")
                $("#password").val("")
                if (data.message == "Bad credentials") {
                    alert("wrong credentials")
                }
                else {
                    var result = `<img class="img-thumbnail ml-4" width="100" height="100" src="${data.avatar_url}"/><br><h1>${data.login}</h1><br><a target="_blank" href="${data.html_url}"><button class="btn btn-success">See Profile</button></a>`
                    $("#result").html(result)
                }
                console.log(data)
        })
        -->
        
        fetch('https://api.github.com/users/Samson-Law', { 
             headers: {
                  'Accept' : 'application/vnd.github.v3+json'
              }})
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
                    const root = document.querySelector('#root');
                    root.innerHTML = ` 
                      <a href=`${data.html_url}`>Name: `${data.name}`</a>
                     <p>Followers : `${data/followers}`</p>
                  `
                })
		.catch( error => console.error(error));
    })
})
