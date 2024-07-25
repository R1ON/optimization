import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import MyComponent from './MyComponent';
const MyComponent = lazy(() => import('./MyComponent.jsx'));


import { Shadows } from './Shadows';
import { Resize } from './Resize';
import { Optimistic } from './Optimistic';
import { WorkerComponent } from './Worker.jsx';

export function renderAdditionalData() {
  return <div>test</div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <WorkerComponent /> */}
        {/* <Optimistic /> */}
        {/* <Resize /> */}
        {/* <Shadows /> */}
        {count > 3 && (
           <Suspense fallback={<div>Загрузка</div>}>
              <MyComponent count={count} />
           </Suspense>
        )}
        
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App












{/* <Suspense fallback={<div>Загрузка</div>}>
          <MyComponent />
        </Suspense> */}


        {/* {count > 3 && (
          <Suspense fallback={<div>Загрузка</div>}>
            <MyComponent />
          </Suspense>
        )} */}
