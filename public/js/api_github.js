/* 
   Github API calls get passed to this file.
*/

console.log(`--------------------------------------------------------------------------------`);
console.log(`questions.js loaded.`);
console.log(`--------------------------------------------------------------------------------`);

$( document ).ready(function() {
console.log(`app.js ready!`);

/* ----- Code Start ----- */

let urlGitHub = "https://api.github.com/users/";
let userGitHub = "gethashset";

$.ajax({

    url: `${urlGitHub}${userGitHub}`,
    method: "GET"

}).then(function(data){

    // console.log(data);
    let collectedData = data;

    // collect the information from the API once it returns.
    
    let logIn = data.login;

    let picture = data.avatar_url;

    let urlGitHub = data.url;

    let name = data.name;

    let company = data.company;

    let portfolio = data.blog;

    let location = data.location;

    let email = data.email;

    let subInfo = data.bio;

    $.ajax({
        url: data.repos_url,
        method: "GET"
    }).then(function(moreData){

        //console.log(moreData);

        // make an array of all the top projects.
        // to meet coding standards please turn these objects into a funciton constructor 
        let topProjects = [
            {
                projectName: "",
                projectDate: "0",
                projectURL: `https://github.com/${this.projectName}`,
                projectDescription: ""
            },
            {
                projectName: "No Projects",
                projectDate: "0",
                projectURL: `https://github.com/${this.projectName}`,
                projectDescription: ""
            },
            {
                projectName: "No Projects",
                projectDate: "0",
                projectURL: `https://github.com/${this.projectName}`,
                projectDescription: ""
            }
        ];

        moreData.forEach(item => {

            // for each object in this users repo array we are going to see when the most recent were pushed to.
            for(i = 0; i < topProjects.length; i++){
                if (item.updated_at > topProjects[i].projectDate){
                    topProjects[i].projectDate = item.updated_at;
                    topProjects[i].projectName = item.name;
                    // url for project includes the user we collected this data from.
                    topProjects[i].projectURL =  `https://github.com/${logIn}/${item.name}`
                    topProjects[i].projectDescription = item.description;
                    break;
                };
            };
            
        });
        
        console.log(topProjects);
        // log all three project names.
        topProjects.forEach(thing => {
            console.log(thing.projectName);
            // if the repo doesnt have a description then give it one.
            console.log(thing.projectDescription ? thing.projectDescription : "Visit the repo to find out more!");
            console.log(thing.projectURL);
        });


    });

});




/* ------ Code End ------ */

});
console.log(`loading...`);

