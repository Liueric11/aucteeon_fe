import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Charts = React.lazy(() => import('./views/charts/Charts'))
const Charts = React.lazy(() => import('./views/charts/Charts'))

// DataTable
const Anggota = React.lazy(() => import('./views/dataTable/Anggota'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/anggota', name: 'Anggota', element: Anggota },
]

export default routes
