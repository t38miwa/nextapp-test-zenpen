"use client";
{/*"use client";
import React from 'react';
import { useState } from 'react';
import Image from "next/image"
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '1000px'
};

const center = {
  lat: 35.6895, // 東京の緯度
  lng: 139.6917 // 東京の経度
};

const locations = [
  {
    id: 1,
    name: 'coast2coast',
    position: { lat: 35.6667476996438, lng: 139.7066057668329 },
    info: 'ソーセージとチェダーチーズを挟み焼き上げたホットドッグの他、カレーやリゾットなどが楽しめる。NBAファンが集っている。',
    phone:'03-6427-2268',
    link: 'https://www.c2c-supply.com/',
    imageUrl: '/coast2coast.jpg'
  }
  // 他の店舗データを追加可能
];

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
    return (
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={9}
        >
          {locations.map(location => (
          <Marker
            key={location.id}
            position={location.position}
            onClick={() => setSelectedLocation(location)}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div>
              <h2>{selectedLocation.name}</h2>
              <p>{selectedLocation.info}</p>
              <p>{selectedLocation.phone}</p>
              <a href={selectedLocation.link} target="_blank" rel="noopener noreferrer">訪問する</a>
                <Image src={selectedLocation.imageUrl} width={300} height={150}  alt="item-image" priority/>
            </div>
          </InfoWindow>
        )}
        </GoogleMap>
      </LoadScript>
    );
  }

  export default Map;
*/}

import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '1000px'
};

// 渋谷区神宮前の緯度経度（ジオコーディング結果を仮にここに設定）
const jinguMae = {
  lat: 35.667487, 
  lng: 139.706844
};

const libraries = ["places"];

const MapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const onMarkerClick = useCallback(() => {
    const service = new window.google.maps.places.PlacesService(mapRef.current);
    service.getDetails({
      placeId: 'ChIJSSxEVKGMGGARGOjerrvUdf8', // Google Place APIから取得したPlace ID
      fields: ['name', 'formatted_address', 'formatted_phone_number', 'photo', 'website']
    }, (result, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSelectedPlace({
          position: jinguMae,
          name: result.name,
          info: result.formatted_address,
          phone: result.formatted_phone_number,
          website: result.website,
          photoUrl: result.photos ? result.photos[0].getUrl() : null
        });
      }
    });
  }, []);
  

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={jinguMae}
        zoom={15}
        onLoad={onLoad}
      >
        <Marker
          position={jinguMae}
          onClick={onMarkerClick}
        />
        {selectedPlace && (
  <InfoWindow position={selectedPlace.position} onCloseClick={() => setSelectedPlace(null)}>
    <div>
      <h2>{selectedPlace.name}</h2>
      <p>{selectedPlace.info}</p>
      {selectedPlace.phone && <p>電話番号: {selectedPlace.phone}</p>}
      {selectedPlace.website && <p><a href={selectedPlace.website} target="_blank" rel="noopener noreferrer">ウェブサイト</a></p>}
      {selectedPlace.photoUrl && <img src={selectedPlace.photoUrl} alt="Place" style={{ width: '100px' }} />}
    </div>
  </InfoWindow>
)}

      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
