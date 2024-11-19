import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './userSlice'
import  servicesSlice from './serviceSlice'
import  reservationSlice  from './reservationSlice'
import  productSlice  from './productSlice'
import commandeSlice from './commandeSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    services: servicesSlice,
    reservations: reservationSlice,
    product: productSlice,
    commande: commandeSlice
  },
})