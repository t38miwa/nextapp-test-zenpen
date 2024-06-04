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

{/*}
//page.jsのみで表示する仕組み
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
*/}

{/*
route.jsも使用したパターン
// app/map/page.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '1000px'
};

const center = {
  lat: 35.667487,
  lng: 139.706844
};

const MapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const fetchPlaceDetails = async (placeId) => {
    const response = await fetch('/api/place?placeId=ChIJSSxEVKGMGGARGOjerrvUdf8');
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setSelectedPlace({
        name: data.result.name,
        address: data.result.formatted_address,
        phone: data.result.formatted_phone_number,
        website: data.result.website,
      });
    } else {
      console.error(data.error);
    }
  };

  const onMarkerClick = () => {
    const placeId = 'ChIJSSxEVKGMGGARGOjerrvUdf8'; // Google Place APIから取得したPlace ID
    fetchPlaceDetails(placeId);
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker
          position={center}
          onClick={onMarkerClick}
        />
        {selectedPlace && (
          <InfoWindow position={center} onCloseClick={() => setSelectedPlace(null)}>
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.address}</p>
              {selectedPlace.phone && <p>Phone: {selectedPlace.phone}</p>}
              {selectedPlace.website && <p><a href={selectedPlace.website} target="_blank" rel="noopener noreferrer">Website</a></p>}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
 */}


import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '1000px'
};

// 複数の場所の緯度経度
const locations = [
  {
    id: 'jinguMae', // 一意のID
    position: {
      lat: 35.667487,
      lng: 139.706844
    },
    placeId: 'ChIJSSxEVKGMGGARGOjerrvUdf8' // 東京の場所
  },
  {
    id: 'osakaEsaka', // 一意のID
    position: {
      lat: 34.756912,
      lng: 135.497376
    },
    placeId: 'ChIJr7f6nvDlAGARiKNjkeMMkQ0' // 大阪の場所、実際のプレースIDを設定する必要があります
  },
  {
    id: 'nagasaki', // 一意のID
    position: {
      lat: 32.74361402629554,
      lng: 129.87978740858682
    },
    placeId: 'ChIJCQ7NNA5TFTURjxQ4IKYMF9M' // 東京の場所
  }
];

const libraries = ["places"];

const MapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const onMarkerClick = useCallback((place) => {
    if (!mapRef.current) return;
    
    const service = new window.google.maps.places.PlacesService(mapRef.current);
    service.getDetails({
      placeId: place.placeId,
      fields: ['name', 'formatted_address', 'formatted_phone_number', 'photo', 'website']
    }, (result, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSelectedPlace({
          position: place.position,
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
        center={{ lat: 35.162907, lng: 136.907413 }}
        zoom={5}
        onLoad={onLoad}
      >
        {locations.map(location => (
          <Marker
            key={location.id}
            position={location.position}
            onClick={() => onMarkerClick(location)}
          />
        ))}
        {selectedPlace && (
          <InfoWindow position={selectedPlace.position} onCloseClick={() => setSelectedPlace(null)}>
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.info}</p>
              {selectedPlace.phone && <p>Phone: {selectedPlace.phone}</p>}
              {selectedPlace.website && <p><a href={selectedPlace.website} target="_blank" rel="noopener noreferrer">Website</a></p>}
              {selectedPlace.photoUrl && <img src={selectedPlace.photoUrl} alt="Place" style={{ width: '100px' }} />}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
