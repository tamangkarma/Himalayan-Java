import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center  font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md my-10 mx-10 sm:mx-0 w-full">
        <h2 className="text-2xl font-bold text-coffee-900 mb-2 tracking-wide text-center">
          Contact Himalayan Java Coffee
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Have a question or want to say hello? Fill out the form below and we’ll get back to you soon!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-coffee-800 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 transition"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-coffee-800 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 transition"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-coffee-800 font-medium">Message</label>
            <textarea
              placeholder="Type your message..."
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 transition resize-vertical"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-900 border text-white py-2 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-coffee-800 text-center space-y-1 text-sm">
          <div>📍 Kathmandu, Nepal</div>
          <div>📞 +977-1-1234567</div>
          <div>✉️ info@himalayanjava.com</div>
        </div>
      </div>
    </div>
  )
}

export default Contact