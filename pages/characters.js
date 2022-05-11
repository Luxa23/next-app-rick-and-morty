import Card from '../components/Card';
import CardsWrapper from '../components/CardsWrapper';
import Nav from '../components/Nav';
import useFetch from '../components/useFetch';
import Button from '../components/Button';

export default function CharactersPage() {
  const { data } = useFetch('https://rickandmortyapi.com/api/character/');

  //const [item, setItem] = useState({});
  //console.log(data);

  async function addToCollection(character) {
    const res = await fetch('/api/collection/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
    const message = await res.json();
    console.log(message);
  }

  return (
    <>
      <CardsWrapper>
        {data?.results.map(character => (
          <Card key={character.id} name={character.name}>
            {character.name}
            <img src={character.image} alt={character.name} />
            <ul>
              <li>Status: {character.status}</li>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
              <li>Location: {character.location.name}</li>
            </ul>
            <button
              onClick={() => {
                addToCollection(character);
              }}
            >
              Add to Collection
            </button>
          </Card>
        ))}
      </CardsWrapper>
      <Nav></Nav>
    </>
  );
}
