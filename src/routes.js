import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './common/context/user';
import ApiData from './paginas/datos';
import Inicio from './paginas/inicio';

export default function AppRoutes() {
  return (

    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/dados" element={<ApiData />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
