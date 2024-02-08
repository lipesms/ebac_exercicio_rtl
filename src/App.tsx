import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/223789028/jad-33737--2--6na4z2tx7k.JPG">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
