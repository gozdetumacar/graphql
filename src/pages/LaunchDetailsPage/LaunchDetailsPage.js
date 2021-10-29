import React, { useState } from 'react'
import { useParams } from 'react-router'
import './detailspage.css'
import { useHistory } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";


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

  const history = useHistory();

  const [launchdet, setLaunchDet] = useState([]);
  const [launchimage, setLaunchImage] = useState([])
  const [launchvideo, setLaunchVideo] = useState([])

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
        .then(data => setLaunchDet(data.data.launch))  
  }, [launch_id]);

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
      .then(data => setLaunchImage(data.data.launch.links.flickr_images))
       
  }, [launch_id]);

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
        .then(data => setLaunchVideo(data.data.launch.links.video_link))
        
    }, [launch_id]);

  var dateutc = String(launchdet.launch_date_utc).split('T');

  let detailRender;
  if (launchimage) {
    detailRender =
      launchimage.map((launchimage, index) => (  
        <img
          key={index}
          src={launchimage}
          alt=""
          className="images"
        >
        </img>  
      ))
  } else {
    detailRender = "Loading...";
  }

  return (
    <div>
      <button
        onClick={() => history.goBack()}
        className="goback"
      >
        <AiOutlineArrowLeft className="icon"/> Home Page
      </button>
      <div className="info">
        <div className="detail-container">
        <p className="name">{launchdet.mission_name}</p>
        <p className="date">{dateutc[0]}</p>
        <a className="video" href={launchvideo}>Watch here</a> 
        </div>

        <div className="detailimages">{detailRender}</div>
      </div>
    </div>
)}

export default LaunchDetailsPage

