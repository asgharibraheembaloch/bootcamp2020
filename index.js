
async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response);
    const data =  response.json();
    console.log(data);
}



async function postData(){
    await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body:JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response)=>response.json())
    .then((json)=>console.log(json))      
}
//getData();
postData();