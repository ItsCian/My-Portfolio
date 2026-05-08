function App() {
	return (
		<div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 px-6 text-white">
			<div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
				<div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 text-center shadow-2xl shadow-black/30 backdrop-blur-md sm:px-14 sm:py-16">
					<p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
						Tailwind CSS
					</p>
					<h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
						Hello world
					</h1>
					<p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
						A simple Vite + React starter styled entirely with Tailwind CSS.
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
