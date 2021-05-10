import './App.css';
import { pics } from './shared/pics';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {useState} from 'react';


function App() {
  const [picUri, setPicUri] = useState(0);
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="header">We love you, Mom!</h1>
        <div>
            <img className="pics" src={pics[picUri].uri} onClick={() => {
              /* 17 photos, so update if I add more */
              const num = picUri === 16 ? 0 : picUri + 1;
              setPicUri(num);
            }} />
        </div>
        <p>Thank you for everything you do for us! We're so lucky to have you as a mother and a best friend.
           We all wish we could be there with you every day, but we will always be thinking of you no matter what.
           I love you so much! 
        </p>
        
        <p>Here's some music that makes me think of you! Hope it brightens your day!</p>
        <iframe src="https://open.spotify.com/embed/playlist/6s2ZphIQ3VstsqzkfIyx25" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  );
}

export default App;
