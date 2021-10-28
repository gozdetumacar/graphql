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

  const [detail, setDetail] = React.useState([]);

  let { id } = useParams();
  var launch_id = id;

  React.useEffect(() => {
      return fetch('https://api.spacex.land/graphql/', {
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
      .then(data => setDetail(data.data.launch))
       
  }, [launch_id]);
  
  var dateutc = String(detail.launch_date_utc).split('T');
  
  return (
    
    <div>
      <button
        onClick={() => history.goBack()}
        className="goback"
      >
        <AiOutlineArrowLeft className="icon"/> Home Page
      </button>
      <div className="detail-container">
      <p className="name">{detail.mission_name}</p>
      <p className="date">{dateutc[0]}</p>
      <p className="video">Video link</p>
      </div>
    </div>
    
    
)}

export default LaunchDetailsPage

  {/* Details Page
          
       
        date: {detail.launch_date_utc} */}