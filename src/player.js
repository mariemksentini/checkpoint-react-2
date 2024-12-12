// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPlayer =(player)=> {
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
    <container style={flexStyle}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={player.image} />
            <Card.Body>
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>
                <b>{player.name}</b>, from {player.nationality} is currently aged {player.age} and playing for the {player.team} team with the jersey number of {player.jerseyNumber}.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    </container>
    
  );
}

export default CardPlayer;