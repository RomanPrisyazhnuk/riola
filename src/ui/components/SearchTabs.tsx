"use client"
import type { FC } from 'react';
import { useState } from 'react';

interface SearchTabsProps {}

const SearchTabs: FC<SearchTabsProps> = ({}) => {
    const [activeTab, setActiveTab] = useState('transfer');

    return (
        <div className="">
        {/* Tabs */}

            <div className="flex border-b ">
            <button
            onClick={() => setActiveTab('transfer')}
            className={`p-2 px-4 bg-white ${activeTab === 'transfer' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            >
            Трансфер
            </button>
            <button
            onClick={() => setActiveTab('excursions')}
            className={`p-2 px-4 bg-white ${activeTab === 'excursions' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            >
            Экскурсии
            </button>
        </div>
      <div className="max-w-7xl mx-auto p-4 shadow-lg bg-white">
        
  
        {/* Content */}
        {activeTab === 'transfer' && (
          <div className="flex gap-6">
                 <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
        )}
  
        {activeTab === 'excursions' && (
          <div className="mt-4">
            {/* Контент для вкладки "Экскурсии" */}
            <p>Здесь будет контент для экскурсий.</p>
          </div>
        )}
      </div>
      </div>
    );
  }
export default SearchTabs;