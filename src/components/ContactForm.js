'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectBrief: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理表单提交逻辑
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="mx-auto mb-4 max-w-sm text-left" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 w-full">
        <div>
          <label htmlFor="name" className="mb-1 font-medium block">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4 block w-full rounded-md border border-solid border-black px-3 py-3 text-sm text-black"
          />
        </div>
        {/* 添加 email 和 projectBrief 字段 */}
        <div>
          <input
            type="submit"
            value="Get free quote"
            className="block w-full cursor-pointer rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
          />
        </div>
      </div>
    </form>
  );
}