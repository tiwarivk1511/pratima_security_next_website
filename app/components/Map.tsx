// "use client";

// export default function Map() {
//   return (
//     <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '20px' }}>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4395.753894947735!2d77.46780837631631!3d28.629420375666328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced19deb5ea7b%3A0xba5be479965a3e43!2sPratima%20Security%20Services%20(PSS%20Security)%20%7C%20Security%20Services%20In%20Delhi%2C%20Noida%2C%20Ghaziabad%20%26%20NCR!5e1!3m2!1sen!2sin!4v1772199027784!5m2!1sen!2sin"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </div>
//   );
// }

"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet markers default icon fix (Next.js ke liye zaroori hai)
const icon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Map({ position, zoom }: { position: [number, number], zoom: number }) {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
         <Marker position={position} icon={icon}>
          <Popup closeButton={false} minWidth={220}>
            <div style={{
              padding: '8px',
              fontFamily: 'Inter, system-ui, sans-serif',
              borderRadius: '12px',
            }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                Pratima Security Services
              </h4>
              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#64748b', lineHeight: '1.4' }}>
                Shop No 2, Shankar Vihar, Near Shiv Mandir, Lalkuan, Ghaziabad.
              </p>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=28.628743,77.470903"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#2563eb',
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  transition: 'background 0.2s ease',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
              >
                <span>Get Directions</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Popup>
        </Marker>

      {/* Custom Bottom Info Badge */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(8px)',
        padding: '8px 16px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: 600,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.05)',
        color: '#1e293b'
      }}>
        📍 Head Office • Ghaziabad
      </div>
    </MapContainer>
  );
}
