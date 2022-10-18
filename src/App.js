
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/productsSlice';
import ListCofee from './Components/ListCofee';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './Components/About';
import { NavBar } from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './Components/Details';


function App() {
  const {data}=useSelector(state=>state.products)
  const dispatch=useDispatch();
  useEffect(()=>
  {
    dispatch(fetchProducts())
  },[dispatch])
  useEffect(()=>
  {
    console.log(data)
  },[data])

  const [searching, setSearching] = useState("")
  const handleSearch=(x)=>setSearching(x);

  
  return (
    <div className="App">
      <Router>
      <NavBar searching={searching} handleSearch={handleSearch} />
         <Routes>
          
          <Route path="/"
          element={<div>
          <Home/>
          <About/>
           <ListCofee list={data.filter(el=>el.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))}/></div>}></Route>

         <Route path="/product/:id" element={<Details list={data}/>}/>
         </Routes>
        </Router>
    </div>
  );
}

export default App;
