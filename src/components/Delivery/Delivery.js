import "./Delivery.scss";
import marker from "../../assets/pizza-icon.png";
import { MapContainer, TileLayer, useMap, Marker, Popup, Circle} from "react-leaflet";
import L from "leaflet";

function Delivery() {
    const icon = L.icon({iconUrl: marker, iconSize: [40, 40]});
    const position = [51.505, -0.09];
  return (
    <div className="delivery">
      <h1>Delivery</h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className="delivery-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={position} pathOptions={"blue"} radius={5000} />
        <Marker position={position} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Delivery;
