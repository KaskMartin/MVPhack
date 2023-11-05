'use client'

import WorldMap from "@/modules/WorldMap";
import geoJson from '@/modules/geo_json/countries-110m.json';

export default function Home() {
  return (
    <main className="flex">
      <WorldMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147
        }}
        geoJson={geoJson}
        convertGeoId={false}
      />
    </main>
  )
}
