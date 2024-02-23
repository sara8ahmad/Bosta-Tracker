import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: "Home",
          pricing: "Pricing",
          contact: "Contact us",
          track:"Track Shipment",
          login:"Login",

          homeTitle:"Join A New Generation Of Logistics!",
          homeSpan:"Redefining how you ship, track, collect, deliver all through innovative tech-solutions and efficient operations.",

          shipNum:"Shipment Number",
          update:"Last update",
          client:"Client Name",
          date:"Delivery Time",

          shipDet: "Shipment Details",
          shipAdress: "Shipment Adress",
          branch:"Branch",
          date:"Date",
          time:"Time",
          details:"Details",


          adress:"123 Main Maddi Street Anytown, Cairo 12345 Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          problem:"Is there any Problem with your Shipment ?! ",
          problemButton:"Report a Problem",

          shipCreat:"Shipment Created",
          shipToSender:"Delivered to Sender",
          Out:"Out For Delivery",
          delivered:"Delivered",
          shipProblem:"the customer is not in the address",
          trackingNo:"Tracking no",
           
          // API Data 

          'TICKET_CREATED': "Ticket Created",
          'CANCELLED': "Cancelled",
          "PACKAGE_RECEIVED" : "Package Received",
          "IN_TRANSIT" : "In Transit",
          "NOT_YET_SHIPPED" : "Not Yet Shipped",
          "OUT_FOR_DELIVERY":"Out for Delivery",
          "DELIVERED":"Delevired",
          "NOT_YET_SHIPPED":"Not yet Shipped",
          "DELIVERED_TO_SENDER":"Delivered to Sender",
          "WAITING_FOR_CUSTOMER_ACTION":"Waiting for Customer Action",
          "تأجيل - العميل طلب التاجيل ليوم اخر":"the customer requested postponement for another day"

        },
      },
      ar: {
        translation: {
          home: "الصفحة الرئيسية",
          pricing: "الأسعار",
          contact: "كلم المبيعات",
          track:"تتبع شحنتك",
          login:"تسجيل الدخول",

          homeTitle:"انضم إلى جيل جديد من الخدمات اللوجستية!",
          homeSpan:" مفهوم جديد للشحن والتتبع والتجميع والتوصيل، كل ذلك من خلال حلول تقنية مبتكرة وعمليات فعالة.",

          shipNum:"رقم الشحنه",
          update:"اخر تحديث",
          client:"اسم التاجر",
          dateAt:"موعد التسليم خلال",
          

          shipDet: "تفاصيل الشحنه",
          shipAdress: "عنوان التسليم",
          branch:"الفرع",
          date:"التاريخ",
          time:"الوقت",
          details:"التفاصيل",


          adress:"معادي السرايات الغربية، 6 حي المعادي، محافظة القاهر ه شارع المعادي" ,
          problem:"هل يوجد مشكلة في شحنتك ؟",
          problemButton:"الأابلاغ عن مشكلة",


          shipCreat:"تم أنشاء الشحنة",
          shipToSender:"تم استلام الشحنه من التاجر",
          Out:"الشحنة خرجت للتسليم",
          delivered:"تم التسليم",
          shipProblem:"العميل غير متواجد في العنوان",
          trackingNo:"رقم التتبع",

          // API Data 
          
          'TICKET_CREATED': "تم إنشاء الشحنة",
          'CANCELLED': "تم الغاء الشحنة",
          "PACKAGE_RECEIVED" : "تم استلام الشحنة من التاجر",
          "IN_TRANSIT" : "الشحنه خرجت للتسليم",
          "NOT_YET_SHIPPED" : "الشحنة لم تصل بعد",
          "OUT_FOR_DELIVERY":"الشحنه خرجت للتسليم",
          "DELIVERED":"تم شحن الشحنة",
          "NOT_YET_SHIPPED":"لم يتم تسليم الشحنة",
          "DELIVERED_TO_SENDER":"تم استلام الشحنة من التاجر",
          "WAITING_FOR_CUSTOMER_ACTION":"في انتظار إجراء العميل",

          "Cairo Sorting Facility": "مركز الفرز بالقاهرة",
          "Tanta Hub":"مركز طنطا",
          "Haram Hub":"مركز الهرم",
          "FM & Reverse Hub":"FM & Reverse مركز ",


          "Postponed - the customer requested postponement for another day." :"العميل طلب التأجيل ليوم اخر ",
          "Retry delivery - the customer is not in the address.": " أعادة المحاولة العميل غير متواجد في العنوان ",
          "Customer is not answering.":"العميل لا يرد علي الاتصال",
          "تأجيل - العميل طلب التاجيل ليوم اخر": "العميل طلب التأجيل ليوم اخر"


        },
      },
      
    },
  });

export default i18n;