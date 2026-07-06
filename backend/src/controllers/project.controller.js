import {
  createProjectService,
  getProjectService,
  getProjectByIdService,
  updateProjectService,
  deleteProjectService,
} from "../services/project.service.js";

export const createProject = async (req, res) => {
  try {
    const project = await createProjectService(req.body, req.user.id);
    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProject = async (req, res) => {
  try {
    const projects = await getProjectService(req.params.id, req.user.id);
    return res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await getProjectByIdService(req.params.id, req.user.id);
    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await updateProjectService(
      req.params.id,
      req.user.id,
      req.body,
    );
    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteProject = async (req, res) => {
    try{
        await deleteProjectService(req.params.id, req.user.id);
        return res.status(200).json({
        success: true,
        message: "Project deleted successfully",
        });  
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }  
}