import { useState, useEffect, useRef } from "react";
import Globe from 'react-globe.gl';

const Summerfield = {
    latitude: 36.2087,
    longitude: -79.9048,
    name: "Summerfield, NC",
    population: 11000
}

const World = (props) => {
    const [places, setPlaces] = useState([]);
    const globeEl = useRef();

    useEffect(() => {
      setPlaces([Summerfield]);
      // globeEl.current.controls().autoRotate = true;
      globeEl.current.pointOfView({ lat: 25, lng: -90, altitude: 2 });
    }, []);

    return (<Globe
      ref={globeEl}
      globeImageUrl="world.jpg"
      height={200}
      width={200}
      backgroundColor="rgba(0,0,0,0)"
      labelsData={places}
      labelLat={d => d.latitude}
      labelLng={d => d.longitude}
      labelText={d => d.name}
      labelSize={5}
      labelDotRadius={1}
      labelColor={() => 'rgba(255, 165, 0, 0.75)'}

      pointsData={places}
      pointLat={d => d.latitude}
      pointLng={d => d.longitude}
      pointLabel={d => d.name}
      pointRadius={.5}
      pointAltitude={.5}
      pointColor={() => 'rgba(255, 165, 0, 0.75)'}
    />);
};

export default World;