import './price.css'
import Input from  '../../components/Input.jsx'

export default function Price({handleRadioChange}) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">
        Price
      </h2>
      <label htmlFor="" className="sidebar-label-container">
      <input onChange={handleRadioChange} type='radio' value="" name='test2' />
      <span className="checkmark"></span>All
    </label>
    <Input 
      hanldeRadioChange={handleRadioChange}
      value={50}
      title="0-50"
      name="test2"
    />
    <Input 
      hanldeRadioChange={handleRadioChange}
      value={100}
      title="50-100"
      name="test2"
    />
    <Input 
      hanldeRadioChange={handleRadioChange}
      value={150}
      title="100-150"
      name="test2"
    />
    <Input 
      hanldeRadioChange={handleRadioChange}
      value={250}
      title="Over 150"
      name="test2"
    />

    </div>
  )
}
