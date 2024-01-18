import React, { useState } from 'react';
import axios from 'axios';
import '././App.css';

function App() {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email); // Mail adresini form datasına ekle

    try {
      await axios.post('http://localhost:3001/upload', formData);
      console.log('Dosya başarıyla yüklendi ve işlendi.');
    } catch (error) {
      console.error('Dosya yükleme hatası:', error);
    }
  };

  return (
      <div className='app'>
        <header className='header'>Dropzone</header>
        <div className='file'>
          <div className='text-size'>
            <div className='text'>Send your file by Mail</div>
            <div className='text-2'>You can make fast transactions by sending your files to the e-mail address you have entered.</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">@</span>
              <input type="email" value={email} onChange={handleEmailChange} class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <br />
            <div className='dropzone'> 
            <div className='input-text'>Try it now.</div>
              <input className="input" type="file" onChange={handleFileChange} />
            </div>
            
            <br />
            <div className='button'>
              <button type="button" class="send btn btn-dark">Send Mail</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default App;