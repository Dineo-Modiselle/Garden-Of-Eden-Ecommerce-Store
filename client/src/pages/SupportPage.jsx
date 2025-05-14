import React, { useState } from 'react';
import { 
  FaShoppingCart, FaLock, FaFlag, FaTruck, 
  FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok,
  FaWhatsapp, FaEnvelope, FaChevronDown
} from 'react-icons/fa';
import backGroundImage from '../assets/image2.jpeg';

export default function GardenOfEve() {
  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [openFAQ, setOpenFAQ] = useState(null);


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', messageForm);
    // Reset form after submission
    setMessageForm({ name: '', email: '', message: '' });
  };

  const faqData = [
    {
      question: "What products do you offer?",
      answer: "We offer a wide range of natural health and beauty products, carefully curated to support wellness and empowerment."
    },
    {
      question: "Where are you based?",
      answer: "We are proudly based in Pretoria, South Africa, and ship nationwide."
    },
    {
      question: "How can I become a vendor?",
      answer: "You can reach out to us via the contact form or WhatsApp to learn more about how to partner and sell with us."
    },
  ];
  
  return (
    <div className="">
     
      
     
      
      
      {/* Main Content */}
      <div className="bg-red-200 text-gray-800">
        {/* Hero Section */}
  <div
    style={{
      backgroundImage: `url(${backGroundImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    }}
    className="bg-gray-600 mx-4 my-6 rounded-lg p-6 text-center"
  >
    <h1 className="text-3xl font-bold text-pink-500 mb-4">Your Journey to Wellness and Empowerment</h1>
    <p className="text-gray-200 mb-4">Nourish Your Body, Fuel Dreams, Transform Lives</p>
    <button className="bg-pink-400 text-white px-6 py-2 rounded-md hover:bg-pink-500 transition">Sign Up</button>
  </div>
        
        {/* Benefits Section */}
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold text-pink-500 text-center mb-6">Benefits of Natural Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Benefit Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-pink-400">Luxurious and Authentic</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Offers soothing, aromatic experiences with natural scents.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Gives a sense of indulgence with high-quality, artisanal craftsmanship.</span>
                </li>
              </ul>
            </div>
            
            {/* Benefit Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-pink-400">Rich in Nutrients</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Packed with vitamins, antioxidants, and essential oils that rejuvenate your skin and hair.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Delivers nature's healing properties straight to your body.</span>
                </li>
              </ul>
            </div>
            
            {/* Benefit Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-pink-400">Better for Your Health</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Avoids harmful toxins like parabens, sulfates, and synthetic fragrances.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Reduces risk of allergies or long-term health concerns.</span>
                </li>
              </ul>
            </div>
            
            {/* Benefit Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-pink-400">Gentle on Your Skin</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Free from harsh chemicals that can irritate sensitive skin.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span>Nourishes with plant-based ingredients that work in harmony with your body.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Community Section */}
        <div className="px-4 py-6 text-center">
          <h2 className="text-2xl font-bold text-pink-500 mb-4">Let's grow together</h2>
          <p className="mb-6">
            Discover handpicked products that support your health, enhance your beauty, and align with your values. 
            Product creators become part of a community of passionate artisans, uplifting others while building a 
            legacy of empowerment and sustainability.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
            Join Our Community
          </button>
        </div>
        
        {/* Contact Section */}
        <div className="px-4 py-6  bg-white  rounded-lg shadow ">
          <h2 className="text-2xl font-bold text-pink-500 text-center mb-6">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="mb-2">Based in Pretoria, South Africa</p>
              
              <div className="flex items-center space-x-2 mb-2">
                <FaWhatsapp className="text-pink-500" />
                <span>WhatsApp / Call: 072 826 2448</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <FaEnvelope className="text-pink-500" />
                <span>tshepo@gardenofeve.co.za</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={messageForm.name}
                    onChange={handleFormChange}
                    placeholder="Your Name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={messageForm.email}
                    onChange={handleFormChange}
                    placeholder="Your Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={messageForm.message}
                    onChange={handleFormChange}
                    placeholder="Your Message"
                    rows="3"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaFacebook className="text-pink-500" />
                  <div>
                    <div className="font-bold">Facebook</div>
                    <p className="text-sm">Share stories, get expert tips, and be part of our supportive network.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <FaTwitter className="text-pink-500" />
                  <div>
                    <div className="font-bold">X (Twitter)</div>
                    <p className="text-sm">Follow us for bite-sized wisdom and behind-the-scenes peeks.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <FaYoutube className="text-pink-500" />
                  <div>
                    <div className="font-bold">YouTube</div>
                    <p className="text-sm">Watch product reviews, founder stories, and natural health tutorials.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <FaInstagram className="text-pink-500" />
                  <div>
                    <div className="font-bold">Instagram</div>
                    <p className="text-sm">Scroll through stunning product showcases and daily wellness inspiration.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <FaTiktok className="text-pink-500" />
                  <div>
                    <div className="font-bold">TikTok</div>
                    <p className="text-sm">Quick tips, product hacks, and trending natural health content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Policies Section */}
        <div className="px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Returns Policy */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <FaShoppingCart className="text-pink-500 text-2xl mx-auto mb-2" />
              <h3 className="text-lg font-bold text-pink-500 mb-2">Returns Policy</h3>
              <ul className="text-sm text-left mb-2">
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Hassle-free returns</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Satisfaction guaranteed</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Quick and efficient processing</span>
                </li>
              </ul>
              <a href="#" className="text-pink-500 text-sm">Learn More →</a>
            </div>
            
            {/* Privacy Policy */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <FaLock className="text-pink-500 text-2xl mx-auto mb-2" />
              <h3 className="text-lg font-bold text-pink-500 mb-2">Privacy Policy</h3>
              <ul className="text-sm text-left mb-2">
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Respect for your data</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Transparency</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Security</span>
                </li>
              </ul>
              <a href="#" className="text-pink-500 text-sm">Learn More →</a>
            </div>
            
            {/* Terms & Conditions */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <FaFlag className="text-pink-500 text-2xl mx-auto mb-2" />
              <h3 className="text-lg font-bold text-pink-500 mb-2">Terms & Conditions</h3>
              <ul className="text-sm text-left mb-2">
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Clarity</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Fairness</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Compliance</span>
                </li>
              </ul>
              <a href="#" className="text-pink-500 text-sm">Learn More →</a>
            </div>
            
            {/* Shipping Policy */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <FaTruck className="text-pink-500 text-2xl mx-auto mb-2" />
              <h3 className="text-lg font-bold text-pink-500 mb-2">Shipping Policy</h3>
              <ul className="text-sm text-left mb-2">
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Multiple shipping methods</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Fast processing times</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-400 mr-1">✓</span>
                  <span>Order tracking & support</span>
                </li>
              </ul>
              <a href="#" className="text-pink-500 text-sm">Learn More →</a>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
       
          
            
           {/* FAQ Section */}
<div className="px-4 py-6">
  <h2 className="text-2xl font-bold text-pink-500 text-center mb-6">Frequently Asked Questions</h2>

  <div className="space-y-4">
    {faqData.map((faq, index) => {
      const isOpen = openFAQ === index;

      return (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenFAQ(isOpen ? null : index)}
          >
            <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
            <FaChevronDown
              className={`transition-transform duration-300 text-pink-500 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
          {isOpen && (
            <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
          )}
        </div>
      );
    })}
  </div>
</div>

        
     
      
      </div>
    </div>
  
    
  )
  
}

