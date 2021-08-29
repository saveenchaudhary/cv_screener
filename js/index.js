// Importing the data
fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data1) => displayData(data1));

function displayData(data){
    console.log(data);
    
    let thumbanil =  data['results'][0]['picture']['large']
    nameV.innerHTML = data['results'][0]['name']['first']+" ";nameV.innerHTML +=data['results'][0]['name']['last'];
    user1.setAttribute('src',thumbanil);

    // Email
    emailV.innerHTML = data['results'][0]['email'];

    //Phone
    phoneV.innerHTML = data['results'][0]['cell'];

    // Location
    cityV.innerHTML = data['results'][0]['location']['city']+", "+data['results'][0]['location']['country']

    // UserName
    userV.innerHTML = data['results'][0]['login']['username'];

}

next.addEventListener('click',()=>{
    location.reload();
})
previous.addEventListener('click',()=>{
    location.reload();
})


