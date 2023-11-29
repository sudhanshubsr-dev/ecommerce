import Nav from './Navigation/Nav.jsx'
import Products from './Products/products.jsx'
import Recommended from './Recommended/Recommended.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import Card from './components/Card.jsx'
import productdata from './db/data.js'
import { useState } from 'react'
import './index.css'


export default function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredItems = productdata.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  // RadioFilter
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  // Button Filter
  const handleButtonClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  // Unused function, you may remove it if not needed
  
  function filterData(productdata, selectedFilter, query) {
    let filteredProducts = productdata;
  
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selectedFilter) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selectedFilter ||
          color === selectedFilter ||
          company === selectedFilter ||
          newPrice === selectedFilter ||
          title === selectedFilter
      );
    }
  
    return filteredProducts.map(({ img, title, newPrice, star, reviews, prevPrice }) => (
      <Card key={Math.random()} img={img} title={title} newPrice={newPrice} star={star} reviews={reviews} prevPrice={prevPrice} />
    ));
    }
    const result = filterData(productdata, selectedCategory, query);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleButtonClick={handleButtonClick}/>
      <Products result={result}/>
      
    </>
  )
}


