"use client"

import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {

    const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState<'M' | 'F'>('M');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
        const response = await axios.post('/api/add-product', {
          name,
          image,
          price,
          description,
          gender,
        });

    setSuccess(response.data.message);

    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setGender('M');
  } catch (err: any) {
    setError(err.response?.data?.error || 'Failed to add product.');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="mx-auto max-w-md md:max-w-lg p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl text-accent font-bold text-center mb-4">Add Product</h2>
    {error && <p className="text-red-500 mb-2">{error}</p>}
    {success && <p className="text-green-500 mb-2">{success}</p>}
    <form onSubmit={handleSubmit} className='text-accent'>
      <div className="mb-4 ">
        <label className="block text-sm  font-medium mb-1">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as 'M' | 'F')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full p-2 text-white font-bold rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}
      >
        {loading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  </div>
  )
}

export default AddProduct
