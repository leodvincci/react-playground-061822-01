import "./App.css"
import star from "./starIcon.png";
function Card(props){




    return(

        <div className={"card-page"}>
            
            <div>
                <img className={"card-img"} src={props.img} alt=""/>
            </div>
            
                <div className={"card-info"} >
                          <img style={{alignSelf:"center"}} src={star} alt=""/>
                          <p style={{paddingLeft:"5px"}}>{props.rating}</p>
                          <p style={{paddingLeft:"10px"}} > • {props.city},{props.state}</p>

                </div>

            <div style={{position:"relative",left:"10px"}}>
                <p>{props.body}</p>
                <p><strong>From {props.price}</strong> per person</p>
            </div>

            




        </div>
    )

}

export default Card