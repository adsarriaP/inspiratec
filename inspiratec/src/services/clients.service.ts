/**
 * Clients Service
 * 
 * Servicio para manejar todas las operaciones relacionadas con clientes
 */

import apiClient from '../api/apiClient';
import type { Client, CreateClientData, UpdateClientData } from '../interfaces/client.interface';

export const clientsService = {
  /**
   * Obtener todos los clientes
   */
  async getAll(params?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<{ clients: Client[]; total: number }> {
    const response = await apiClient.get('/clients', { params });
    return response.data;
  },

  /**
   * Obtener un cliente por ID
   */
  async getById(id: string): Promise<Client> {
    const response = await apiClient.get(`/clients/${id}`);
    return response.data;
  },

  /**
   * Crear nuevo cliente
   */
  async create(data: CreateClientData): Promise<Client> {
    const response = await apiClient.post('/clients', data);
    return response.data;
  },

  /**
   * Actualizar cliente
   */
  async update(id: string, data: UpdateClientData): Promise<Client> {
    const response = await apiClient.put(`/clients/${id}`, data);
    return response.data;
  },

  /**
   * Eliminar cliente
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`/clients/${id}`);
  },
};
