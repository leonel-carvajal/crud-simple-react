import React ,{useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation:"Pegaso"
  },
  {
    id: 2,
    name: "Shyriu",
    constellation: "Dragón"
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne"
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda"
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix"
  }
  
]
const CrudApp = () => {
  const [bd, setBd] = useState(initialDb);
  const createData  =(data)=>{

  }
  const updateDate =(data)=>{

  }
  const deleteData = (id)=>{

  }

  return (
    <div>
      <h2>CRUD APP</h2>
        <CrudForm/>
        <CrudTable data={bd} />
    </div>
  )
}

export default CrudApp
