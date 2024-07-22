const checkstudyDay = (studyDay) => {

if (studyDay === "monday") {
  console.log("take a break");
  return;
}else if (studyDay === "afternoon") {
  console.log("hustle well");
  return;
}else if (studyDay === "night"){
  console.log("the best time to read");
}else {
  console.log("live a street life");
}
};


checkstudyDay("monday");
checkstudyDay("afternoon");
checkstudyDay("night");