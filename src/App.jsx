/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import { useState } from 'react';
import { marked } from 'marked';
import 'reset-css';

const md = '# Marked in Node.js\n\nRendered by **marked**.';

function App() {
  const [text, setText] = useState(md);
  const __html = marked.parse(text);

  return (
    <div className="App">
      <main
        className="App-main"
        style={{
          display: 'flex',
          gap: '5%',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          overflowY: 'scroll',
        }}
      >
        <div style={{ height: '100%', width: '45%' }}>
          <textarea
            style={{ width: '100%', height: '100%' }}
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html }}
          style={{ height: '100%', width: '45%' }}
        />
      </main>
    </div>
  );
}

export default App;
