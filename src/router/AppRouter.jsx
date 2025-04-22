import { Route, Routes } from 'react-router'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={
          // <Route path='login/*' element={
          <PublicRoute>
            <LoginPage />
            {/* <Routes>
              <Route path='/*' element={<LoginPage />} />
            </Routes> */}
          </PublicRoute>
        } />
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}
