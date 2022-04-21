import { createRequire } from "module";
const require = createRequire(import.meta.url);
const profileDataJSON = require("../Data/profileData.json");

export const getAllProfileDataById = (req, res) => {
  if (req.params.id == 1) {
    res.send(profileDataJSON);
  } else {
    res.status(404).send("ID does not exist");
  }
};

export const getProjects = (req, res) => {
  // console.log(profileDataJSON.profile.projectsInfo.filter((project) => project.userId === req.params.id));
  // res.send(profileDataJSON.profile.projectsInfo.filter((project) => project.userId === req.params.id));
  let projectsInfoObj = []; //temp array to store the projects info
  profileDataJSON.profile.projectsInfo.forEach((project) => {
    if (project.userId == req.params.id) {
      projectsInfoObj.push(project);
    }
  });
  res.send(projectsInfoObj); //send the projects info
};
export const getEducations = (req, res) => {
  let educationObj = []; //temp array to store the education info
  profileDataJSON.profile.education.forEach((education) => {
    if (education.userId == req.params.id) {
      educationObj.push(education);
    }
  }); //filter the education info by userId
  res.send(educationObj); //send the filtered education info
};

export const getWorkExpreiences = (req, res) => {
  let workExperiencesObj = []; //temp array to store the work experiences info
  profileDataJSON.profile.workExperiences.forEach((workExpreience) => {
    if (workExpreience.userId == req.params.id) {
      workExperiencesObj.push(workExpreience);
    }
  }); //filter the work experiences info by userId
  res.send(workExperiencesObj); //send the filtered work experiences info
};

export const getSkills = (req, res) => {
  let skillsObj = []; //temp array to store the skills info
  profileDataJSON.profile.skills.forEach((skill) => {
    if (skill.userId == req.params.id) {
      skillsObj.push(skill);
    }
  }); //filter the skills info by userId
  res.send(skillsObj); //send the filtered skills info
};

export const getContactInfo = (req, res) => {
  let personalInfoObj = []; //temp array to store the personal info
  profileDataJSON.profile.personalInfo.forEach((info) => {
    if (info.id == req.params.id) {
      personalInfoObj.push(info);
    }
  }); //filter the personal info by userId
  res.send(personalInfoObj); //send filtered the personal info
};
