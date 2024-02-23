
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppLayout from './pages/AppLayout'
import Error from './pages/Error'
import Home from './pages/Home'
import ShipmentsError from './pages/ShipmentsError'
import Shipment from './features/shipments/Shipment'
import { useTranslation } from 'react-i18next'


function App() {

  const queryClient = new QueryClient({
    defaultOptions : {
      queries :{
        staleTime : Infinity,
      }
    }
  });

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
  
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: "/shipments/track/:id",
          element: <Shipment />,
          errorElement: <ShipmentsError />,
  
        }
      
      ],
    },
  ]);
  

  return (
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} />
      <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
     <RouterProvider router={router} />
     </div>
     </QueryClientProvider>
  )
}


export default App
