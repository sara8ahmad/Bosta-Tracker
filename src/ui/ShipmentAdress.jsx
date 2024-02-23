import React from 'react'
import { useTranslation } from 'react-i18next';

const ShipmentAdress = () => {
   
  const { t } = useTranslation();

  return (
    <>
    <p className='mb-4 font-bold text-base text-gray-700'> {t("shipAdress")} </p>
        <p className='bg-slate-50 text-sm font-semibold text-gray-500 border-solid rounded-lg border-2 border-slate-50 p-4'>{t("adress")} </p>
        <div className=' flex justify-center items-center gap-3 border-solid rounded-lg border-2 border-slate-100 mt-2 p-4'>
            <img className='w-32 h-32 object-cover' src='https://vaweapps.com/uploads/medium/working-concept-illustration_114360-450_medium-600x600_medium-600x600.jpg' alt='' />
            <div className='flex flex-col gap-3'>
                <span className='text-black font-bold'> {t("problem")}  </span>
                <button className='bg-red-600 px-6 py-2 text-white text-sm font-bold rounded-lg'> {t("problemButton")} </button>
            </div>
       </div>
    </>
  )
}

export default ShipmentAdress