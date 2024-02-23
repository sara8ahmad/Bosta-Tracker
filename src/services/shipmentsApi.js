const API_URL = 'https://tracking.bosta.co/shipments';


export async function getShipment(id) {

    return await fetch(`${API_URL}/track/${id}`)
                .then(res => res.json())
                .then(data => data)  }
