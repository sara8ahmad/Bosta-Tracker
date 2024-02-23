import { useState } from 'react'
import { Link } from 'react-router-dom'
import TrackShipment from './TrackShipment'
import { LANGUAGES } from '../constants'
import { useTranslation } from 'react-i18next'

export default () => {

    const [state, setState] = useState(false)
    const [openSearch , setOpenSearch] = useState(false)
    const { i18n, t } = useTranslation();

    const onChangeLang = (e) => {
      const lang_code = e.target.value;
      i18n.changeLanguage(lang_code);
    };

    const handleOpen = () => {
        setOpenSearch(true)
    }
    const handleclose = () => {
      setOpenSearch(false);
    };
  
    const navigationCenter = [
      { title: t("home"), path: "/" },
      { title: t("pricing"), path: "" },
      { title: t("contact"), path: "" },
  ]

    return (
        <nav className="bg-white border-b shadow-sm w-full md:fixed left-0 top-0 md:text-sm md:border-none">
            <div className="items-center text-[15px] font-bold px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-2 md:py-2 md:block">
                    <Link href="/">
                        <img
                            src="https://lever-client-logos.s3.us-west-2.amazonaws.com/4a536633-277c-4c83-afa7-586bfcce7dd0-1617121306276.png"
                            width={160}
                            height={80}
                            alt="Bosta logo"
                        />
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigationCenter.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 hover:text-red-500">
                                        <Link href={item.path} className=" mx-5 block">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                  </div>    
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                
                    <ul className="justify-end relative items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                       <li  className="text-gray-700 hover:text-red-500">
                            <Link onMouseEnter={handleOpen} className="block ml-3">{t("track")}</Link>

                            {openSearch && (
                            <div onMouseLeave={handleclose} className="absolute mt-2 w-60 p-6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                               <TrackShipment />
                              </div> )}
                       </li>  
                        
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <Link className="block py-3 text-center text-gray-700 hover:text-red-500 border rounded-lg md:border-none">
                                    {t("login")}
                                </Link>
                            </li>
                            <li>
                
                            <div className="relative w-auto max-w-full mx-auto ">
                            <select defaultValue={"en"} onChange={onChangeLang} className="w-full px-3 py-2 text-sm text-red-500 ">
                            {LANGUAGES.map(({ code, label }) => (
                             <option className='text-gray-700' key={code} value={code}>
                               {label}
                             </option>))}
                            </select>
                            </div>

                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

