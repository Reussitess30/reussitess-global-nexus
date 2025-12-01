import { useEffect, useState } from "react";

export default function VisitorStats() {
  const [geo, setGeo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        setGeo(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="fixed top-0 right-0 m-2 bg-white/80 text-gray-800 rounded-xl shadow-md px-4 py-2 flex items-center gap-3 z-50">
      <span>🌐</span>
      {loading ? "Chargement visiteurs..." : geo ? (
        <div>
          <strong>Bienvenue !</strong>
          <br />
          <span>
            <span className="font-bold">{geo.city}</span> ({geo.region}) [{geo.country_name} • {geo.country_code}]
          </span>
          <br />
          <span>Langue navigateur : {navigator.language}</span>
          <br />
          <span>Device : {window.innerWidth < 900 ? "Mobile" : "Desktop"}</span>
          <br />
          <span>IP : {geo.ip}</span>
        </div>
      ) : (
        <span>Visiteur anonyme</span>
      )}
    </div>
  );
}