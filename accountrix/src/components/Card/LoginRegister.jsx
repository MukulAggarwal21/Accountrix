

import React from 'react'
import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { BorderBeam } from '../magicui/border-beam'

export default function LoginRegister() {
    const [showPassword, setShowPassword] = useState(false)
    const [activeTab, setActiveTab] = useState('login') // 'login' or 'register'
    return (
        <div className="bg-white rounded-2xl w-full max-w-md shadow-lg p-6 mt-10 lg:mt-0">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
                <button
                    className={`flex-1 py-4 font-medium relative ${activeTab === 'register' ? 'text-blue-700' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('register')}
                >
                    Register/ Signup
                    {activeTab === 'register' && (
                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-700"></span>
                    )}
                </button>
                <button
                    className={`flex-1 py-4 font-medium relative ${activeTab === 'login' ? 'text-blue-700' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('login')}
                >
                    Sign in
                    {activeTab === 'login' && (
                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-700"></span>
                    )}
                </button>

            </div>

            {/* Login Form */}
            {activeTab === 'login' && (
                <form className="space-y-4 mt-6">
                    <input type="email" placeholder="Enter registered email ID" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm" />
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter password" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm" />
                        <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                    </div>
                    <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Choose your role
                        </option>
                        <option value="recruiter">Recruiter</option>
                        <option value="student">Student</option>
                    </select>
                    <button type="submit" className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition-colors">
                        Log in
                    </button>
                </form>
            )}

            {/* //Register Form */}
            {activeTab === 'register' && (
                <form className="space-y-4 mt-6">
                    <input type="text" placeholder="Enter Your Name " className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm" />
                    <input type="email" placeholder="Enter email ID" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm" />
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter password" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm" />
                        <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                    </div>
                    <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Choose your role
                        </option>
                        <option value="recruiter">Recruiter</option>
                        <option value="student">Student</option>
                    </select>
                    <button type="submit" className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition-colors">
                        Register
                    </button>
                </form>
                
            )}
                                <BorderBeam duration={8} size={100} />

        </div>
    )
}
