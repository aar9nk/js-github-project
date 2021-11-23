
//searches GitHub for users by name and displays the results on the screen

//Using the results of the search, display information about the users

//You might include showing their username, avatar and a link to their profile

//Clicking on a specific user will show all the repositories for that user

//Toggle the search bar between searching for users by keyword and searching 
//for repos by keyword by adding an extra button
//(https://developer.github.com/v3/search/#search-repositories)


const form = document.getElementById("form");
const button = document.getElementById("button");

form.addEventListener('submit' , function(e){
    e.preventDefault()

    //get value
    const search = document.getElementById("search").value 
    //console.log(value)

    const originalName = search.split(' ').join('')
    console.log(originalName)

    const searchGithub = async () => {
       try {
        //#user-search-endpoint
        const result = await fetch("https://api.github.com/users" + originalName);//
        const data =  await result.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }

    document.getElementById("result").innerHTML = `
            <a target ="_blank" href="https://www.github.com/${originalName}" <img src = "${data.avatar_url} "/></a>
        `
    };  
})






//search.addEventListener('input' , () => searchList(search.value)
