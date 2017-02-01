var bio = {
    "name": "Akhil Singh",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91-9971847660",
        "email": "akhil.singh97@gmail.com",
        "location": "Pune,India",
        "github": "akhilsingh97"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Welcome to my Bio",
    "skills": ["Programmer", "Web Developer", "Application Developer"]
};
// var myname=HTMLheaderName.replace("%data%",bio.name)
//  $("#header").append(myname);
//  var myrole=HTMLheaderRole.replace("%data%",bio.role)
//   $("#header").append(myrole);
// $("#header").append(bio.name);
// $("#header").append(bio.role);````````



//  $("#header").append(bio.skill);
//if(bio.skill.length!==null){

var work = {
    "jobs": [{
            "employer": "Cognizant",
            "title": "Programmer Analyst",
            "dates": "September,2015 - February,2017",
            "location": "Pune,India",
            "description": "Worked as a Programmer Analyst as a web developer for around 1.5 years in one of the retail accounts."
        },
        {
            "employer": "Infosys",
            "title": "System Engineer Trainee",
            "dates": "August,2015 - September,2015",
            "location": "Mysore,India",
            "description": "Joined Infosys as a System Engineer Trainee for a month"
        }
    ]
};
// var education={};
//   education["school"]="City Montessori School";
//   education["years"]="8";
//   education["city_school"]="Lucknow";
//
// $("#workExperience").append(work.job_position);
// $("#workExperience").append(work.employer);
//  $("#workExperience").append(work.years_worked);
// $("#workExperience").append(work.city);
// $("#workExperience").append(education.school);
// $("#workExperience").append(education.years);
// $("#workExperience").append(education.city_school);

var education = {
    "schools": [{
            "name": "CMS",
            "location": "Lucknow,India",
            "degree": "ISC",
            "majors": ["Science"],
            "dates": "2011",
            "url": "www.cmseducation.org"
        },
        {
            "name": "Galgotias",
            "location": "Noida,India",
            "degree": "B.Tech",
            "majors": ["Computer Science"],
            "dates": "2015",
            "url": "www.galgotiasuniversity.edu.in"
        }
    ],
    "onlineCourses": [{
        "title": "Frontend Nanodegree Course, Udacity",
        "school": "Udacity",
        "dates": "January,2017",
        "url": "www.udacity.com"
    }]

};

var projects = {
    "projects": [{
            "title": "Portfolio development",
            "dates": "8 days",
            "description": "This project includes portfolio development using basic HTML and CSS",
            "images": ["images/197x148.gif"]
        },
        {
            "title": "Resume builder",
            "dates": "10 days",
            "description": "This project includes Resume building using basic JavaScript and JSON",
            "images": ["images/197x148.gif"]
        }

    ]
};

projects.display = function() {
    for (var proj = 0; proj < projects.projects.length; proj++) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojtitle1 = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        $(".project-entry:last").append(formattedprojtitle1);
        var formattedprojdate1 = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
        $(".project-entry:last").append(formattedprojdate1);
        var formattedprojdesc1 = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $(".project-entry:last").append(formattedprojdesc1);
        for (var img = 0; img < projects.projects[proj].images.length; img++) {
            var formattedprojimg = HTMLprojectImage.replace("%data%", projects.projects[proj].images[img]);
            $(".project-entry:last").append(formattedprojimg);
        }

    }
};

projects.display();
// var formattedprojtitle2=HTMLprojectTitle.replace("%data%",my_projects.Resume.title)
// $("#project-entry:last").append(formattedprojtitle2);
// var formattedprojdate2=HTMLprojectTitle.replace("%data%",my_projects.Resume.dates)
// $("#projects").append(formattedprojdate2);
// var formattedprojdesc2=HTMLprojectTitle.replace("%data%",my_projects.Resume.Description)
// $("#projects").append(formattedprojdesc2);
education.display = function() {
    for (var schl = 0; schl < education.schools.length; schl++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchlName = HTMLschoolName.replace("%data%", education.schools[schl].name);
        $(".education-entry:last").append(formattedSchlName);
        var formattedSchlGrad = HTMLschoolDates.replace("%data%", education.schools[schl].dates);
        $(".education-entry:last").append(formattedSchlGrad);
        var formattedSchlCities = HTMLschoolLocation.replace("%data%", education.schools[schl].location);
        $(".education-entry:last").append(formattedSchlCities);
        for (maj = 0; maj < education.schools[schl].majors.length; maj++) {
            var formattedSchlMajor = HTMLschoolMajor.replace("%data%", education.schools[schl].majors[maj]);
            $(".education-entry:last").append(formattedSchlMajor);
        }
        var formattedSchlDegree = HTMLschoolDegree.replace("%data%", education.schools[schl].degree);
        $(".education-entry:last").append(formattedSchlDegree);
        var formattedSchlurl = HTMLschoolURL.replace("%data%", education.schools[schl].url);
        $(".education-entry:last").append(formattedSchlurl);
    }
    $("#education").append(HTMLonlineClasses);
    for (var online = 0; online < education.onlineCourses.length; online++) {
        var course_name = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        $(".education-entry:last").append(course_name);
        var course_school = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        $(".education-entry:last").append(course_school);
        var course_date = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $(".education-entry:last").append(course_date);
        var url = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(url);

    }

    //  var languageslearned=HTMLonlineSchool.replace("%data%",Educations.online_courses.Languages)
    //  $(".education-entry:last").append(languageslearned);
};

education.display();
//

//var formattedbio=HTMLheaderName.replace("%data%,bio.name");
//$("#header").append(formattedbio);
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", "Akhil Singh");
    var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var mobileno = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(mobileno);
    $("#footerContacts").append(mobileno);
    var emailid = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(emailid);
    $("#footerContacts").append(emailid);
    var locationinfo = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(locationinfo);
    $("#footerContacts").append(locationinfo);
    var gitinfo = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(gitinfo);
    $("#footerContacts").append(gitinfo);


    var addimage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(addimage);
    var welcomemessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomemessage);
    $("#header").append(HTMLskillsStart);
    for (var skillset = 0; skillset < bio.skills.length; skillset++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillset]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedPlace = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedEmployeeDetails = formattedEmployer + formattedTitle + formattedDate + formattedPlace + formattedDescription;
        $(".work-entry:last").append(formattedEmployeeDetails);

    }
};

work.display();
// $("#main").append(internationalizeButton);
// function inName(fullname)
// {
//   var a=name.split(" ");
//   console.log(a);
//   var last= a[1].toUpperCase();
//   var first=a[0].slice(1).toLowerCase();
//   var firstchar=a[0].slice(0,1).toUpperCase();
//   return firstchar+first+" "+last;
//
// }
// inName(bio.name);
$("#mapDiv").append(googleMap);
