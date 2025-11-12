/**
 * Project Interfaces
 * 
 * Interfaces para proyectos
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  clientId: string;
  clientName?: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  startDate: string;
  endDate?: string;
  budget?: number;
  progress: number;
  assignedUsers: string[];
  technologies: string[];
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectData {
  name: string;
  description: string;
  clientId: string;
  status?: string;
  priority?: string;
  startDate: string;
  endDate?: string;
  budget?: number;
  assignedUsers?: string[];
  technologies?: string[];
  category?: string;
}

export interface UpdateProjectData extends Partial<CreateProjectData> {
  progress?: number;
}

export interface ProjectFilters {
  status?: string;
  priority?: string;
  clientId?: string;
  search?: string;
  page?: number;
  limit?: number;
}
