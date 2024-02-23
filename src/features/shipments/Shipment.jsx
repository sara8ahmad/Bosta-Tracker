import React from 'react'
import { useParams } from 'react-router-dom';
import { useShipment } from './useShipment';
import Steps from '../../ui/Steps'
import Table from '../../ui/Table'
import ShipmentDetails from '../../ui/ShipmentDetails'
import ShipmentAdress from '../../ui/ShipmentAdress'
import Loader from '../../pages/Loader';


const Shipment = () => {

const { id } = useParams();

const {isLoading , shipment } = useShipment(id)

console.log(shipment)

if(isLoading) return <Loader />
  
  return (

    <div className='grid grid-cols-12 gap-4 mt-0 md:mt-28 '>
      
    <div className='col-span-12 border-solid rounded-lg border-2 border-slate-100 mb-5 '>
        <ShipmentDetails shipment={shipment} />
    <div className='p-5 border-t border-slate-100' >
           <Steps shipment={shipment} />
    </div>
    </div>
    <div className=' col-span-12  md:col-span-7 lg:col-span-8 '>
        <Table shipment={shipment} />
     </div>

     <div className='col-span-12 md:col-span-5 lg:col-span-4 ' >
        <ShipmentAdress />
     </div>

    </div>
    
    
  )
}

export default Shipment;