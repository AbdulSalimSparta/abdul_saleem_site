import React from "react";
import style from "./Testimonals.module.css";
import TestimonalCard from "../../components/TestimonalCard/TestimonalCard";
import testimonalData from "../../Data/testimonalData";

function Testimonals() {
  return (
    <div className={style.testimonalcontainer}>
      <h1 className="SectionTitleMain">
        People Say About 
        <span> My Works</span>
      </h1>
      <ul className={style.testimonalcardcontainer}>
        {testimonalData.map((item, index) => {
         return(<li key={index} className={style.testimonallistitem}>
            <TestimonalCard
              title={item.title}
              testimonal={item.testimonal}
              username={item.username}
              userdescription={item.userdescription}
              userimg={item.userimg}
            ></TestimonalCard>
          </li>);
        })}
      </ul>
      <div className={style.paginationbox}>
        <div className={style.pagination}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
