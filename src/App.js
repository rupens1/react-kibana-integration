import React from 'react';
import ProfileCard from "./ProfileCard.js";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import Kibana from "./kibana.js";

function App() {
  return (
    <div>

<Kibana>

 </Kibana>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
