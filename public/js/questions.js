/* 
   this is for loading the 20 questions to build the resume.
*/


$(document).ready(function () {
  console.log("app.js ready!");

  /* ----- Code Start ----- */
  const user_data = {};


  // document.addEventListener("keyup", function (event) {
  $(".big_red_button").click(function () {
    //if (event.keyCode == 9) {
    //console.log("first name: " + $("#first_name").val());
    if ($("#first_name").val() != "") {
      user_data.first_name = $("#first_name").val();
      console.log(user_data.first_name);
    }
    if ($("#last_name").val() != "") {
      user_data.last_name = $("#last_name").val();
      console.log(user_data.last_name);
    }
    if ($("#user_email").val() != "") {
      user_data.user_email = $("#user_email").val();
      console.log(user_data.user_email);
    }
    if ($("#phone_number").val() != "") {
      user_data.phone_number = $("#phone_number").val();
      console.log(user_data.phone_number);
    }
    if ($("#user_address").val() != "") {
      user_data.user_address = $("#user_address").val();
      console.log(user_data.user_address);
    }

    /************Page_2*****************/
    if ($("#linkedin").val() != "") {
      user_data.linkedin = $("#linkedin").val();
      console.log(user_data.linkedin);
    }
    if ($("#github").val() != "") {
      user_data.github = $("#github").val();
      console.log(user_data.github);
    }
    if ($("#picture_url").val() != "") {
      user_data.picture_url = $("#picture_url").val();
      console.log(user_data.picture_url);
    }

    /***************Page_3*****************/

    if ($("#quote").val() != "") {
      user_data.quote = $("#quote").val();
      console.log(user_data.quote);
    }
    if ($("#about").val() != "") {
      user_data.about = $("#about").val();
      console.log(user_data.about);
    }

    /***************Page_4*****************/

    if ($("#job_company_name_1").val() != "") {
      user_data.job_company_name_1 = $("#job_company_name_1").val();
      console.log(user_data.job_company_name_1);
    }
    if ($("#job_title_1").val() != "") {
      user_data.job_title_1 = $("#job_title_1").val();
      console.log(user_data.job_title_1);
    }
    if ($("#job_start_1").val() != "") {
      user_data.job_start_1 = $("#job_start_1").val();
      console.log(user_data.job_start_1);
    }
    if ($("#job_end_1").val() != "") {
      user_data.job_end_1 = $("#job_end_1").val();
      console.log(user_data.job_end_1);
    }
    if ($("#job_description_1").val() != "") {
      user_data.job_description_1 = $("#job_description_1").val();
      console.log(user_data.job_description_1);
    }
    if ($("#job_skills_1").val() != "") {
      user_data.job_skills_1 = $("#job_skills_1");
      console.log(user.data.job_skills_1);
    }

    /***************Page_5*****************/

    if ($("#job_company_name_2").val() != "") {
      user_data.job_company_name_2 = $("#job_company_name_2").val();
      console.log(user_data.job_company_name_2);
    }
    if ($("#job_title_2").val() != "") {
      user_data.job_title_2 = $("#job_title_2").val();
      console.log(user_data.job_title_2);
    }
    if ($("#job_start_2").val() != "") {
      user_data.job_start_2 = $("#job_start_2").val();
      console.log(user_data.job_start_2);
    }
    if ($("#job_end_2").val() != "") {
      user_data.job_end_2 = $("#job_end_2").val();
      console.log(user_data.job_end_2);
    }
    if ($("#job_description_2").val() != "") {
      user_data.job_description_2 = $("#job_description_2").val();
      console.log(user_data.job_description_2);
    }
    if ($("#job_skills_2").val() != "") {
      user_data.job_skills_2 = $("#job_skills_2").val();
      console.log(user_data.job_skills_2);
    }

    /***************Page_6*****************/

    if ($("#job_company_name_3").val() != "") {
      user_data.job_company_name_3 = $("#job_company_name_3").val();
      console.log(user_data.job_company_name_3);
    }
    if ($("#job_title_3").val() != "") {
      user_data.job_title_3 = $("#job_title_3").val();
      console.log(user_data.job_title_3);
    }
    if ($("#job_start_3").val() != "") {
      user_data.job_start_3 = $("#job_start_3").val();
      console.log(user_data.job_start_3);
    }
    if ($("#job_end_3").val() != "") {
      user_data.job_end_3 = $("#job_end_3").val();
      console.log(user_data.job_end_3);
    }
    if ($("#job_description_3").val() != "") {
      user_data.job_description_3 = $("#job_description_3").val();
      console.log(user_data.job_description_3);
    }
    if ($("#job_skills_3").val() != "") {
      user_data.job_skills_3 = $("#job_skills_3").val();
      console.log(user_data.job_skills_3);
    }

    /***************Page_7*****************/

    if ($("#education").val() != "") {
      user_data.education = $("#education").val();
      console.log(user_data.education);
    }
    if ($("#edu_highest_grade").val() != "") {
      user_data.edu_highest_grade = $("#edu_highest_grade").val();
      console.log(user_data.edu_highest_grade);
    }

    /***************Page_8*****************/

    if ($("#school_name_1").val() != "") {
      user_data.school_name_1 = $("#school_name_1").val();
      console.log(user_data.school_name_1);
    }
    if ($("#school_grad_date_1").val() != "") {
      user_data.school_grad_date_1 = $("#school_grad_date_1").val();
      console.log(user_data.school_grad_date_1);
    }
    if ($("#school_major_1").val() != "") {
      user_data.school_major_1 = $("#school_major_1").val();
      console.log(user_data.school_major_1);
    }

    /***************Page_9*****************/

    if ($("#school_name_2").val() != "") {
      user_data.school_name_2 = $("#school_name_2").val();
      console.log(user_data.school_name_2);
    }
    if ($("#school_grad_date_2").val() != "") {
      user_data.school_grad_date_2 = $("#school_grad_date_2").val();
      console.log(user_data.school_grad_date_2);
    }
    if ($("#school_major_2").val() != "") {
      user_data.school_major_2 = $("#school_major_2").val();
      console.log(user_data.school_major_2);
    }

    /***************Page_10*****************/

    if ($("#skill_1").val() != "") {
      user_data.skill_1 = $("#skill_1").val();
      console.log(user_data.skill_1);
    }
    if ($("#skill_2").val() != "") {
      user_data.skill_2 = $("#skill_2").val();
      console.log(user_data.skill_2);
    }
    if ($("#skill_3").val() != "") {
      user_data.skill_3 = $("#skill_3").val();
      console.log(user_data.skill_3);
    }
    if ($("#skill_4").val() != "") {
      user_data.skill_4 = $("#skill_4").val();
      console.log(user_data.skill_4);
    }
    if ($("#skill_5").val() != "") {
      user_data.skill_5 = $("#skill_5").val();
      console.log(user_data.skill_5);
    }

    /***************Page_11*****************/

    if ($("#reference_name_1").val() != "") {
      user_data.reference_name_1 = $("#reference_name_1").val();
      console.log(user_data.reference_name_1);
    }
    if ($("#reference_number_1").val() != "") {
      user_data.reference_number_1 = $("#reference_number_1").val();
      console.log(user_data.reference_number_1);
    }
    if ($("#reference_email_1").val() != "") {
      user_data.reference_email_1 = $("#reference_email_1").val();
      console.log(user_data.reference_email_1);
    }
    if ($("#reference_relationship_1").val() != "") {
      user_data.reference_relationship_1 = $("#reference_relationship_1").val();
      console.log(user_data.reference_relationship_1);
    }

    /***************Page_12*****************/

    if ($("#reference_name_2").val() != "") {
      user_data.reference_name_2 = $("#reference_name_2").val();
      console.log(user_data.reference_name_2);
    }
    if ($("#reference_number_2").val() != "") {
      user_data.reference_number_2 = $("#reference_number_2").val();
      console.log(user_data.reference_number_2);
    }
    if ($("#reference_email_2").val() != "") {
      user_data.reference_email_2 = $("#reference_email_2").val();
      console.log(user_data.reference_email_2);
    }
    if ($("#reference_relationship_2").val() != "") {
      user_data.reference_relationship_2 = $("#reference_relationship_2").val();
      console.log(user_data.reference_relationship_2);
    }

    /***************Page_13*****************/

    if ($("#reference_name_3").val() != "") {
      user_data.reference_name_3 = $("#reference_name_3").val();
      console.log(user_data.reference_name_3);
    }
    if ($("#reference_number_3").val() != "") {
      user_data.reference_number_3 = $("#reference_number_3").val();
      console.log(user_data.reference_number_3);
    }
    if ($("#reference_email_3").val() != "") {
      user_data.reference_email_3 = $("#reference_email_3").val();
      console.log(user_data.reference_email_3);
    }
    if ($("#reference_relationship_3").val() != "") {
      user_data.reference_relationship_3 = $("#reference_relationship_3").val();
      console.log(user_data.reference_relationship_3);
    }

    /***************Page_14*****************/

    if ($("#project_name_1").val() != "") {
      user_data.project_name_1 = $("#project_name_1").val();
      console.log(user_data.project_name_1);
    }
    if ($("#project_info_1").val() != "") {
      user_data.project_info_1 = $("#project_info_1").val();
      console.log(user_data.project_info_1);
    }
    if ($("#project_url_1").val() != "") {
      user_data.project_url_1 = $("#project_url_1").val();
      console.log(user_data.project_url_1);
    }

    /***************Page_15*****************/

    if ($("#project_name_2").val() != "") {
      user_data.project_name_2 = $("#project_name_2").val();
      console.log(user_data.project_name_2);
    }
    if ($("#project_info_2").val() != "") {
      user_data.project_info_2 = $("#project_info_2").val();
      console.log(user_data.project_info_2);
    }
    if ($("#project_url_2").val() != "") {
      user_data.project_url_2 = $("#project_url_2").val();
      console.log(user_data.project_url_2);
    }

    /***************Page_16*****************/

    if ($("#project_name_3").val() != "") {
      user_data.project_name_3 = $("#project_name_3").val();
      console.log(user_data.project_name_3);
    }
    if ($("#project_info_3").val() != "") {
      user_data.project_info_3 = $("#project_info_3").val();
      console.log(user_data.project_info_3);
    }
    if ($("#project_url_3").val() != "") {
      user_data.project_url_3 = $("#project_url_3").val();
      console.log(user_data.project_url_3);
    }

    var objJson = JSON.stringify(user_data);
    console.log(objJson);

    // make a random hash
    let randomNumber = Math.floor(Math.random()*500) +1;
    let randomNumber2 = Math.floor(Math.random()*500) +1;
    let randomAlpha = Math.floor(Math.random() *25 );
    let randomAlpha2 = Math.floor(Math.random() *23 );
    let randomAlpha3 = Math.floor(Math.random() *22 );
    let Alpha = "abcdefghijklmnopqrstuvwxyz";

    if (user_data.key == null || user_data.key == ""){
      user_data.key = randomNumber + Alpha[randomAlpha] + randomNumber2 + Alpha[randomAlpha2] + Alpha[randomAlpha3]
    };
 
    console.log(user_data.key);

    // check to make sure an email was entered into the mix
    if (user_data.user_email != null && user_data.user_email.length > 4 && user_data.user_email.indexOf("@") != -1 && user_data.user_email.indexOf(".") != -1) {

      $.post("/testing/123", user_data)
      .then(function (data) {
        console.log(data);
      });

    } else {
      //you need to enter an email.
    }


    //}
  });

  let collectUserData = {
    user_email: "matthew_carpenter@fake-email_.com",
    picture_url: "https://avatars1.githubusercontent.com/u/53285976?s=460&v=4",
    first_name: "Matthew",
    last_name: "Carpenter",
    phone_number: "555-1701",
    user_address: "7500 North MindyourownBusiness dr.",
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
  $(".dummy_data").click(function () {
    //console.log("dummy data");
    // console.log(collectUserData);
     $.post("/testing/123", collectUserData)
       .then(function (data) {
         console.log(data);
       });

  });

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

      window.location = `/resume`;
    
  };




  $("#back_button").on("click", backButton);
  $("#skip_button").on("click", skipButton);
  $("#next_button").on("click", nextButton);


  /* ------ Code End ------ */
});
