import { useTranslation } from 'react-i18next'
import TrackShipment from '../ui/TrackShipment'

export default function Home () {

  const { t } = useTranslation();
  console.log(t("homeSpan"))

  

    return (
      <section className="overflow-hidden mt-0 md:mt-20 sm:grid sm:grid-cols-2 sm:items-center p-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {t("homeTitle")}
          </h2>
    
          <p className=" text-gray-500 md:mt-4 md:block">
           {t("homeSpan")}
          </p>
    
          <div className="mt-4 md:mt-8">
            <TrackShipment />
          </div>
        </div>
      </div>
    
      <img
        alt=""
        src="https://www.truckdesire.de/gallerie/fulda2013/Fulda2013_115.JPG"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
        
    )
}