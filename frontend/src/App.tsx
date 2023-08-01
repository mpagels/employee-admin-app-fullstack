import './App.css'

type Employee = {
  id: string
  firstName: string
  lastName: string
  role: 'CEO' | 'Coach' | 'Lead'
  email: string
}

const employees: Employee[] = [
  {
    id: '7E230729-9CAE-9B14-32E2-175C3363094F',
    firstName: 'Jack',
    lastName: 'Kane',
    role: 'CEO',
    email: 'kane-jack3968@neuefische.de',
  },
  {
    id: 'A99C43C9-4ADD-FE53-2375-BE2CCD5826BB',
    firstName: 'Meredith',
    lastName: 'Wilson',
    role: 'CEO',
    email: 'wilson-meredith@neuefische.de',
  },
  {
    id: '2256128C-EC11-179B-9F97-4A7F2D3D8C60',
    firstName: 'Burton',
    lastName: 'Mcintosh',
    role: 'Coach',
    email: 'b.mcintosh8655@neuefische.de',
  },
  {
    id: 'D96E07AB-5B80-A2BB-EE30-EA3EB99C4244',
    firstName: 'Zane',
    lastName: 'Shields',
    role: 'Coach',
    email: 'zaneshields6722@neuefische.de',
  },
  {
    id: 'BDC28390-419A-CAD3-ECE3-042D196881FF',
    firstName: 'Karly',
    lastName: 'Cobb',
    role: 'Lead',
    email: 'cobbkarly@neuefische.de',
  },
  {
    id: '1DCF426B-7D9B-74E8-2999-BB101B1A7626',
    firstName: 'Naomi',
    lastName: 'Ayers',
    role: 'Lead',
    email: 'nayers@neuefische.de',
  },
  {
    id: '3C2ECDE1-DA13-9E14-8B88-06E15B6E1F78',
    firstName: 'Isaiah',
    lastName: 'Mccormick',
    role: 'CEO',
    email: 'i.mccormick@neuefische.de',
  },
  {
    id: 'ABF1B3A5-1EDA-D763-169A-DC652FB9CFD7',
    firstName: 'Karen',
    lastName: 'Atkins',
    role: 'CEO',
    email: 'karen_atkins@neuefische.de',
  },
  {
    id: 'F93B2D84-32FA-A2D6-5516-B0C0426BFB15',
    firstName: 'Melvin',
    lastName: 'Watts',
    role: 'Coach',
    email: 'melvinwatts3658@neuefische.de',
  },
  {
    id: 'C2B7A149-AA26-139D-3274-165A2CB88C90',
    firstName: 'Nero',
    lastName: 'Spears',
    role: 'Coach',
    email: 'nspears1706@neuefische.de',
  },
  {
    id: 'A973631D-E995-52E6-C252-71849274B69B',
    firstName: 'Devin',
    lastName: 'Kelley',
    role: 'Lead',
    email: 'k-devin@neuefische.de',
  },
  {
    id: '46A3DA42-A891-E46A-BEB7-AE4BC3C43AC4',
    firstName: 'Rhoda',
    lastName: 'Rasmussen',
    role: 'Lead',
    email: 'r-rasmussen7587@neuefische.de',
  },
  {
    id: '03EB41B5-0D99-B551-B449-1719816528AD',
    firstName: 'Brett',
    lastName: 'Baxter',
    role: 'CEO',
    email: 'bbaxter@neuefische.de',
  },
  {
    id: '8BA9642C-1179-C173-4DC4-57C40C58B578',
    firstName: 'Rae',
    lastName: 'Lynch',
    role: 'CEO',
    email: 'lynch.rae@neuefische.de',
  },
  {
    id: 'A2E7414E-22E6-75B2-FF18-DDA48CCB5884',
    firstName: 'Cecilia',
    lastName: 'Clark',
    role: 'Coach',
    email: 'cecilia.clark@neuefische.de',
  },
  {
    id: 'EECB1B6C-6962-811B-8EE6-598815787207',
    firstName: 'Harrison',
    lastName: 'Wade',
    role: 'Coach',
    email: 'w_harrison7350@neuefische.de',
  },
  {
    id: '8574E836-BC9A-43E1-EED0-68CCB2B6A4E1',
    firstName: 'Kristen',
    lastName: 'Paul',
    role: 'Lead',
    email: 'paulkristen6536@neuefische.de',
  },
  {
    id: 'D3DC216B-57BB-C9EE-B6CA-B6CBBBCE4C48',
    firstName: 'Ayanna',
    lastName: 'Hartman',
    role: 'Lead',
    email: 'a_hartman@neuefische.de',
  },
  {
    id: '5456145F-541B-1A48-EB12-6E6072CC3CE5',
    firstName: 'Thomas',
    lastName: 'Wooten',
    role: 'CEO',
    email: 'wooten-thomas@neuefische.de',
  },
  {
    id: '217CB4C1-6EF8-656A-278F-C5648FBDA82B',
    firstName: 'Stewart',
    lastName: 'Fitzgerald',
    role: 'CEO',
    email: 'fitzgeraldstewart4604@neuefische.de',
  },
  {
    id: 'CA420596-66FC-6428-7692-EA2F2E0BE23B',
    firstName: 'Neville',
    lastName: 'Mendez',
    role: 'Coach',
    email: 'nmendez@neuefische.de',
  },
  {
    id: 'B63716E2-F386-B5F3-C5EB-3B1AA27FC974',
    firstName: 'Yoshio',
    lastName: 'Riddle',
    role: 'Coach',
    email: 'riddleyoshio4734@neuefische.de',
  },
  {
    id: '999E8BDB-E5E3-8823-D945-786D1A65838D',
    firstName: 'Ciaran',
    lastName: 'Elliott',
    role: 'Lead',
    email: 'elliott-ciaran@neuefische.de',
  },
  {
    id: '61E9FB73-C23B-C3CE-E29D-BB4CF096747A',
    firstName: 'Nash',
    lastName: 'Martin',
    role: 'Lead',
    email: 'n.martin@neuefische.de',
  },
  {
    id: 'C8FB4C8B-7B5C-EC97-6484-A2635B87EB7C',
    firstName: 'Jael',
    lastName: 'Hess',
    role: 'CEO',
    email: 'hessjael8308@neuefische.de',
  },
]

function App() {
  return <>hello world</>
}

export default App
