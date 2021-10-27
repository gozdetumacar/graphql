import React from 'react'
import { Link } from "react-router-dom";

const LAUNCHES = `
    {
    launchesPast(limit: 108) {
    mission_name
    links {
      article_link
      video_link
      flickr_images
      wikipedia
    }
    ships {
      name
      image
    }
    id
    launch_site {
      site_name
    }
    launch_date_utc
    launch_success
    launch_year
  }
}
`

function HomePage() {

  const [launches, setLaunches] = React.useState([]);
    
    React.useEffect(() => {
      fetch('https://api.spacex.land/graphql/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({query: LAUNCHES})
      }).then(response => response.json())
      .then(data => setLaunches(data.data.launchesPast))
    }, []);

    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/details">
          <button>details</button>
        </Link>
        
          {launches.map((launch) => (
            <div key={launch.id} style={{display:'flex'}}>
              <img
                src={launch.links.flickr_images}
                style={{ width: 100 }}
                alt=""
              ></img>
            </div>
          ))}
        
      </div>
    )
}

export default HomePage
