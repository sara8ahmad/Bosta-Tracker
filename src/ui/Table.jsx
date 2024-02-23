import { getDayMonthYear, getTime } from "../services/helpers"
import { useTranslation } from "react-i18next";

export default function Table({shipment}) {
  const { t ,i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <p className='mb-4 font-bold text-base text-gray-700'> {t("shipDet")} </p>
          <div className="shadow-sm border rounded-lg overflow-x-auto">
              <table className={`w-full table-auto text-sm ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
                  <thead className="bg-gray-50 text-gray-400 font-medium p-3 border-b">
                      <tr>
                          <th className="py-3 px-6">{t("branch")}</th>
                          <th className="py-3 px-6">{t("date")}</th>
                          <th className="py-3 px-6">{t("time")}</th>
                          <th className="py-3 px-6">{t("details")}</th>
                      </tr>
                  </thead>
                  <tbody className="text-gray-500 font-semibold text-[14px] divide-y">
                      {
                          shipment.TransitEvents.map((item, idx) => (
                              <tr key={idx}>
                                  <td className="px-6 py-4 whitespace-nowrap">{t(item.hub)}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{ getDayMonthYear(item.timestamp)}</td>
                                  <td className={`px-6 py-4 whitespace-nowrap ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>{getTime(item.timestamp)}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{t(item.state)} <br/> <span className={`text-[12px] ${ shipment.CurrentStatus.state === "CANCELLED"
                                  ? "text-red-500 " : shipment.CurrentStatus.state === "DELIVERED_TO_SENDER"
                                  ? "text-yellow-500 " : "text-green-500"}`}>{t(item.reason)}</span> </td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
          </div>
      </div>
  )
}