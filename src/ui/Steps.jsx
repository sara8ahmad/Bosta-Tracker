import React from 'react'
import Stepper from './Stepper';
import { useTranslation } from 'react-i18next';

const Steps = ({shipment}) => {

 const { t } =useTranslation();
  return (
    <>
    <div className={` py-3 md:px-16 ` }>
      <Stepper shipment = {shipment}/>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-[-15px]">
      <div className={`text-xs font-medium text-white text-center p-[3px] leading-none rounded-full ${
      shipment.CurrentStatus.state === "DELIVERED"
      ? "bg-green-500"
      : shipment.CurrentStatus.state === "CANCELLED"
      ? "bg-red-500 "
      : shipment.CurrentStatus.state === "DELIVERED_TO_SENDER"
      ? "bg-yellow-500 "
      : "bg-white text-gray-500"
      }` }style={{width: `${shipment.CurrentStatus.state === "DELIVERED"? "100%" : "67%" }`}}>       
      </div>
      
    </div>
    <div className='flex gap-5 md:p-0 text-[11px] md:text-lg w-full justify-between mt-8 font-bold'>
      <div>{t("shipCreat")}</div>
      <div>{t("shipToSender")}</div>
      <div>{t("Out")}<br/> <span className={` font-bold md:font-semibold md:text-sm text-[11px] ${
       shipment.CurrentStatus.state === "CANCELLED"
      ? "text-red-500 "
      : shipment.CurrentStatus.state === "DELIVERED_TO_SENDER"
      ? "text-yellow-500 " : "hidden"}`}>{t("shipProblem")}</span> </div>
      <div className={`${ shipment.CurrentStatus.state === "DELIVERED"? "" : "text-slate-400"}`}>{t("delivered")}</div>
    </div>
    </div>
    </>
  );
};


export default Steps