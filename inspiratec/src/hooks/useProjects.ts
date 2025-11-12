/**
 * useProjects Hook
 * 
 * Hook personalizado para manejar operaciones de proyectos
 */

import { useState } from 'react';
import { projectsService } from '../services/projects.service';
import type { Project, CreateProjectData, UpdateProjectData } from '../interfaces/project.interface';

export const useProjects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getProjects = async (params?: any) => {
    setLoading(true);
    setError(null);
    try {
      const data = await projectsService.getAll(params);
      return data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProjectById = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await projectsService.getById(id);
      return data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (data: CreateProjectData) => {
    setLoading(true);
    setError(null);
    try {
      const project = await projectsService.create(data);
      return project;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async (id: string, data: UpdateProjectData) => {
    setLoading(true);
    setError(null);
    try {
      const project = await projectsService.update(id, data);
      return project;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await projectsService.delete(id);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
  };
};
