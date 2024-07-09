import Definitions from "./components/Definitions.jsx";

const definitions = [
    {dt: 'one', dd: 'two', id: 1},
    {dt: `another term`, dd: `another description`, id: 2},
];

function App() {

    return (
        <dl>
            <Definitions data={definitions}/>
        </dl>
    )
}

export default App

