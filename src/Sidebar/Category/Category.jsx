
import './category.css'
import Input from '../../components/Input.jsx'

export default function Category({handleRadioChange}) {
  return (
    <div>
    <h2 className="sidebar-title">
      Category
    </h2>
    <div>
    <label htmlFor="" className="sidebar-label-container">
      <input onChange={handleRadioChange} type='radio' value="" name='test' />
      <span className="checkmark"></span>All
    </label>
    <Input 
      hanldeRadioChange={handleRadioChange}
      value="sneakers"
      title="Sneakers"
      name="test"
    />
    <Input 
      hanldeRadioChange={handleRadioChange}
      value="flats"
      title="Flats"
      name="test"
    />
    <Input 
      hanldeRadioChange={handleRadioChange}
      value="sandals"
      title="Sandals"
      name="test"
    />
    <Input 
      hanldeRadioChange={handleRadioChange}
      value="heels"
      title="Heels"
      name="test"
    />
   
    </div>
    </div>
  )
}
