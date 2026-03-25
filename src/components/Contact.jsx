import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // --- CONFIGURATION ---
    // 1. Register at emailjs.com
    // 2. Connect your Gmail (danduleeladlvvs1@gmail.com)
    // 3. Create a template and paste the IDs below:
    const SERVICE_ID = "service_fg568lq";   // Replace with your Service ID
    const TEMPLATE_ID = "template_pb1bako"; // Replace with your Template ID
    const PUBLIC_KEY = "eDXHD1eeySZrdSVdt";  // Replace with your Public Key

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      // Step 1: Send the Email
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      // Step 2: Prepare WhatsApp Reminder
      const myNumber = "919177753027"; // Dandu Leela's Number 
      const text = `*New Portfolio Message!*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
      const whatsappUrl = `https://wa.me/${myNumber}?text=${text}`;

      alert("Success! Your message was sent to my Email. Opening WhatsApp for a quick reminder...");
      
      // Step 3: Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Reset Form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please check your EmailJS keys or your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#FFFFFF]">
          Get In <span className="text-[#00B4D8]">Touch</span>
        </h2>
        <p className="text-[#90E0EF] mt-2">I typically respond within 24 hours.</p>
        <div className="h-1 w-20 bg-[#00B4D8] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 bg-[#1B4D6E]/20 backdrop-blur-md border border-[#1B4D6E] rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Left Side: Contact Info [cite: 5, 6, 7] */}
        <div className="p-8 lg:p-12 bg-gradient-to-br from-[#1B4D6E]/40 to-transparent">
          <h3 className="text-2xl font-bold text-[#FFFFFF] mb-6">Contact Information</h3>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-[#00B4D8]/10 rounded-lg group-hover:bg-[#00B4D8]/20 transition-colors">
                <Mail className="text-[#00B4D8]" size={24} />
              </div>
              <div>
                <p className="text-sm text-[#90E0EF]">Email</p>
                <p className="font-medium text-[#FFFFFF]">danduleeladlvvs1@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-[#00B4D8]/10 rounded-lg group-hover:bg-[#00B4D8]/20 transition-colors">
                <Phone className="text-[#00B4D8]" size={24} />
              </div>
              <div>
                <p className="text-sm text-[#90E0EF]">WhatsApp</p>
                <p className="font-medium text-[#FFFFFF]">+91 9177753027</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-[#00B4D8]/10 rounded-lg group-hover:bg-[#00B4D8]/20 transition-colors">
                <MapPin className="text-[#00B4D8]" size={24} />
              </div>
              <div>
                <p className="text-sm text-[#90E0EF]">Location</p>
                <p className="font-medium text-[#FFFFFF]">Dharmavaram, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <form onSubmit={handleSubmit} className="p-8 lg:p-12 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#90E0EF] mb-1">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              className="w-full bg-[#0D1B2A] border border-[#1B4D6E] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00B4D8] transition-all text-[#FFFFFF]"
              placeholder="Full Name"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#90E0EF] mb-1">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              className="w-full bg-[#0D1B2A] border border-[#1B4D6E] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00B4D8] transition-all text-[#FFFFFF]"
              placeholder="example@mail.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#90E0EF] mb-1">Message</label>
            <textarea
              required
              rows="4"
              value={formData.message}
              className="w-full bg-[#0D1B2A] border border-[#1B4D6E] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00B4D8] transition-all text-[#FFFFFF] resize-none"
              placeholder="How can I help you?"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#00B4D8] text-[#0D1B2A] font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#90E0EF] transform hover:-translate-y-1"
            }`}
          >
            <span>{loading ? "Sending..." : "Send Message"}</span>
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}