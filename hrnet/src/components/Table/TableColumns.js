export const TableColumns = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Identity',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Birth Date',
        accessor: 'dateOfBirth',
      },
    ],
  },
  {
    Header: 'Address',
    columns: [
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'stateAbbrev',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
      },
    ],
  },

  {
    Header: 'Infos',
    columns: [
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
    ],
  },
]
