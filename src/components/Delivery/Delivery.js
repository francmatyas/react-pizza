import "./Delivery.scss";
import marker from "../../assets/pizza-icon.png";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";

function Delivery() {
  const icon = L.icon({ iconUrl: marker, iconSize: [40, 40] });
  const position = [50.395113, 16.042862];
  return (
    <div className="delivery">
      <h2 className="delivery__title">Delivery to your home</h2>
      <div className="delivery-map-container">
        {
          <MapContainer
            center={position}
            zoom={12}
            scrollWheelZoom={true}
            className="delivery-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={position} color="#f4511e" radius={10000} />
            <Circle center={position} color="#fbc02d" radius={6500} />
            <Circle center={position} color="#039be5" radius={3500} />
            <Marker position={position} icon={icon}>
              <Popup>
                Restaurant
              </Popup>
            </Marker>
          </MapContainer>
        }
        <div className="delivery-map__legend">
          <div className="map__legend-item">
            <img src={marker} height="40px"/>
            <p><strong>Restaurant</strong></p>
          </div>
          <div className="map__legend-item">
            <FaMapMarkerAlt size={35} color="#039be5" />
            <p><strong>Zone A:</strong> free delivery</p>
          </div>
          <div className="map__legend-item">
            <FaMapMarkerAlt size={35} color="#fbc02d" />
            <p><strong>Zone B:</strong> 2€ per delivery</p>
          </div>
          <div className="map__legend-item">
            <FaMapMarkerAlt size={35} color="#f4511e" />
            <p><strong>Zone C:</strong> 4€ per delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Delivery;
