import './App.css';
import Nav from "./Nav";
import Card from "./Card";

function App() {
  return (
    <div className="App">

        <Nav/>
        <Card
            img={"https://i.pinimg.com/originals/82/85/51/8285516580cd7e0b3a1488fb25d2a116.png"}
            rating={"5.0"}
            city = {"Chicago"}
            state = {"IL"}
            body={"Sax Lessons With Dave Laroy"}
            price={"$165"}
        />


    </div>
  );
}

export default App;
