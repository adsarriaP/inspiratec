/**
 * Client Interfaces
 * 
 * Interfaces para clientes
 */

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  city?: string;
  country?: string;
  website?: string;
  industry?: string;
  contactPerson?: string;
  notes?: string;
  status: 'active' | 'inactive' | 'potential';
  projectsCount?: number;
  totalRevenue?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateClientData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  city?: string;
  country?: string;
  website?: string;
  industry?: string;
  contactPerson?: string;
  notes?: string;
}

export interface UpdateClientData extends Partial<CreateClientData> {
  status?: 'active' | 'inactive' | 'potential';
}
