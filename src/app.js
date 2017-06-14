import { h } from 'preact'

export default _ =>
  <div>
    <style>{`
      body {
        margin: 0;
        padding: 0;
        background: linear-gradient(120deg, black, white);
        overflow: hidden;
      }
      .hello {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        font-family: sans-serif;
        font-weight: 100;
      }
      h1 {
        display: flex;
        align-items: center;
        background: white;
        height: 20vmax;
        width: 20vmax;
        border-radius: 50%;
        overflow: hidden;
        font-size: 5vmax;
        box-shadow: inset -0.5vmax 0.5vmax 1vmax rgba(0, 0, 0, 0.3);
      }
    `}</style>
    <div className="hello">
      <h1>Hello, Preact!</h1>
    </div>
  </div>
