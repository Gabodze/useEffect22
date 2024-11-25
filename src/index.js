import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundColor = 'blue';
    }, 2000);
  }, );

  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
