"use client";

import { useState } from "react";
import * as fpixel from "@/lib/fpixel";
import { sendContactEvent } from "../actions/facebook-events";

export default function Advies() {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Create a unique event ID for deduplication
    const eventId = `lead-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/mlgdregl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          voornaam: formData.firstName,
          achternaam: formData.lastName,
          email: formData.email,
          telefoon: formData.phone,
          adres: formData.address,
          postcode: formData.zipcode,
          woonplaats: formData.city,
          woningtype: formData.houseType,
          gasverbruik: formData.gasUsage,
          opmerkingen: formData.comments,
        }),
      });

      if (!response.ok) {
        throw new Error("Er is iets misgegaan bij het versturen van het formulier.");
      }

      // 1. Client-side tracking (Facebook Pixel)
      fpixel.event("Contact", {}, { eventID: eventId });

      // 2. Server-side tracking (Facebook Conversion API)
      sendContactEvent({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        zipcode: formData.zipcode,
        city: formData.city,
        eventId: eventId,
        url: window.location.href,
      });

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er is een fout opgetreden. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
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
            We hebben uw aanvraag voor een adviesgesprek ontvangen. Eén van onze adviseurs neemt binnen 24 uur contact met u op.
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
            Vraag een vrijblijvend adviesgesprek aan
          </h1>
          <p className="text-xl text-gray-500">
            Vul het formulier in en ontvang persoonlijk advies op maat voor uw situatie.
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

              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-base font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verzenden...
                    </>
                  ) : (
                    "Adviesgesprek aanvragen"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
