const API_URL = 'https://tracking.bosta.co/shipments';


export async function getShipment(id) {
    try {
      const response = await fetch(`${API_URL}/track/${id}`);
      if (!response.ok) {
        throw new Error('Error fetching shipment data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      
      console.error(error);
      throw error;
    }
  }
