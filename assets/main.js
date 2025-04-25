async function getUsers(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    const result = data.map(function(ele){
        return ` 
            <div class = "user" > 
                <h2> ${ele.name} </h2>
                <div class = "section" >
                    <h4> Contact </h4>
                    <p> Email: ${ele.email} </p>
                    <p> Phone: ${ele.phone} </p>
                    <p> Website: <a href = "http://${ele.website}"> ${ele.website} </a> </p>
                </div>
                <div class = "section" >
                    <h4> Address </h4>
                    <p> ${ele.address.street}, ${ele.address.suite}</p>
                    <p> ${ele.address.city}, ${ele.address.zipcode}</p>
                    <p> Geo: ${ele.address.geo.lat}, ${ele.address.geo.lng}</p>
                </div>
                <div class = "section" >
                    <h4> Company </h4>
                    <p> ${ele.company.name} </p>
                    <p> ${ele.company.catchPhrase} </p>
                </div>
            </div>
        `
    }).join('');

    document.querySelector('.users').innerHTML = result;
}

getUsers();