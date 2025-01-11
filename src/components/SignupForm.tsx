import React, { useState } from 'react';

const SignupForm: React.FC = () => {
  const [url, setUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call backend API to handle signup
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Website URL:
        <input 
          type="url" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;