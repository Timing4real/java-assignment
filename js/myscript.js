const checkStudyDay = (studyDay) => {
    let message;
    if (studyDay === "monday") {
     message = "please go to work";
     return message;
    }else if (studyDay === "afternoon") {
     message = "busy working";
     return message;
    }else if (studyDay === "night") {
     message = "yes, i do read";
     return message;
    }else {
     message = "Do not study at all!";   
  }
};