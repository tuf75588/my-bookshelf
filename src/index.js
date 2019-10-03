import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>APP! your website is {process.env.REACT_APP_BOOK_URL}</div>;
}

const ui = <App />;
const rootElement = document.getElementById('root');

ReactDOM.render(ui, rootElement);
