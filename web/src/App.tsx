import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { DynastyPage } from './pages/DynastyPage'
import { HomePage } from './pages/HomePage'
import { KingPage } from './pages/KingPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="dynasty" element={<DynastyPage />} />
        <Route path="kings/:id" element={<KingPage />} />
      </Route>
    </Routes>
  )
}
