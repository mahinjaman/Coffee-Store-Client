import { useLoaderData } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import FunFact from './Components/FunFact'
import Gallery from './Components/Gallery'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Products from './Components/Products'
import { useState } from 'react'
import Swal from 'sweetalert2'

function App() {

  const loadedCoffees = useLoaderData();
  const [ coffees, setCoffees ] = useState(loadedCoffees);

  const handleDelete = id => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/delete/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=> {
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remainingCoffee = coffees.filter(coffee => coffee._id !== id)
            setCoffees(remainingCoffee)
          }
        })
        
      }
    });
    
  }

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <FunFact></FunFact>
      </div>
      <div className='mb-20'>
        <Products coffees={coffees} handleDelete={handleDelete}></Products>
      </div>
      <div className=''>
        <Gallery></Gallery>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
