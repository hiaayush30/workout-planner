"use client"; // This directive is necessary for using client-side features like framer-motion

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// Variants for Framer Motion animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imagePlaceholderVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 p-4 bg-gray-800 bg-opacity-90 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl cursor-pointer font-extrabold text-blue-400 tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            MacroMind
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg">
              Features
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg">
              About
            </a>
            <a href="#download" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg">
              Download
            </a>
          </div>
          <button className="md:hidden text-white focus:outline-none">
            {/* Hamburger icon for mobile menu - can be implemented with Radix Dialog or custom logic */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Hero Text Content */}
          <motion.div
            className="text-center md:text-left md:w-1/2 order-last md:order-first" // Order for mobile vs desktop
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400"
            >
              Unlock Your Full Potential with MacroMind
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto md:mx-0"
            >
              Your ultimate gym workout, nutrition, and progress tracking companion.
            </motion.p>
            <motion.button
              className="px-10 py-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            className="relative w-full overflow-hidden md:w-1/2 h-80 sm:h-96 bg-red-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl p-4 order-first md:order-last"
            variants={imagePlaceholderVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <Image
              src="/HeroImage.jpeg"
              alt="MacroMind"
              fill
              className="object-cover" 
            />
          </motion.div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            What MacroMind Offers
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* Feature 1: Workout Suggestions */}
            <motion.div
              className="bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h4 className="text-3xl font-semibold mb-4 text-green-400">Smart Workout Suggestions</h4>
              <p className="text-gray-300 text-lg mb-6">
                Never wonder what to train again. MacroMind provides personalized gym workout plans tailored to your goals and progress.
              </p>
              <motion.div
                className="w-full h-64 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl"
                variants={imagePlaceholderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Image Placeholder: Workout Suggestions
              </motion.div>
            </motion.div>

            {/* Feature 2: Calorie Calculation */}
            <motion.div
              className="bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h4 className="text-3xl font-semibold mb-4 text-yellow-400">Precise Calorie Maintenance</h4>
              <p className="text-gray-300 text-lg mb-6">
                Calculate your daily calorie maintenance needs based on your activity level and body metrics for effective weight management.
              </p>
              <motion.div
                className="w-full h-64 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl"
                variants={imagePlaceholderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Image Placeholder: Calorie Calculation
              </motion.div>
            </motion.div>

            {/* Feature 3: Food Suggestions */}
            <motion.div
              className="bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h4 className="text-3xl font-semibold mb-4 text-orange-400">Personalized Food Recommendations</h4>
              <p className="text-gray-300 text-lg mb-6">
                Get smart food suggestions tailored to your calorie goals and dietary preferences, making healthy eating easy.
              </p>
              <motion.div
                className="w-full h-64 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl"
                variants={imagePlaceholderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Image Placeholder: Food Suggestions
              </motion.div>
            </motion.div>

            {/* Feature 4: Progress Tracking */}
            <motion.div
              className="bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h4 className="text-3xl font-semibold mb-4 text-purple-400">Seamless Progress Tracking</h4>
              <p className="text-gray-300 text-lg mb-6">
                Log your workouts, meals, and measurements to visualize your journey and stay motivated.
              </p>
              <motion.div
                className="w-full h-64 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl"
                variants={imagePlaceholderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Image Placeholder: Progress Tracking
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="download" className="py-20 bg-gray-900 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-4xl md:text-5xl font-bold mb-8 text-blue-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            Ready to Transform Your Fitness Journey?
          </motion.h3>
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            Download MacroMind today and start achieving your health and fitness goals with intelligent guidance.
          </motion.p>
          <motion.button
            className="px-12 py-5 bg-green-500 hover:bg-green-600 text-white font-bold text-2xl rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
          >
            Get MacroMind Now!
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400 text-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} MacroMind. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}