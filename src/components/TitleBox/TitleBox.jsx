import style from "./TitleBox.module.css"
import Animate from "../Animate";
function TitleBox(props){
    return(
        <div className={style.box}> 
            <Animate>
            <h1>{props.title}</h1>
            </Animate>
        </div>
    );
}

export default TitleBox;