import fetch from "node-fetch";
import axios from "axios";


// async function getData() {
//     const {data: user1} = await axios("https://jsonplaceholder.typicode.com/users/1");

//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    
//     console.log(user1);
//     console.log("posts: ",post1);
// }

// getData();

/// NEW TRY

async function getData() {
    const getUsers = (user_id) => {
        return new Promise(async (resolve, reject) => {
            const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);

            resolve(data);
            reject("Bir sorun oluştu!")
        });
    };
        
    const getPost = (post_id) => {
        return new Promise(async(resolve, reject) => {
            const { data } = await  axios("https://jsonplaceholder.typicode.com/posts/" + post_id);

            resolve(data);
            reject("Bir sorun daha oluştu!")
        });
    };
    Promise.all([getUsers(1), getPost(1)]).then(console.log).catch(console.log);
};

export default getData;


// getUsers(1)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

// getPost(1)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

// (async () => {
//     try {
//         const users = await getUsers(1)
//         const post = await getPost(1)
//         console.log(users);
//         console.log(post);
//     } catch(e) {
//         console.log(e);       
//     }
//     })();

