import './App.css';
import { Parrafo } from './components/Parrafo';
import { Redes } from './components/Redes';
import { Emoticon } from './components/Emoticon';
function App() {
    return (
        <main>
            <div>
                <Parrafo />
                <Emoticon />
                <Emoticon />
                <Emoticon />
                <Redes />
            </div>
        </main>
    );
}

export default App;
