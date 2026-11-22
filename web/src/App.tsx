import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { DynastyPage } from './pages/DynastyPage'
import { EmpirePage } from './pages/EmpirePage'
import { HomePage } from './pages/HomePage'
import { InscriptionsPage } from './pages/InscriptionsPage'
import { KingPage } from './pages/KingPage'
import { KingsPage } from './pages/KingsPage'
import { MeikeerthisPage } from './pages/MeikeerthisPage'
import { PeoplePage } from './pages/PeoplePage'
import { RealmPage } from './pages/RealmPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="kings" element={<KingsPage />} />
        <Route path="meikeerthis" element={<MeikeerthisPage />} />
        <Route path="dynasty" element={<DynastyPage />} />
        <Route path="inscriptions" element={<InscriptionsPage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="realm" element={<RealmPage />} />
        <Route path="empire" element={<EmpirePage />} />
        <Route path="kings/:id" element={<KingPage />} />
      </Route>
    </Routes>
  )
}
