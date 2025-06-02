import React from 'react'

const About = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center font-sans">
      <div className="bg-white/90 p-10 rounded-2xl shadow-2xl max-w-2xl my-14 mx-10 sm:mx-0 w-full">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=128&q=80"
            alt="Himalayan Java Coffee"
            className="w-24 h-24 rounded-full shadow-lg border-4 border-coffee-400 mb-4 object-cover"
          />
          <h2 className="text-3xl font-bold text-coffee-900 mb-2 tracking-wide text-center">
            About Himalayan Java Coffee
          </h2>
          <p className="text-coffee-700 text-center max-w-lg">
            Brewing passion since 1999
          </p>
        </div>
        <div className="space-y-5 text-coffee-800 text-lg leading-relaxed">
          <p>
            <span className="font-semibold text-coffee-900">Himalayan Java Coffee</span> is Nepal’s first specialty coffee house, established in 1999. We are dedicated to serving the finest hand-roasted coffee, sourced directly from the lush hills of Nepal. Our mission is to create a warm, welcoming space for coffee lovers and communities to connect.
          </p>
          <p>
            Our beans are ethically sourced from local farmers, ensuring every cup supports sustainable agriculture and empowers Nepali communities. We believe in quality, sustainability, and the art of coffee making.
          </p>
          <p>
            Whether you’re here for a quick espresso, a cozy chat, or to discover the rich flavors of Nepali coffee, Himalayan Java is your home away from home.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center space-y-2 text-coffee-700 text-sm">
          <div>📍 Kathmandu, Nepal</div>
          <div>🌱 Ethically Sourced • Locally Roasted • Community Driven</div>
          <div>☕ Since 1999</div>
        </div>
      </div>
    </div>
  )
}

export default About