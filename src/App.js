import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import TextField from './components/TextField';

function App() {
  const [question, setQuestion] = useState("");
  
  return (
    <>
      <Header />
      <Main question={ question } />
      <TextField setQuestion={ setQuestion }/>
    </>
  );
}

export default App;
