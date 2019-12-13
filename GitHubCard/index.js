/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


const cardFromIndex = document.querySelector('.cards')
//const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

axios
    .get("https://api.github.com/users/remoo1901")
    .then((res) => {
    const user = res.data;
   const newCard = githubCardCreator(user);
   cardFromIndex.appendChild(newCard)
    })
    .catch(err =>  console.log(err))

/*followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    const data  =res.data;
    const newCard = githubCardCreator(data);
    cardFromIndex.appendChild(newCard)
  })
  .catch((err) =>  console.log(err)) 
})*/


function githubCardCreator(obj){

  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // appending:

  card.appendChild(cardImg); 
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile); 
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(profileLink);

  // classes:

   card.classList.add('card');
   cardInfo.classList.add('card-info');
   name.classList.add('name');
   username.classList.add('username')


   cardImg.src = obj.avatar_url;
   cardImg.alt = 'github user';
   name.textContent = obj.name;
   username.textContent = obj.login;
   location.textContent = obj.location;
   profile.textContent = 'Profile:';
   profileLink.href = obj.html_url;
   profileLink.textContent = obj.html_url;
   profileLink.style.cursor = 'pointer';
   followers.textContent = `followers: ${obj.followers}`;
   following.textContent = `following: ${obj.following}`;
   bio.textContent = `Bio: ${obj.bio}`;

   return card;

}

/*
axios
    .get("https://api.github.com/users/remoo1901")
    .then((res) => {
    //console.log(res);
    const githubCards = res.data;
    githubCards.forEach((x) => {
     const newGhCard = githubCardCreator(x);
     userCards.appendChild(newGhCard);
    
    });

    })

  const userCards = document.querySelector('.cards');

*/
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/*
const followersArray = [];




function githubCardCreator(user){

   const cardDiv = document.createElement('div');
   const userImg = document.createElement('img');
   const userCardInfo = document.createElement('div');
   const userName = document.createElement('h3');
   const userUsersName = document.createElement('p');
   const userLocation = document.createElement('p');
   const userProfile = document.createElement('p');
   const userAddress = document.createElement('a');
   const userFollowers = document.createElement('p');
   const userFollowing = document.createElement('p');
   const userBio = document.createElement('p');

   
   userImg.src = user.data.avatar_url;
   userName.textContent = "Remon Abdou";
   userUsersName.textContent = "remoo1901";
   userLocation.textContent = "null";
   userAddress.href = user.data.html_url;
   userFollowers.href = user.data.followers_url;
   userFollowing.href = user.data.following_url;
   userBio.href = user.data.bio;

   cardDiv.classList.add('card');
   userCardInfo.classList.add('card-info');
   userName.classList.add('name');
   userUsersName.classList('username');
      
   cardDiv.appendChild(userImg); 
   cardDiv.appendChild(userCardInfo);
   userCardInfo.appendChild(userName);
   userCardInfo.appendChild(userUsersName);
   userCardInfo.appendChild(userLocation);
   userCardInfo.appendChild(userProfile); 
   userProfile.appendChild(userAddress);
   userCardInfo.appendChild(userFollowers);
   userCardInfo.appendChild(userFollowing);
   userCardInfo.appendChild(userBio);

   return cardDiv;

}


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
