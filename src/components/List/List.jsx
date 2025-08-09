import style from "./List.module.css"

function List(props){
    return(<li className={style.List}>{props.value}</li>);
}

export default List;