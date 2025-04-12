import React from 'react'

export default function CompanyBranding( { formData, setFormData }) {
    return (
          <div className="mt-10 mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-5">Company Branding</h3>
                <p className="text-gray-600 mb-5">
                  Customize your company colors to match your brand identity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <div
                        className="h-10 w-10 rounded-full border cursor-pointer"
                        style={{ backgroundColor: formData.companyColors.primary }}
                      ></div>
                      <input
                        type="color"
                        value={formData.companyColors.primary}
                        onChange={(e) => setFormData({
                          ...formData,
                          companyColors: {
                            ...formData.companyColors,
                            primary: e.target.value
                          }
                        })}
                        className="h-10 w-16 rounded border border-gray-300"
                      />
                      <input
                        type="text"
                        value={formData.companyColors.primary}
                        onChange={(e) => setFormData({
                          ...formData,
                          companyColors: {
                            ...formData.companyColors,
                            primary: e.target.value
                          }
                        })}
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-24"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Used for buttons, links, and accents</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <div
                        className="h-10 w-10 rounded-full border cursor-pointer"
                        style={{ backgroundColor: formData.companyColors.secondary }}
                      ></div>
                      <input
                        type="color"
                        value={formData.companyColors.secondary}
                        onChange={(e) => setFormData({
                          ...formData,
                          companyColors: {
                            ...formData.companyColors,
                            secondary: e.target.value
                          }
                        })}
                        className="h-10 w-16 rounded border border-gray-300"
                      />
                      <input
                        type="text"
                        value={formData.companyColors.secondary}
                        onChange={(e) => setFormData({
                          ...formData,
                          companyColors: {
                            ...formData.companyColors,
                            secondary: e.target.value
                          }
                        })}
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-24"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Used for backgrounds and highlights</p>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview
                  </label>
                  <div className="p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <div
                        className="h-10 w-10 mr-3 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: formData.companyColors.primary }}
                      >
                        {formData.companyName ? formData.companyName.charAt(0).toUpperCase() : 'J'}
                      </div>
                      <div>
                        <h4 className="font-medium">{formData.companyName || 'Your Company'}</h4>
                        <p
                          className="text-sm"
                          style={{ color: formData.companyColors.primary }}
                        >
                          {formData.pitch || 'Your company description here'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button
                        className="px-4 py-2 rounded-md text-white font-medium text-sm"
                        style={{ backgroundColor: formData.companyColors.primary }}
                      >
                        Apply Now
                      </button>
                      <button
                        className="px-4 py-2 rounded-md text-sm font-medium border"
                        style={{
                          color: formData.companyColors.primary,
                          borderColor: formData.companyColors.primary,
                          backgroundColor: formData.companyColors.secondary
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  )
}
