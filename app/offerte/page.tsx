"use client";

import { useState } from "react";

export default function Offerte() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    houseType: "tussenwoning",
    gasUsage: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 text-center border border-green-100">
           <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
             <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
             </svg>
           </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bedankt!
          </h2>
          <p className="text-gray-600 mb-8">
            We hebben uw aanvraag ontvangen. Eén van onze adviseurs neemt binnen 24 uur contact met u op.
          </p>
          <a
            href="/"
            className="text-green-600 font-bold hover:text-green-700 hover:underline"
          >
            Terug naar home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vraag een vrijblijvende offerte aan
          </h1>
          <p className="text-xl text-gray-500">
            Vul het formulier in en ontvang een advies op maat voor uw situatie.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Voornaam
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Achternaam
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                      />
                    </div>
                 </div>
                 <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Telefoonnummer
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                      />
                    </div>
                 </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Straat en huisnummer
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="street-address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                    Postcode
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      autoComplete="postal-code"
                      required
                      value={formData.zipcode}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Woonplaats
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                 <div>
                    <label htmlFor="houseType" className="block text-sm font-medium text-gray-700">
                      Type woning
                    </label>
                    <div className="mt-1">
                      <select
                        id="houseType"
                        name="houseType"
                        value={formData.houseType}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                      >
                        <option value="tussenwoning">Tussenwoning</option>
                        <option value="hoekwoning">Hoekwoning</option>
                        <option value="2-onder-1-kap">2-onder-1-kap</option>
                        <option value="vrijstaand">Vrijstaande woning</option>
                        <option value="appartement">Appartement</option>
                      </select>
                    </div>
                 </div>
                 <div>
                    <label htmlFor="gasUsage" className="block text-sm font-medium text-gray-700">
                      Jaarlijks gasverbruik (m³)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="gasUsage"
                        id="gasUsage"
                        placeholder="Bijv. 1500"
                        value={formData.gasUsage}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                      />
                    </div>
                 </div>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                  Opmerkingen
                </label>
                <div className="mt-1">
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    value={formData.comments}
                    onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                    placeholder="Heeft u specifieke wensen of vragen?"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 shadow-lg"
                >
                  Verstuur aanvraag
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
