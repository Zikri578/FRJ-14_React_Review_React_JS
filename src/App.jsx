import React from 'react'
import { Routes, Route } from 'react-router-dom'
import S1Component from './pages/S1Component'
import S2Props from './pages/S2Props'
import S4CondRendering from './pages/S4CondRendering'
import S3State from './pages/S3State'
import S5Lifecycle from './pages/S5Lifecycle'
import S6Router from './pages/S6Router'
// import S61RouterDetail from './pages/S61RouterDetail'
import S7Outlet from './pages/S7Outlet'
import S8ProtectedRoutes from './pages/S8ProtectedRoutes'

export default function App() {
  return (

    // Merupakan Route untuk pindah halaman
    <Routes>
      <Route path='/' element={<S1Component />} />
      <Route path='/props' element={<S2Props />} />
      <Route path='/state' element={<S3State />} />
      <Route path='/cond-rendering' element={<S4CondRendering />} />
      <Route path='/lifecycle' element={<S5Lifecycle />} />
      {/* <Route path='/routedetail/:id' element={<S61RouterDetail />} /> */}
      <Route path='/route' element={<S6Router />} />
      <Route path='/outlet' element={<S7Outlet />} />
      <Route path='/protected-routes' element={<S8ProtectedRoutes />} />
    </Routes>
  )
}
