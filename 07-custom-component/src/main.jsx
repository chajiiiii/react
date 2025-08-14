import { createRoot } from 'react-dom/client'
import './styles/main.css'
import App from './app'

const root = document.getElementById('root')
if (!root) throw new Error('문서에 #root 요소가 존재하지 않습니다.')

createRoot(root).render(<App />)

// Bun 경고 제거
import.meta.hot.accept()
