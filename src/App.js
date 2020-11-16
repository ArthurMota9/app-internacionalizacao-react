import logo from './logo.svg';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const [translate] = useTranslation();

  const updateLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {translate("Welcome to React")}
        </p>

        <div style={{ display: "flex" }}>
          <button onClick={() => updateLanguage("en")} style={{ marginRight: "10px" }}>
            {translate("English")}
          </button>

          <button onClick={() => updateLanguage("pt_BR")}>
            {translate("Portuguese")}
          </button>
        </div>

      </header>
    </div>
  );
}

export default App;
