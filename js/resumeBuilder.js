//create detail of a resume 
//include contracts,education,works and projects
var bio = {
  "name": "Mihai Lai",
  "role": "Web Developer",
  "contacts": {
    "mobile": "555-555-5555" ,
    "email": "mihai@example.com",
    "github": "MihaiLai",
    "location": "Shenzhen"
  },
  "welcomeMessage" : "hello welcomeMessage",
  "skills": ["javascript", "css", "programming","java"],
  "biopic": "images/mihai.jpg"
};

var education = {
  "schools": [
    {
      "name": "Guangdong University of Technology",
      "location": "Guangzhou",
      "degree": "Bachelor of Science",
      "majors": ["Math", "Optics", "ElectronicSci"],
      "dates": "2011.09-2015.07",
      "url": "http://www.gdut.edu.cn/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://classroom.udacity.com/courses/ud804"
    }
  ]
};

var work = {
  "jobs": [
    {
      "title": "Optical engineer",
      "employer": "Shenzhen Australis Technology Co. Ltd.",
      "location": "Shenzhen",
      "dates": "2015.07.01-2016.01.15",
      "description": "design backlight module"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "sample project 1",
      "dates": "2014",
      "description": "Being able to pass logic around an application in the form of a function" + 
         "means it’s possible to move a lot of repetitive code into a library function. " +
         "It makes it easier to separate the unique pieces of logic from the generally useful logic." +
         "For example, imagine you have a list of chocolate bars and you want to find all" +
         "the ones that are made by Mars because you love M&Ms and you want to find out " +
         "what other chocolatey goodness you could be enjoying.",
      "images": ["images/fry.jpg","images/fry.jpg"]

    }
  ]
};
/*
  bio
 */
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  //contacts: add my contacts at both top and foot of my resume
  var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var email = HTMLemail.replace("%data%",bio.contacts.email);
  var github = HTMLgithub.replace("%data%",bio.contacts.github);
  var myLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts, #footerContacts").append(mobile, email, github, myLocation);

  //picture and welcome message
  var bioPic = HTMLbioPic.replace("%data%",bio.biopic);
  var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(bioPic, welcomeMessage);

  //skills
  $("#header").append(HTMLskillsStart);
  if (bio.skills.length > 0) {
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
};
/*
  work
 */
work.display = function() {
  for (var job = 0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedJob = work.jobs[job];
    //employer, title, date, and work description
    var formattedTitle = HTMLworkTitle.replace("%data%",formattedJob.title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",formattedJob.employer);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%",formattedJob.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",formattedJob.description);
    $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription);
  }
};
/*
  projects
 */
projects.display = function() { 
  for (var project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);
    var newProject = projects.projects[project];
    //project name , time , and description
    var formattedTitle = HTMLprojectTitle.replace("%data%",newProject.title);
    var formattedDates = HTMLprojectDates.replace("%data%",newProject.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",newProject.description);
    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

    //project image
    if (newProject.images.length > 0) {
      for (var image = 0; image < newProject.images.length; image++) {
      var formattedImage = HTMLprojectImage.replace("%data%",newProject.images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }    
  }
};
/*
  Education
 */
education.display = function() {
  //add school
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var school = education.schools[i];
    //school information
    var formattedName = HTMLschoolName.replace("%data%",school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
    var formattedSchool = formattedName + formattedDegree;
    var formattedURL = HTMLschoolName.replace("%data%",school.url);
    var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
    var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
    $(".education-entry:last").append(formattedSchool, formattedURL, 
                                      formattedDates, formattedLocation, formattedMajor);
  }
  //add online course
  $("#education").append(HTMLonlineClasses);
  for (var j = 0; j < education.onlineCourses.length; j++) {
    $("#education").append(HTMLschoolStart);
    var course = education.onlineCourses[j];
    var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
    var formattedName = HTMLonlineSchool.replace("%data%",course.school);
    var formattedSchool = formattedTitle + formattedName;
    var formattedDate = HTMLonlineDates.replace("%data%",course.dates);
    var formattedURL = HTMLonlineURL.replace("%data%",course.url);
    $(".education-entry:last").append(formattedSchool, formattedDate, formattedURL);
  }
};
// change the name format
function inName(name){
  var nameArray = name.split(" ");
  var firstName = nameArray[0];
  var lastName = nameArray[1];
  var finalFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  var finalLastName = lastName.toUpperCase();
  name = finalFirstName +" " + finalLastName;
  return name;
}

//add a button of change name format
$("#main").append(internationalizeButton);
//show all information
bio.display();
work.display();
projects.display();
education.display();

//append google map to HTML
$("#mapDiv").append(googleMap);