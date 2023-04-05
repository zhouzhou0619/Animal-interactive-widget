import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];


}



function App() {
    // const [count, setCount] = useState(0);
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // setCount(count + 1);
        // animals.push(getRandomAnimal())
        setAnimals([...animals, getRandomAnimal()]);
    };
    
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });


    return (
    <div>
        <button onClick={handleClick}>Add Animal</button>
        <div>{renderedAnimals}</div>
    </div>
    );
}

export default App;