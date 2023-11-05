'use client'

import WorldMap from "@/modules/WorldMap";
import geoJson from '@/modules/geo_json/countries-110m.json';
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="flex">      
      <Menu/>
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
