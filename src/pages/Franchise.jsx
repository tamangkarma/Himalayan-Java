// FranchisePage.jsx
import React from 'react';

export default function FranchisePage() {
  return (
    <div className="bg-white text-gray-800 px-4 py-12 max-w-5xl mx-auto space-y-12">
      
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-brown-700">Join the Franchise Family</h1>
        <h2 className="text-2xl text-brown-500">Brewing Success Together!</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join the coffee revolution in Nepal. Being a Himalayan Java franchisee means being part of something genuinely unique and Nepali. Leave your mark on Nepal’s coffee culture—or even globally.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-xl font-semibold text-brown-600">Operational Finesse</h3>
          <p className="text-gray-600">Join Nepal’s largest café brand and be part of our daily operational excellence.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-600">Brand Value</h3>
          <p className="text-gray-600">Leverage Himalayan Java’s brand reputation and customer love to kickstart your journey.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brown-600">Unique Identity</h3>
          <p className="text-gray-600">Stand out with a brand that represents Nepal’s rich coffee heritage.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-brown-700">Himalayan Java Franchise Process</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-brown-600">1. Inquire and Meet Us</h3>
            <p className="text-gray-600">Fill the form, and our Franchise team will answer all your questions and provide more details.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brown-600">2. Create a Plan</h3>
            <p className="text-gray-600">Submit your application. Once approved, we’ll help design a café plan tailored for you.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brown-600">3. Training & Setup</h3>
            <p className="text-gray-600">From staffing to design and setup, we’ll help you every step of the way.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-brown-700">Franchise Inquiry Form</h2>
        <form className="grid gap-6 md:grid-cols-2">
          <input type="text" placeholder="Full Name*" className="p-3 border rounded" required />
          <input type="email" placeholder="Email*" className="p-3 border rounded" required />
          
          <select className="p-3 border rounded">
            <option value="national">Flagship: National</option>
          </select>
          
          <input type="text" placeholder="Preferred Location*" className="p-3 border rounded" required />
          <input type="number" placeholder="Budget*" defaultValue={70000} className="p-3 border rounded" required />
          <input type="text" placeholder="Planned Opening Date*" className="p-3 border rounded" required />

          <div className="space-y-2">
            <label className="block font-medium">Do you have experience owning a franchise?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="franchiseExp" value="yes" /> Yes</label>
              <label><input type="radio" name="franchiseExp" value="no" /> No</label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Are you part of the food service industry?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="foodIndustry" value="yes" /> Yes</label>
              <label><input type="radio" name="foodIndustry" value="no" /> No</label>
            </div>
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-amber-600 text-white py-3 rounded hover:bg-amber-800 transition">
              Submit Inquiry
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
