const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const fetchResources = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/resources`);
    if (!response.ok) throw new Error('Failed to fetch resources');
    return await response.json();
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
};

export const fetchResourceById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/resources/${id}`);
    if (!response.ok) throw new Error('Failed to fetch resource');
    return await response.json();
  } catch (error) {
    console.error('Error fetching resource:', error);
    throw error;
  }
};

export const createResource = async (resourceData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/resources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resourceData),
    });
    if (!response.ok) throw new Error('Failed to create resource');
    return await response.json();
  } catch (error) {
    console.error('Error creating resource:', error);
    throw error;
  }
};

export const updateResource = async (id, resourceData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/resources/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resourceData),
    });
    if (!response.ok) throw new Error('Failed to update resource');
    return await response.json();
  } catch (error) {
    console.error('Error updating resource:', error);
    throw error;
  }
};

export const deleteResource = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/resources/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete resource');
    return await response.json();
  } catch (error) {
    console.error('Error deleting resource:', error);
    throw error;
  }
};