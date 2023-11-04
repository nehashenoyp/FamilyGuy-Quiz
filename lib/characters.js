import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters() {
    try {
        const response = await fetch(`${endpoint}/characters`);
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        // Handle errors such as network issues, invalid JSON, etc.
        console.error('Error fetching or parsing data:', error);
        throw error; // You can rethrow the error or handle it as per your application's requirements
      }
}

export async function getCharacterBySlug(slug) {
    const data = await fetch(`${endpoint}/characters/${slug}`)
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.json()
  }