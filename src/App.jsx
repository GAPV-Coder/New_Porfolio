import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />} />
			</Routes>
		</div>
	)
}

export default App
