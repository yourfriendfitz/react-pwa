import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://orangevalleycaa.org/api/videos");
      const result = response.json();
      setData(await result);
    };
    fetchData();
  }, []);

  return (
    <div className="container-fluid bg-primary p-3 text-center text-white">
      <nav className="navbar navbar-fixed-top text-center">
        <div className="col"><h3>Art Videos</h3></div>
      </nav>
      <div className="container-fluid text-center vh-50 overflow-auto">
        <div className="col">
          {data.map(video => (
            <div key={video.id} className="card text-center m-2 bg-secondary">
              <div className="card-body text-center">
                <h4>{video.name}</h4>
                <video
                  className="m-auto"
                  height={200}
                  width={280}
                  controls
                  src={video.video_url}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className="navbar navbar-fixed-bottom text-center">
        <div className="col">OrangeValleyCaa API</div>
      </nav>
    </div>
  );
}
export default App;
