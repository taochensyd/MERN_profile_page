import express from "express";
import { getAllProfileDataById, getProjects, getEducations, getWorkExpreiences, getSkills, getContactInfo } from "../controllers/profileData.js";

const router = express.Router();

// Routes for CURD profile data will be here
// All the routes function are inside the controllers folder
// Endpoint is defined in index.js with app.use('/profile', profileDataRoutes);


// Get all the profile data and respond to front end
//Get method, 
router.get("/getAllProfileDataById/:id", getAllProfileDataById);
router.get("/getProjects/:id", getProjects);
router.get("/getEducations/:id", getEducations);
router.get("/getWorkExpreiences/:id", getWorkExpreiences);
router.get("/getSkills/:id", getSkills);
router.get("/getContactInfo/:id", getContactInfo);


// //Post method, endpoint is defined in index.js with app.use('/profile', profileDataRoutes);
// //Post methods
// router.get("/", getALLProfileData);

// router.post("/", createWorkExperience);

// //req.params
// router.get('/:id', getUserwithId);

// router.delete('/:id', deleteUserWithId);

// router.patch('/:id', patchUserWithId);

export default router;