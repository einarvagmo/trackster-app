import { NextResponse } from 'next/server'

export async function GET() {
  const aasa = {
    applinks: {
      apps: [],
      details: [
        {
          appID: 'N9PK3B7U68.no.scalica.trackster',
          paths: ['/duel/*']
        }
      ]
    }
  }

  return new NextResponse(JSON.stringify(aasa), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
