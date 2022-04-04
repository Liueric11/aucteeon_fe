import React from 'react'
import DataTable from 'react-data-table-component'

const AnggotaTable = () => {
  const columns = [
    {
      name: 'Nama',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Jurusan',
      selector: (row) => row.jurusan,
      sortable: true,
    },
    {
      name: 'Angkatan',
      selector: (row) => row.angkatan,
      sortable: true,
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Eric Fernando',
      jurusan: 'Informatika',
      angkatan: 2020,
    },
    {
      id: 2,
      title: 'Guvian',
      jurusan: 'Informatika',
      angkatan: 2020,
    },
    {
      id: 3,
      title: 'Al Aqsa',
      jurusan: 'Informatika',
      angkatan: 2020,
    },
    {
      id: 4,
      title: 'Helmi Azhar',
      jurusan: 'Informatika',
      angkatan: 2020,
    },
    {
      id: 5,
      title: 'Khaliza Fania',
      jurusan: 'Informatika',
      angkatan: 2021,
    },
    {
      id: 6,
      title: 'Ripai Veri',
      jurusan: 'Informatika',
      angkatan: 2020,
    },
  ]

  return <DataTable columns={columns} data={data} selectableRows />
}

export default AnggotaTable
