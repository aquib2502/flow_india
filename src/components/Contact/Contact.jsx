"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage,setErrorMessage] = useState('')

   const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessage(null);

  if (!formData.name || !formData.email || !formData.interest) {
    setErrorMessage("Please fill in all required fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_ebcooeu",        // your service ID
      "template_8c9jryg",       // your template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        interest: formData.interest,
        message: formData.message,
      },
      "8vIwj0zb_Y1XioY4n"       // your PUBLIC KEY — must be a string
    );

    setSubmitStatus("success");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      _gotcha: "",
    });

    setTimeout(() => setSubmitStatus(null), 5000);
  } catch (error) {
    setSubmitStatus("error");
    setErrorMessage("Failed to send message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};




    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section with Background Image */}
            <div className="relative h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
                <img
                    // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000"
                    src="./contact_img.jpg"
                    alt="Contact Us"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/80" />

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-wider">
                            <span className="text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                                CONTACT US
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] px-4">
                            We are here to help you with your HVAC, MEP, and infrastructure needs. Reach out to us for any inquiries about our engineering solutions.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Overlapping Form Container - Only bottom third overlaps */}
            <div className="relative -mt-[33vh] sm:-mt-[30vh] md:-mt-[28vh] lg:-mt-[25vh] z-20 pb-16 sm:pb-20 lg:pb-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-50 border-b border-green-200 flex items-center justify-center gap-2 text-green-800"
                            >
                                <CheckCircle className="w-5 h-5" />
                                <span className="text-sm font-medium">Thank you! Your message has been sent successfully.</span>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-50 border-b border-red-200 text-center text-red-800 text-sm">
                                Something went wrong. Please try again or contact us directly.
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">

                            {/* Left Side - Get In Touch */}
                            <div className="p-6 sm:p-8 lg:p-10">
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                                    Get In Touch
                                </h2>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                                    Have questions about our products or your order? We're here to assist you daily from 9am to 6pm IST.
                                </p>

                                {/* Contact Details */}
                                <div className="space-y-6">
                                    {/* Head Office */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">Head Office</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                248C, Pocket 12, Jasola Vihar, New Delhi 110025
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <Mail className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">Email Us</h3>
                                            <div className="space-y-1">
                                                <a href="mailto:info@flowindiaprojects.com" className="block text-slate-600 hover:text-amber-600 text-sm transition-colors">
                                                    info@flowindiaprojects.com
                                                </a>
                                                <a href="mailto:rashid@flowindiaprojects.com" className="block text-slate-600 hover:text-amber-600 text-sm transition-colors">
                                                    rashid@flowindiaprojects.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <Phone className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">Call Us</h3>
                                            <a href="tel:+918077382865" className="block text-slate-600 hover:text-amber-600 text-sm transition-colors">
                                                +91 80773 82865
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <Clock className="w-6 h-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">Business Hours</h3>
                                            <p className="text-slate-600 text-sm">Daily: 9:00 AM - 6:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Send Us A Message */}
                            <div className="p-6 sm:p-8 lg:p-10">
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wide">
                                    Send Us A Message
                                </h2>

                                <div className="space-y-4">
                                    {/* Name and Company Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Company"
                                                className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone and Email Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="interest" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                                            Subject
                                        </label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all bg-white"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="hvac">HVAC Solutions</option>
                                            <option value="plumbing">Plumbing & Drainage</option>
                                            <option value="fire-protection">Fire Fighting/Protection System</option>
                                            <option value="electrical">Electrical Services</option>
                                            <option value="bms">Building Management System</option>
                                            <option value="mep">Complete MEP Solutions</option>
                                            <option value="consultation">Project Consultation</option>
                                            <option value="other">Other Inquiries</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can we help you?"
                                            rows="4"
                                            className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-6 rounded uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Submit
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center uppercase tracking-wide">Our Office</h2>
                <div className="rounded-2xl overflow-hidden shadow-xl h-80 sm:h-96 bg-slate-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0897285831467!2d77.29019607550207!3d28.538906275717987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564c7c9ed%3A0x123456789abcdef0!2sJasola%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location"
                    />
                </div>
                <p className="text-center text-slate-600 mt-4 text-sm">
                    Flow India Projects - 248C, Pocket 12, Jasola Vihar, New Delhi 110025
                </p>
            </div>
        </div>
    );
}