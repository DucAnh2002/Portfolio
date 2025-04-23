import { assets } from "../../assets/assets.ts"
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-section" id="portfolio">
      <h1>Latest Project</h1>
      <div className="portfolio-item">
        <img src={assets.portfolio1} alt="portfolio1" />
        <div className="portfolio-overlay">
          <h3>Food Delivery</h3>
          <p>This is a fullstack food delivery web project built with React (frontend), 
            Express + MongoDB (backend), and Tailwind CSS. The system includes user/admin role-based access control, 
            supports authentication with JWT, image uploads via Cloudinary, and simulates payment using Stripe.
              Users can register, place orders, and make payments, while admins can manage products and orders. 
              The UI is modern, and the code is clean—making it a great project for learning or as a 
              foundation for building a real-world food delivery system.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
