
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import players from './players';
import CardPlayer from './player';
function App() {
  const flexStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };
  return (
    <div style={flexStyle}>
      {players.map((el,i,t) => (
        <CardPlayer key={i} {...el} />
      ))}
    </div>
  );
}

export default App;
