import React from 'react';

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">guilh</span>
        <span className="remainder">erme</span>

      </div>
      <div className="typed-keys">
          asdfguilherasdf
      </div>
      <div className="completed-words">
          <ol>
            <li>cidade</li>
            <li>cidade</li>
            <li>cidade</li>

            </ol>
      </div>
    </div>
  );
};

export default App;