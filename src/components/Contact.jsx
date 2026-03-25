import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_fg568lq";   
    const TEMPLATE_ID = "template_pb1bako"; 
    const PUBLIC_KEY = "eDXHD1eeySZrdSVdt";  

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      const myNumber = "919177753027"; 
      const text = `*New Portfolio Message!*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
      const whatsappUrl = `https://wa.me/${myNumber}?text=${text}`;

      alert("Success! Your message was sent to my Email. Opening WhatsApp for a quick reminder...");
      window.open(whatsappUrl, "_blank");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please check your EmailJS keys or your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFFFFF]">
          Get In <span className="text-[#00B4D8]">Touch</span>
        </h2>
        <p className="text-[#90E0EF] mt-2 text-sm md:text-base">I typically respond within 24 hours.</p>
        <div className="h-1 w-16 md:w-20 bg-[#00B4D8] mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Container - Adjusted rounded corners for mobile */}
      <div className="grid md:grid-cols-2 gap-0 bg-[#1B4D6E]/20 backdrop-blur-md border border-[#1B4D6E] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Left Side: Contact Info */}
        <div className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-[#1B4D6E]/40 to-transparent">
          <h3 className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-6">Contact Information</h3>
          
          <div className="space-y-6 md:y-8">
            {/* Email */}
            <div className="flex items-center space-x-4 group">
              <div className="p-2.5 md:p-3 bg-[#00B4D8]/10 rounded-lg group-hover:bg-[#00B4D8]/20 transition-colors shrink-0">
                <Mail className="text-[#00B4D8]" size={20} md:size={24} />
              </div>
              <div className="min-w-0"> {/* min-w-0 prevents text overflow on small screens */}
                <p className="text-xs text-[#90E0EF] uppercase tracking-wider">Email</p>
                <p className="font-medium text-[#FFFFFF] text-sm md:text-base truncate">danduleeladlvvs1@gmail.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4 group">
              <div className="p-2.5 md:p-3 bg-[#00B4D8]/10 rounded-lg group-hover:bg-[#00B4D8]/20 transition-colors shrink-0">
                <Phone className="text-[#00B4D8]" size={20} md:size={24} />
              </div>
              <div>
                <p className="text-xs text-[#90E0EF] uppercase tracking-wider">WhatsApp</p>
                <p className="font-medium text-[#FFFFFF] text-sm md:text-base">+91 9177753027</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 group">
              <div className="p-2.5 md:p-3 bg-[#00B4D8]/10 rounded-lg group-hover:bg-[#00B4D8]/20 transition-colors shrink-0">
                <MapPin className="text-[#00B4D8]" size={20} md:size={24} />
              </div>
              <div>
                <p className="text-xs text-[#90E0EF] uppercase tracking-wider">Location</p>
                <p className="font-medium text-[#FFFFFF] text-sm md:text-base">Dharmavaram, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="p-6 md:p-8 lg:p-12 border-t md:border-t-0 md:border-l border-[#1B4D6E]/50">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#90E0EF] mb-1.5 ml-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                className="w-full bg-[#0D1B2A] border border-[#1B4D6E] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]/30 transition-all text-[#FFFFFF] text-sm"
                placeholder="Full Name"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-[#90E0EF] mb-1.5 ml-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                className="w-full bg-[#0D1B2A] border border-[#1B4D6E] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]/30 transition-all text-[#FFFFFF] text-sm"
                placeholder="example@mail.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-[#90E0EF] mb-1.5 ml-1">Message</label>
              <textarea
                required
                rows="4"
                value={formData.message}
                className="w-full bg-[#0D1B2A] border border-[#1B4D6E] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]/30 transition-all text-[#FFFFFF] text-sm resize-none"
                placeholder="How can I help you?"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#00B4D8] text-[#0D1B2A] font-bold py-3.5 md:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm md:text-base ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#90E0EF] active:scale-95 transform"
              }`}
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}