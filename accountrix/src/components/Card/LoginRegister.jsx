

import React from 'react'
import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
export default function LoginRegister({ setIsAuthenticated }) {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [activeTab, setActiveTab] = useState('login') // 'login' or 'register'
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        role: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const endpoint = activeTab === 'login' ? '/user/login' : '/user/register'
            const response = await fetch(`http://localhost:5000${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong')
            }


            // Handle successful response
            console.log('Success:', data)
            // window.location.href = '/brandhiring' // Redirect to homepage
            setIsAuthenticated(true); // Update authentication state


            if (activeTab === 'login') {
                if (formData.role === 'recruiter') {
                    navigate('/dashboard');
                } else if (formData.role === 'student') {
                    navigate('/brandhiring');
                }
            }
            else if (activeTab === 'register') {
                if (formData.role === 'recruiter') {
                    navigate('/recruitersetup');
                }
                else if (formData.role === 'student') {
                    navigate('/brandhiring');
                }
            }

        } catch (err) {
            setError(err.message)
            console.error('Error:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white rounded-2xl w-full max-w-md shadow-lg p-6 mt-10 lg:mt-0">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
                <button
                    className={`flex-1 py-4 font-medium relative ${activeTab === 'register' ? 'text-blue-700' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('register')}
                    type="button"
                >
                    Register/ Signup
                    {activeTab === 'register' && (
                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-700"></span>
                    )}
                </button>
                <button
                    className={`flex-1 py-4 font-medium relative ${activeTab === 'login' ? 'text-blue-700' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('login')}
                    type="button"
                >
                    Sign in
                    {activeTab === 'login' && (
                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-700"></span>
                    )}
                </button>
            </div>

            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    {error}
                </div>
            )}

            {/* Login Form */}
            {activeTab === 'login' && (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter registered email ID"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                    </div>
                    <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            Choose your role
                        </option>
                        <option value="recruiter">Recruiter</option>
                        <option value="student">Student</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition-colors"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Log in'}
                    </button>
                </form>
            )}

            {/* Register Form */}
            {activeTab === 'register' && (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email ID"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                    </div>
                    <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            Choose your role
                        </option>
                        <option value="recruiter">Recruiter</option>
                        <option value="student">Student</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition-colors"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Register'}
                    </button>
                </form>
            )}
        </div>
    )
}