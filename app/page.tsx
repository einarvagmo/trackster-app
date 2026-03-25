export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0a1e] flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-black text-white mb-4">Trackster</h1>
        <p className="text-[#9b8ec4] mb-8">Kjenn musikken · Plasser historien</p>
        <a
          href="https://apps.apple.com/no/app/trackster"
          className="bg-white text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
        >
          Last ned på App Store
        </a>
      </div>
    </main>
  )
}
