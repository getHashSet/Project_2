/* 
   this is for loading the 20 questions to build the resume.
*/

console.log(`--------------------------------------------------------------------------------`);
console.log(`questions.js loaded.`);
console.log(`--------------------------------------------------------------------------------`);

$(document).ready(function () {
    console.log(`app.js ready!`);


   
    //     <button class="next-btn">Next</button>


let $backButton = $(".back-btn");
let $skipButton = $(".skip-btn");
let $nextButton = $(".next-btn");

    /* ----- Code Start ----- */

    let collectUserData = {
        user_email: "matthew_carpenter@icloud.com",
        picture_url: "https://avatars1.githubusercontent.com/u/53285976?s=460&v=4",
        first_name: "Matthew",
        last_name: "Carpenter",
        phone_number: "5208405864",
        user_address: "5013 W Hurston Dr Tucson AZ 85742",
        linkedin: "matthewcarpenter22",
        github: "getHashSet",
        about: "Software Engineer and Apple certified systems-technician with a focus on the end user experience. It is my passion to bring projects to life using technology. Certification in Full Stack Development from the University of Arizona and proficient with: API’s, JavaScript, C#, Content Delivery Networks, Node.js, and Git. Successfully trained and deployed multiple technician teams, and held a market wide trainer position with a focus on both adult learning and interpreting data analytics. My experiences have provided me the opportunity to put into practice; triaging techniques, problem solving, and learning on the fly while amplifying my soft skills. It is my mission to contribute to a team that develops the world's most cutting edge software.",
        quote: "I help people achieve their goals through technology.",
        key: "HASHKEY123",
        job_skills_1: "Customer Service, Some IT stuff.",
        job_start_1: "2007",
        job_end_1: "2011",
        job_title_1: "Sales",
        job_description_1: "I would help people buy computers. Love it!",
        job_company_name_1: "Best Buy",
        job_skills_2: "Math, eating a whole pizza, not sleeping ever. Role Play.",
        job_start_2: "2003",
        job_end_2: "2006",
        job_title_2: "Nerd",
        job_description_2: "I sold table top games and comic books.",
        job_company_name_2: "Hard Castle",
        job_skills_3: "SCSS, HTML, javascript, C#, LAMP, SQL, Salesforce, SCRUM, AGILE, Splash of Node.js",
        job_start_3: "2019",
        job_end_3: "current",
        job_title_3: "Front End Dev",
        job_description_3: "I make fun and amazing web applications... with style.",
        job_company_name_3: "Madden Media",
        education: "What goes here again?",
        edu_highest_grade: "Some College",
        school_name_1: "Pima CC",
        school_grad_date_1: "2022",
        school_major_1: "CIS",
        //school_about_1: DataTypes.STRING,
        school_name_2: "Trilogy",
        school_grad_date_2: "2020",
        school_major_2: "MERN Stack",
        school_about_2: "Trilogy and UArizona work together to certify individuals in full stack development.",
        skill_1: "MERN",
        skill_2: "LAMP",
        skill_3: "Unity",
        skill_4: "VR",
        skill_5: "C--",
        reference_name_1: "David L",
        reference_number_1: "555-1701",
        reference_email_1: "email_david@email__david.org",
        reference_relationship_1: "He teaches math that looks like code.",
        reference_name_2: "Brock",
        reference_number_2: "+52 324 5551991",
        reference_email_2: "omg_I_love_stickers.com",
        reference_relationship_2: "I think he's dating someone.",
        reference_name_3: "Anthony",
        reference_number_3: "1",
        reference_email_3: "dont@mebro.com",
        reference_relationship_3: "We both love Pokemon",
        //project_name_1: DataTypes.STRING(64),
        //project_info_1: DataTypes.STRING,
        //project_url_1: DataTypes.STRING,
        //project_img_url_1: DataTypes.STRING,
        //project_name_2: DataTypes.STRING(64),
        //project_info_2: DataTypes.STRING,
        //project_url_2: DataTypes.STRING,
        //project_img_url_2: DataTypes.STRING,
        //project_name_3: DataTypes.STRING(64),
        //project_info_3: DataTypes.STRING,
        //project_url_3: DataTypes.STRING,
        //project_img_url_3: DataTypes.STRING,
        //qr_url: DataTypes.STRING,
    };

    // test to see if we can post the object
    $(".big_red_button").click(function () {

        $.post("/testing/123", collectUserData)
            .then(function (data) {
                console.log(data);
            });

    })

    let backButton = function () {
        event.preventDefault();
        window.location = "/";
    };

    let skipButton = function () {
        event.preventDefault();
        window.location = "/resume";
    };

    let nextButton = function () {
        event.preventDefault();
        window.location = "/resume";
    };




    $backButton.on("click", backButton);
    $skipButton.on("click", skipButton);
    $nextButton.on("click", nextButton);




    /* ------ Code End ------ */

});
console.log(`loading...`);

