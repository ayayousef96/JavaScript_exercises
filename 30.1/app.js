const input = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");
const contianer = document.querySelector(".container");

const users =[];

searchBtn.addEventListener("click", () => {
    userName = input.value;
    input.value = "";
    if (userName !== "") {
        if(!users.includes(userName)){
            users.push(userName);
            get_fetch(userName);
        }
    }
    else{
        console.log("please insert user name");
    }
  });


async function get_fetch(searchname) {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res){
        user_card(data);

    } 
    else console.log ("invalid user");
    
}

function user_card(data){
    //user link
    const link = document.createElement("a");
    link.href = data.html_url;
    link.setAttribute("target", "_blank");//open new pgage
    contianer.appendChild(link);

    //append img
    const avatar = document.createElement("img");
    avatar.src = data.avatar_url;
    avatar.height = "150";
    avatar.width = "150";
    link.appendChild(avatar);

    //append user name
    const username = document.createElement("div");
    username.innerText = data.name;
    link.appendChild(username);

    //public repositires 
    const public_repos = document.createElement("div");
    public_repos.innerText = data.public_repos;
    link.appendChild(public_repos);
}

// avatar_url
// : 
// "https://avatars.githubusercontent.com/u/31767946?v=4"
// bio
// : 
// null
// blog
// : 
// ""
// company
// : 
// null
// created_at
// : 
// "2017-09-08T12:25:17Z"
// email
// : 
// null
// events_url
// : 
// "https://api.github.com/users/morMBen/events{/privacy}"
// followers
// : 
// 17
// followers_url
// : 
// "https://api.github.com/users/morMBen/followers"
// following
// : 
// 16
// following_url
// : 
// "https://api.github.com/users/morMBen/following{/other_user}"
// gists_url
// : 
// "https://api.github.com/users/morMBen/gists{/gist_id}"
// gravatar_id
// : 
// ""
// hireable
// : 
// null
// html_url
// : 
// "https://github.com/morMBen"
// id
// : 
// 31767946
// location
// : 
// null
// login
// : 
// "morMBen"
// name
// : 
// "Mor Mordechai Ben"
// node_id
// : 
// "MDQ6VXNlcjMxNzY3OTQ2"
// organizations_url
// : 
// "https://api.github.com/users/morMBen/orgs"
// public_gists
// : 
// 0
// public_repos
// : 
// 20
// received_events_url
// : 
// "https://api.github.com/users/morMBen/received_events"
// repos_url
// : 
// "https://api.github.com/users/morMBen/repos"
// site_admin
// : 
// false
// starred_url
// : 
// "https://api.github.com/users/morMBen/starred{/owner}{/repo}"
// subscriptions_url
// : 
// "https://api.github.com/users/morMBen/subscriptions"
// twitter_username
// : 
// null
// type
// : 
// "User"
// updated_at
// : 
// "2022-07-11T08:00:14Z"
// url
// : 
// "https://api.github.com/users/morMBen"