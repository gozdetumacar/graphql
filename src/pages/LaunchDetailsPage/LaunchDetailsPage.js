import React from 'react'
import { useParams } from 'react-router'

const DETAILS = `
query LaunchDetails($launch_id: ID!) {
  launch(id: $launch_id) {
    mission_name
    links {
      flickr_images
      article_link
      video_link
      wikipedia
    }
    launch_date_utc
    id
    details
    launch_year
    launch_success
    rocket {
      rocket_name
    }
    launch_site {
      site_name
    }
  }
}
`

const LaunchDetailsPage = () => {

  let { id } = useParams();
  var launch_id = id;

    React.useEffect(() => {
      fetch('https://api.spacex.land/graphql/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: DETAILS,
          variables: {launch_id}
        }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }, [launch_id]);

    return (
        <div>
          Details Page
          ID: {id}
          Launch_id: {launch_id}
        </div>
    )
}

export default LaunchDetailsPage
