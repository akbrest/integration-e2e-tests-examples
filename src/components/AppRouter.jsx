import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MainLayout from './MainLayout';
import ContextExample from './context/ContextExample';
import ApiExample from './api/ApiExample';
import Post from './api/Post';
import FormExample from './from/FormExample';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="context-example" element={<ContextExample />} />
        <Route path="api-example" element={<ApiExample />} />
        <Route path="api-example/:id" element={<Post />} />
        <Route path="form-example" element={<FormExample />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
