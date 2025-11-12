/**
 * Projects Service
 * 
 * Servicio para manejar todas las operaciones relacionadas con proyectos
 */

import apiClient from '../api/apiClient';
import type { Project, CreateProjectData, UpdateProjectData } from '../interfaces/project.interface';

export const projectsService = {
  /**
   * Obtener todos los proyectos
   */
  async getAll(params?: {
    page?: number;
    limit?: number;
    status?: string;
    search?: string;
  }): Promise<{ projects: Project[]; total: number; page: number }> {
    const response = await apiClient.get('/projects', { params });
    return response.data;
  },

  /**
   * Obtener un proyecto por ID
   */
  async getById(id: string): Promise<Project> {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  },

  /**
   * Crear nuevo proyecto
   */
  async create(data: CreateProjectData): Promise<Project> {
    const response = await apiClient.post('/projects', data);
    return response.data;
  },

  /**
   * Actualizar proyecto
   */
  async update(id: string, data: UpdateProjectData): Promise<Project> {
    const response = await apiClient.put(`/projects/${id}`, data);
    return response.data;
  },

  /**
   * Eliminar proyecto
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/projects/${id}`);
  },

  /**
   * Obtener proyectos por cliente
   */
  async getByClient(clientId: string): Promise<Project[]> {
    const response = await apiClient.get(`/projects/client/${clientId}`);
    return response.data;
  },

  /**
   * Cambiar estado del proyecto
   */
  async updateStatus(id: string, status: string): Promise<Project> {
    const response = await apiClient.patch(`/projects/${id}/status`, { status });
    return response.data;
  },
};
