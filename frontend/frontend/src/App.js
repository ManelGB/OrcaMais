import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Orça+ 🚀</h1>
      <p>Abra o console do navegador e veja a resposta da API</p>
    </div>
  );
}

export default App;
