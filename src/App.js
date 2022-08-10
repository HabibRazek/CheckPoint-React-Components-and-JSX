import './App.css';
import ProfilePhoto from './Components/ProfilePhoto';
import FullName from './Components/FullName';
import Address from './Components/Address';

function App() {
  return (
    <div className="profile-container">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
