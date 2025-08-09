import style from "./Indicator.module.css";

function Indicator(props) {
  return (
    <div className={style.indicatorbox}> 
      <p className={style.ststxt}> <span className={style.badgeindicator}></span> {props.message}</p>
    </div>
  );
}

export default Indicator;
