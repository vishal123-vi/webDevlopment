import Header from './components/header'

export default function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			<main className="p-6 max-w-4xl mx-auto">
				<h1 className="text-2xl font-semibold">Welcome to Cravings</h1>
				<p className="mt-4 text-gray-600">Use the header to Login or Register.</p>
			</main>
		</div>
	)
}