import React from 'react'
import {getDayMonthYear, getTimeDayMonthYear} from '../services/helpers'
import { useTranslation } from 'react-i18next';

const ShipmentDetails = ({shipment}) => {

  const { t } = useTranslation();
   console.log(getTimeDayMonthYear(shipment.CurrentStatus.timestamp))
  return (
    <>
    <div className=' my-5 flex md:flex-row flex-col gap-4 p-5 w-full justify-around '>
            <div className=' flex flex-col gap-2 items-start'>
                <span className='text-slate-400 text-sm font-bold '>{t("shipNum")} {shipment.TrackingNumber} </span>
                <span className={`font-bold ${
                  shipment.CurrentStatus.state === "DELIVERED"
                  ? "text-green-500"
                  : shipment.CurrentStatus.state === "CANCELLED"
                  ? "text-red-500 "
                  : shipment.CurrentStatus.state === "DELIVERED_TO_SENDER"
                  ? "text-yellow-500 "
                  : " text-gray-500"
                  }`}> {t(shipment.CurrentStatus.state)} </span>
            </div>
            <div className=' flex flex-col gap-2 items-start'>
                <span className='text-slate-400 text-sm font-bold '>{t("update")}</span>
                <span className=' font-bold'> {getTimeDayMonthYear(shipment.CurrentStatus.timestamp)}  </span>
            </div>
            <div className=' flex flex-col gap-2 items-start'>
                <span className='text-slate-400 text-sm font-bold '>{t("client")} </span>
                <span className=' font-bold'> SOUQ.com </span>
            </div>
            <div className=' flex flex-col gap-2 items-start'>
                <span className='text-slate-400 text-sm font-bold '>{t("dateAt")}</span>
                <span className=' font-bold'> { getDayMonthYear(shipment.CurrentStatus.timestamp)} </span>
            </div>
     </div>
    </>
  )
}

export default ShipmentDetails