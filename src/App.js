import React from 'react';
import Counter from './components/Counter'
function App() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-slate-300' >
     <h1 className='text-3xl font-bold text-blue-900 m-5'>Counter App</h1>
     <Counter />
    </div>
  );
}

export default App;
