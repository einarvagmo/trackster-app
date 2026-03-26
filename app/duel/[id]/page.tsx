import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface DuelPageProps {
  params: Promise<{ id: string }>
}

export default async function DuelPage({ params }: DuelPageProps) {
  const { id } = await params
  const { data: duel } = await supabase
    .from('duels')
    .select('*, packages(name, image_url), challenger:users!challenger_id(username)')
    .eq('id', id)
    .single()

  const challengerName = duel?.challenger?.username ?? 'Noen'
  const packageName = duel?.packages?.name ?? 'en musikk-pakke'
  const packageImage = duel?.packages?.image_url

  const deepLink = `trackster://duel/${id}`
  const appStoreUrl = 'https://apps.apple.com/no/app/trackster'

  return (
    <main className="min-h-screen bg-[#0f0a1e] flex items-center justify-center p-8">
      <div className="max-w-sm w-full text-center">

        {/* Pakke-bilde */}
        {packageImage && (
          <img
            src={packageImage}
            alt={packageName}
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
        )}

        {/* Info */}
        <div className="mb-8">
          <p className="text-[#9b8ec4] text-sm uppercase tracking-widest mb-3">
            Du er utfordret!
          </p>
          <h1 className="text-3xl font-black text-white mb-2">
            {challengerName} utfordrer deg
          </h1>
          <p className="text-[#9b8ec4] text-lg">
            i <span className="text-white font-bold">{packageName}</span>
          </p>
          <p className="text-[#9b8ec4] mt-3 text-sm">
            Klarer du å gjette hvilket år låtene kom ut?
          </p>
        </div>

        {/* Knapper */}
        <div className="space-y-3">
          {/* Deep link – åpner appen direkte hvis installert */}
          <a
            href={deepLink}
            className="block w-full bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-bold py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity"
          >
            Spill nå
          </a>

          {/* App Store – hvis appen ikke er installert */}
          <a
            href={appStoreUrl}
            className="block w-full bg-white/5 border border-white/10 text-[#9b8ec4] font-medium py-4 rounded-2xl text-base hover:bg-white/10 transition-colors"
          >
            Last ned Trackster gratis
          </a>
        </div>

        <p className="text-white/20 text-xs mt-8">
          Trackster – Kjenn musikken · Plasser historien
        </p>
      </div>
    </main>
  )
}