const projectsModel = require("../models/projects");

const getProjects = async (req, res, next) => {
  try {
    const projects = await projectsModel.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

const getProject = (req, res, next) => {
  res.send("Got one project");
};
/* title: { type: String, require: true },
subTitle: { type: String, require: true },
description: { type: String, require: true },
imageUrl: { type: String, require: false }, */
const createProject = async (req, res, next) => {
  try {
    const {
      body: { title, tech, description, imageUrl },
    } = req;
    const projects = await projectsModel.create({
      title,
      tech,
      description,
      imageUrl,
    });
    res.json(projects);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProject = (req, res, next) => {
  res.send("updated one!");
};

const deleteProject = (req, res, next) => {
  res.send("Deleted!");
};
module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
