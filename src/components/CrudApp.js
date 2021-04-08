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
  const [datatoEdit, setdatatoEdit] = useState(null);

  const createData  =(data)=>{
    data.id = Date.now()
    setBd([...bd, data])
  }
  const updateData =(data)=>{
    let newData = bd.map(el => el.id === data.id ? data : el)
    setBd(newData)
  }
  const deleteData = (id)=>{
    let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id: ${id}?`)
    if (isDelete) {
      let newData = bd.filter(el => el.id !== id)
      setBd(newData)
    } else {
      return;
    }
  }

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm
        createData={createData}
        datatoEdit={datatoEdit}
        setdatatoEdit={setdatatoEdit}
        updateData={updateData}
        />
      <CrudTable
        data={bd}
        deleteData={deleteData}
        setdatatoEdit={setdatatoEdit}
        />
    </div>
  )
}

export default CrudApp
