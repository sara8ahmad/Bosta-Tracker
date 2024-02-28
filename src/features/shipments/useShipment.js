import { useQuery } from "@tanstack/react-query"
import { getShipment } from "../../services/shipmentsApi"


export function useShipment(id) {

    const trackingId = parseInt(id)
    const {isLoading , data : shipment , error} = useQuery({
        queryKey: ['shipment' , id],
        queryFn :() => getShipment(trackingId)
        
      })
      return{isLoading , error , shipment}
    
}

