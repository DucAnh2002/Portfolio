import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='about' id='about'>
        
        <div className='about-left'>
            <h1>About Me</h1>
            <img src={assets.logo2} alt="logo2" />
        </div>
        <div className='about-right'>
        <h2>WEB DESIGNER &amp; FRONTEND DEVELOPER</h2>
            <p>With a deep passion for Web Development, I have proactively 
                completed user-interface projects—ranging from building responsive layouts with 
                React to optimizing performance and user experience. Over the next three years, I aim to broaden my 
                expertise into Back-End technologies (Node.js, Express, SQL/NoSQL databases) and develop DevOps skills, 
                with the goal of becoming a Senior Full-Stack Engineer proficient in both front-end and back-end.
            </p>
            <div className='about-right-info'>
                
                <div className="info-grid">
                    <ul>
                    <li><strong>› Full Name:</strong> Ha Duc Anh</li>
                    <li><strong>› Birthday:</strong> 02/01/2002</li>
                    <li><strong>› Website:</strong> My site</li>
                    <li><strong>› Phone:</strong> (+84) 832229447</li>
                    <li><strong>› City:</strong> Ho Chi Minh City, VietNam</li>
                    </ul>
                    <ul>
                    <li><strong>› Age:</strong> 23</li>
                    <li><strong>› Degree:</strong> Low Lever Dev</li>
                    <li><strong>› Email:</strong> haducanh02012002@gmail.com</li>
                    </ul>
                    <ul>
                    <li><strong>› EDUCATION:</strong> Ho Chi Minh City University of Transport</li>        
                    <p>› 10/2020 - 11/2024</p>
                    <p>Specialization: Infomation Technology</p>
                    <li><strong>English:</strong> Basic communication</li>
                    </ul>
                </div>
                <button className='btn' onClick={()=> window.open('/HaDucAnh.pdf', '_blank')}>Download CV</button>
            </div>
        </div>
    </div>
  )
}

export default About
