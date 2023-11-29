
import { AiFillStar } from 'react-icons/ai'
import { FaShoppingBag } from 'react-icons/fa'
export default function Card({img, title, newPrice, star, reviews, prevPrice }) {
  return (
    <section className="card">
          <img src={img} alt={title} className='card-image'/>
          <div className="card-details">
            <h3 className="card-title">
              {title}
            </h3>
            <section className="card-reviews">
              <AiFillStar className='ratings-star' /><AiFillStar className='ratings-star' /><AiFillStar className='ratings-star' /><AiFillStar className='ratings-star' /><AiFillStar className='ratings-star' />
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
              <FaShoppingBag className='bag-icon'/>
              </div>
            </section>
          </div>
        </section>
  )
}
