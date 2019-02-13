const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("It worked"); 
    } else {
        reject("It broke"); 
    }

}); 

promise
.then(result => result + '!') 
.then(result2 => console.log(result2));  

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HI'); 
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE'); 
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Piss off mate'); 
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values); 
})



// using promises to pull json data for users. albums & posts API calls.
const urls = [
'https://jsonplaceholder.typicode.com/albums', 
'https://jsonplaceholder.typicode.com/users', 
'https://jsonplaceholder.typicode.com/posts'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
})).then(results => {
    console.log(results[0]); 
    console.log(results[1]); 
    console.log(results[2]); 
}).catch(() => console.log('error')); 


