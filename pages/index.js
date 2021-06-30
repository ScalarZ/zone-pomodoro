import Head from "next/head";
import useStore from "../store/useStore";
import Store from "../store/storeContext";
import Logo from "../components/Logo";
import Settings from "../components/Settings";
import SettingsIcon from "../components/SettingsIcon";
import Icons from "../components/Icons";
import Timer from "../components/Timer";
import Dots from "../components/Dots";
import Title from "../components/Title";
import Sounds from "../components/Sounds";
import Audio from "../components/Audio";

const App = () => {
  const store = useStore();

  return (
    <div className="App overflow-hidden bg-primary">
      <Head>
        <title>Zone</title>
        <link rel="icon" href="/pomodoro.png" />
      </Head>
      <Store.Provider value={store}>
        <div className="Main relative p-4 m-auto min-h-screen max-w-lg flex flex-col font-segoe-print text-primary bg-primary">
          <Settings />
          <header
            className={`mb-4 flex ${
              !store.isPlay ? "justify-between" : "justify-center"
            }`}
          >
            <Logo color="#F3EED9" />
            <SettingsIcon isOn={false} />
          </header>
          <div className="flex-grow flex flex-col justify-evenly">
            <main className="mx-auto mb-4 w-60">
              <Icons />
              <Timer />
              <Dots />
              <Title />
              <Audio />
            </main>
            <footer>
              <Sounds />
            </footer>
          </div>
        </div>
      </Store.Provider>
    </div>
  );
};

export default App;
