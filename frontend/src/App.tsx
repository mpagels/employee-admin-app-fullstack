import './App.css'
import TableView from './components/Tableview'
import SearchEmployee from './components/SearchEmployee'
import { useState } from 'react'
import Headline from './components/Headline'

export type Employee = {
  id: string
  firstName: string
  lastName: string
  role: 'CEO' | 'Coach' | 'Lead'
  email: string
}

const employees: Employee[] = [
  {
    id: '89926747-260C-D5A6-6DC9-706D93185190',
    firstName: 'Elaine',
    lastName: 'Hatfield',
    role: 'CEO',
    email: 'hatfieldelaine4971@neuefische.de',
  },
  {
    id: 'F8A3DE79-C698-113A-4187-618E5A7CA374',
    firstName: 'Burton',
    lastName: 'Whitehead',
    role: 'Coach',
    email: 'bwhitehead@neuefische.de',
  },
  {
    id: '4A50298B-2811-AB32-635F-9D6A687E1696',
    firstName: 'Lucy',
    lastName: 'Nguyen',
    role: 'Lead',
    email: 'lucy_nguyen1082@neuefische.de',
  },
  {
    id: '643B6133-B356-7E02-27B7-5A7D8E01267E',
    firstName: 'Sawyer',
    lastName: 'Pena',
    role: 'Lead',
    email: 'sawyer_pena7660@neuefische.de',
  },
  {
    id: 'B3D597DA-3A54-6E76-736C-BD83E332BEF7',
    firstName: 'Holmes',
    lastName: 'Mclaughlin',
    role: 'Coach',
    email: 'holmesmclaughlin@neuefische.de',
  },
  {
    id: '35C8E312-EE1C-84B8-808C-DC1A5F3E9D26',
    firstName: 'Avye',
    lastName: 'Myers',
    role: 'Coach',
    email: 'myers.avye@neuefische.de',
  },
  {
    id: '515979A2-B317-8DC7-53BC-D88D1F0A9F12',
    firstName: 'Sawyer',
    lastName: 'Nichols',
    role: 'Lead',
    email: 's.nichols@neuefische.de',
  },
  {
    id: 'F8CCB8BA-8456-15B8-BC90-C9A943CE17E6',
    firstName: 'Brody',
    lastName: 'Foster',
    role: 'Lead',
    email: 'brodyfoster@neuefische.de',
  },
  {
    id: '6537A483-6261-5A8B-96EC-2E03C43B2551',
    firstName: 'Dennis',
    lastName: 'Rios',
    role: 'Coach',
    email: 'rios.dennis8202@neuefische.de',
  },
  {
    id: 'E5ED8FF0-C66B-8C27-DDD3-0A38DA777C1E',
    firstName: 'Jackson',
    lastName: 'Alston',
    role: 'Coach',
    email: 'alston_jackson1944@neuefische.de',
  },
  {
    id: '6431C536-1FD5-1887-B222-88EE940A2A88',
    firstName: 'Azalia',
    lastName: 'Sullivan',
    role: 'Lead',
    email: 'sullivan.azalia9940@neuefische.de',
  },
  {
    id: '11156DBC-17B2-9B5E-93FA-B7FECE77F508',
    firstName: 'Carol',
    lastName: 'Velasquez',
    role: 'Lead',
    email: 'c.velasquez4722@neuefische.de',
  },
  {
    id: '54A1CB7C-A2C3-5FBD-DE11-6A4662534BB6',
    firstName: 'Courtney',
    lastName: 'Jimenez',
    role: 'Coach',
    email: 'c_jimenez567@neuefische.de',
  },
  {
    id: 'A846CD36-41A5-D16B-24AA-BBEED7B714C1',
    firstName: 'Wallace',
    lastName: 'Benjamin',
    role: 'Coach',
    email: 'benjamin_wallace1949@neuefische.de',
  },
  {
    id: 'CEB45379-731A-4C69-AF74-BF58D6C18892',
    firstName: 'Cade',
    lastName: 'Lowery',
    role: 'Lead',
    email: 'cadelowery2758@neuefische.de',
  },
  {
    id: 'CA71C8B4-AA19-D793-0065-73D892CC4E57',
    firstName: 'Orlando',
    lastName: 'Joseph',
    role: 'Lead',
    email: 'orlando_joseph2174@neuefische.de',
  },
  {
    id: 'E1221252-4B42-F99C-FCBC-37A5EA48BF2D',
    firstName: 'Zenia',
    lastName: 'Pope',
    role: 'Coach',
    email: 'z-pope4517@neuefische.de',
  },
  {
    id: '6C7BB4CF-EA24-649E-646C-B145AE71696A',
    firstName: 'Kylee',
    lastName: 'Ware',
    role: 'Coach',
    email: 'kylee-ware5588@neuefische.de',
  },
  {
    id: '54D90183-16E6-4670-DC6A-CAF81E3768F6',
    firstName: 'Raya',
    lastName: 'Pierce',
    role: 'Lead',
    email: 'r_pierce7291@neuefische.de',
  },
  {
    id: '289717C7-7A46-2E0B-38DF-CA107331F69A',
    firstName: 'Bertha',
    lastName: 'Mercado',
    role: 'Lead',
    email: 'mbertha4521@neuefische.de',
  },
  {
    id: '58FE4ADD-3648-EA72-B6A3-9EF8A66DE32C',
    firstName: 'Cassady',
    lastName: 'Whitney',
    role: 'Coach',
    email: 'whitney-cassady@neuefische.de',
  },
  {
    id: '62D35868-7231-7D7D-7238-9314641FCDC3',
    firstName: 'Joshua',
    lastName: 'Odom',
    role: 'Coach',
    email: 'joshuaodom3556@neuefische.de',
  },
  {
    id: '85EC3114-A05D-2514-26D3-88ACC8D0C247',
    firstName: 'Myles',
    lastName: 'Reid',
    role: 'Lead',
    email: 'm.reid@neuefische.de',
  },
  {
    id: '30145909-B304-8665-EAF5-A652AA8998CA',
    firstName: 'Matthew',
    lastName: 'Fischer',
    role: 'Lead',
    email: 'matthew.fischer3107@neuefische.de',
  },
  {
    id: '3FA2F056-6D09-6F94-0949-26491A9C9713',
    firstName: 'Robert',
    lastName: 'Blanchard',
    role: 'Coach',
    email: 'rblanchard7868@neuefische.de',
  },
]

function App() {
  const [searchInput, setSearchInput] = useState<string>('')

  function handleOnChange(newInput: string) {
    setSearchInput(newInput)
  }

  function resetSearchInput() {
    setSearchInput('')
  }
  const filteredEmployees: Employee[] = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
      searchInput === ''
  )
  return (
    <>
      <Headline label={'Employee list'} />
      <SearchEmployee
        onClick={resetSearchInput}
        onChange={handleOnChange}
        searchInput={searchInput}
      />
      <TableView employees={filteredEmployees} />
    </>
  )
}

export default App
