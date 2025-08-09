"use client"; // Required for client-side interactions and framer-motion

import { motion, Variants } from "framer-motion";
import React, { FormEvent } from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import { Separator, Text } from "@radix-ui/themes";
import { FaGoogle } from "react-icons/fa";

// Variants for Framer Motion animations
const pageVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.0, 0.0, 0.58, 1.0] } },
};

const formVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.3, ease: [0.0, 0.0, 0.58, 1.0] } },
};

const inputVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.0, 0.0, 0.58, 1.0] } },
};

const buttonVariants: Variants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

export default function LoginPage() {
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login form submitted!");
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center justify-center p-4">
            <motion.div
                className="bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md text-center border border-gray-700"
                initial="hidden"
                animate="visible"
                variants={pageVariants}
            >
                <motion.h1 className="text-4xl font-extrabold text-blue-400 mb-6" // Changed from text-green-400 to text-blue-400
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Welcome Back!
                </motion.h1>
                <p className="text-gray-300 mb-8">Log in to continue your fitness journey.</p>

                <motion.form onSubmit={handleSubmit} className="space-y-6" variants={formVariants}>
                    <motion.div variants={inputVariants}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-400 transition-all duration-300"
                            required
                        />
                    </motion.div>
                    <motion.div variants={inputVariants}>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-400 transition-all duration-300"
                            required
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold text-xl rounded-lg shadow-md transform transition-all duration-300"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Log In
                    </motion.button>
                    <Text size="2">
                        or Login using:
                        <Separator my="3" size="4" color="blue" />
                        <div className="flex items-center justify-center">
                            <div className="p-1 bg-white rounded-full hover:scale-110 transition-all cursor-pointer">
                                <FaGoogle color="black" size={20} className="hover:text-blue-500" />
                            </div>
                        </div>
                    </Text>
                </motion.form>

                <motion.p className="mt-8 text-gray-400 text-md">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" passHref legacyBehavior>
                        <motion.a className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Sign Up
                        </motion.a>
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
}
