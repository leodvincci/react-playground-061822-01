import './App.css';
import Nav from "./Nav";
import Card from "./Card";

function App() {
  return (
    <div className="App">

        <Nav/>

        <div style={{display:"flex",justifyContent:"space-around"}}>

        <Card
            img={"https://i.pinimg.com/originals/82/85/51/8285516580cd7e0b3a1488fb25d2a116.png"}
            rating={"5.0"}
            city = {"Chicago"}
            state = {"IL"}
            body={"Sax Lessons With Dave Laroy"}
            price={"$165"}
        />

        <Card
            img={"https://i.pinimg.com/originals/82/85/51/8285516580cd7e0b3a1488fb25d2a116.png"}
            rating={"5.0"}
            city = {"Chicago"}
            state = {"IL"}
            body={"Sax Lessons With Dave Laroy"}
            price={"$165"}
        />

        <Card
            img={"https://i.pinimg.com/originals/82/85/51/8285516580cd7e0b3a1488fb25d2a116.png"}
            rating={"5.0"}
            city = {"Chicago"}
            state = {"IL"}
            body={"Sax Lessons With Dave Laroy"}
            price={"$165"}
        />

            <Card
                img={"https://i.pinimg.com/originals/82/85/51/8285516580cd7e0b3a1488fb25d2a116.png"}
                rating={"5.0"}
                city = {"Chicago"}
                state = {"IL"}
                body={"Sax Lessons With Dave Laroy"}
                price={"$165"}
            />

            <Card
                img={"https://i.pinimg.com/originals/82/85/51/8285516580cd7e0b3a1488fb25d2a116.png"}
                rating={"5.0"}
                city = {"Chicago"}
                state = {"IL"}
                body={"Sax Lessons With Dave Laroy"}
                price={"$165"}
            />

            <Card
                img={"https://i.pinimg.com/originals/82/85/51/8285516580cd7e0b3a1488fb25d2a116.png"}
                rating={"5.0"}
                city = {"Chicago"}
                state = {"IL"}
                body={"Sax Lessons With Dave Laroy"}
                price={"$165"}
            />

        </div>


    </div>
  );
}

export default App;
