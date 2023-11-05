'use client'

import WorldMap from "@/modules/WorldMap";
import geoJson from '@/modules/geo_json/europe.json';

export default function Home() {
  return (
    <main className="flex">
      <WorldMap
        projectionConfig={{
          rotate: [-10.0, -53.0, 0],
          scale: 1200
        }}
        geoJson={geoJson}
        convertGeoId={true}
      />
    </main>
  )
}
