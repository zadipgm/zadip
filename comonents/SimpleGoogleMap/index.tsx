import { useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Wrapper } from "./styled.component";

interface IProps {
  lat: number;
  long: number;
  width?: string;
  height?: string;
  zoom?: number;
}

const SimpleGoogleMap = ({ lat, long, width = "100%", height }: IProps) => {
  const [center, setCenter] = useState({
    lat: lat,
    lng: long,
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyASnrBOYvED4InaXqQCQosrPeQmkVgYAec",
  });

  const containerStyle = {
    width,
    height,
  };

  const [map, setMap] = useState(null);

  useEffect(() => {
    setCenter({ lat: lat, lng: long });
  }, [map]);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setTimeout(() => {
      setMap(map);
    }, 500);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <Wrapper id="map_google">
      <GoogleMap
        options={{ zoomControl: false }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </Wrapper>
  );
};

export default SimpleGoogleMap;
