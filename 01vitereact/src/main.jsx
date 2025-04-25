import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp()
{
    return (
      <div>
        <h1>Custom MyApp</h1>
      </div>
    )
}

const elementData=(<a href="https://google.com" target='_blank'>Visite Google Website</a>)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
