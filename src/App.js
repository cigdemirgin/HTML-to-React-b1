import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Title />
      <Paragraph />
      <Paragraph2 />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png" />
    </div>
  );
}

const Title = () => <h1>Talimatlar</h1>;
const Paragraph = () => {
  return (
    <p>
      Burada App.js bölümünde React-ify yapmanız istenmektedir. En az{" "}
      <strong>iki</strong> component kullanın. CSS bölümü hakkında
      endişelenmeyin. İşiniz bittiğinde, beyaz arka plana sahip işlenmiş görünüm
      aynı olmalıdır.
    </p>
  );
};
const Paragraph2 = () => {
  return (
    <p>
      Henüz
      <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">
        React ile düşünmeye başlamadınız mı{" "}
      </a>
      ?
    </p>
  );
};
