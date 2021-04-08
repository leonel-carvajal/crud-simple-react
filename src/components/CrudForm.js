import React,{useState,useEffect} from 'react'
import styled from 'styled-components';


const initialForm = {
  name: '',
  constellation:'',
  id:null
}
const InputText = styled.input`
  padding:0.8em;
  outline:none;
  border:1px solid #333;
  border-radius:5px;
  margin-right:10px;
  text-align:center;
`
const InputButton = styled.input`
  width:75px;
  padding:0.8em;
  outline:none;
  border:1px solid #333;
  margin-right:10px;
  border-radius:10px;
  background-color:${({ bg }) => bg};
  color:#fff;
  font-size:1em;
`
const CrudForm = () => {
  const [form, setform] = useState(initialForm);
  const handleChange = (e) => {
    
  }
  const handleSubmit = (e) => {
    
  }
  const handleReset = (e) => {
    
  }
  
  return (
    <div>
      <h3>Agregar</h3>
      <form  onSubmit={handleSubmit}>
        <InputText
          type='text'
          name='name'
          placeholder='Nombre'
          onChange={handleChange}
          value={form.name}
        />
        <InputText
          type='text'
          name='constellation'
          placeholder='constelación'
          onChange={handleChange}
          value={form.constellation}
        />
        <InputButton type='submit' value='Enviar' bg={'#924e7d'} />
        <InputButton type='reset' value='Limpiar' onClick={handleReset} bg='#3b83bd'/>
      </form>
    </div>
  )
}

export default CrudForm
