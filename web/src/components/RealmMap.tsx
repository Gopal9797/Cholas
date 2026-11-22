import { useEffect, useMemo } from 'react'
import { CircleMarker, MapContainer, Polygon, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { placesFor } from '../data/territories'
import type { Territory, TerritoryFeature } from '../data/types'

function toLatLng(coord: [number, number]): [number, number] {
  return [coord[1], coord[0]]
}

function pointsOf(feature: TerritoryFeature): [number, number][] {
  if (feature.geometry.type === 'Polygon') {
    return feature.geometry.coordinates[0].map((coord) => toLatLng(coord))
  }
  if (feature.geometry.type === 'LineString') {
    return feature.geometry.coordinates.map((coord) => toLatLng(coord))
  }
  return [toLatLng(feature.geometry.coordinates)]
}

function Fit({ positions }: { positions: [number, number][] }) {
  const map = useMap()
  useEffect(() => {
    if (positions.length > 1) map.fitBounds(positions, { padding: [36, 36], maxZoom: 7 })
  }, [map, positions])
  return null
}

export default function RealmMap({ territory }: { territory: Territory }) {
  const positions = useMemo(
    () => territory.features.flatMap((feature) => pointsOf(feature)),
    [territory],
  )
  const places = placesFor(territory.id)
  const hasCampaign = territory.features.some((feature) => feature.geometry.type === 'LineString')

  return (
    <div className="realm-map">
      <MapContainer
        center={[11.2, 79.4]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
          maxNativeZoom={8}
        />
        <Fit positions={positions} />
        {territory.features.map((feature) => {
          const positionsForFeature = pointsOf(feature)
          if (feature.geometry.type === 'LineString') {
            return (
              <Polyline
                key={feature.properties.name}
                positions={positionsForFeature}
                pathOptions={{ color: '#8a3b24', weight: 3, dashArray: '2 7', opacity: 0.95 }}
              />
            )
          }
          if (feature.geometry.type === 'Polygon') {
            return (
              <Polygon
                key={feature.properties.name}
                positions={positionsForFeature}
                pathOptions={{ color: '#8a5a12', weight: 2, fillColor: '#c9a15b', fillOpacity: 0.48 }}
              />
            )
          }
          return null
        })}
        {places.map((place) => (
          <CircleMarker
            key={place.name}
            center={[place.lat, place.lng]}
            radius={5}
            pathOptions={{ color: '#f6efe4', weight: 1.5, fillColor: '#110e0b', fillOpacity: 1 }}
          >
            <Tooltip permanent direction="top" offset={[0, -4]} className="place-tip">
              {place.name}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
      <ul className="map-key">
        <li>
          <i className="swatch swatch-realm" /> Gold ground: schematic realm
        </li>
        {hasCampaign ? (
          <li>
            <i className="swatch swatch-campaign" /> Dashed line: a campaign, not a province
          </li>
        ) : null}
      </ul>
    </div>
  )
}
