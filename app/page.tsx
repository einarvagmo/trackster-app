export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0a1e] flex items-center justify-center p-8">
      <div className="text-center">
        <img
          src="/trackster-logo.png"
          alt="Trackster"
          className="w-72 mx-auto mb-4"
        />
        <p className="text-[#9b8ec4] mb-10 text-lg tracking-widest uppercase font-medium">
          Kjenn musikken · Plasser historien
        </p>
        <a
          href="https://apps.apple.com/no/app/trackster"
          className="bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
        >
          Last ned på App Store
        </a>
      </div>
    </main>
  )
}