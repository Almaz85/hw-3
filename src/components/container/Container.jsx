import React from "react";
import IdCard from "./IdCard";
import ImgCard from "./ImgCard";
import TitleCard from "./TitleCard";
import "./Container.css"
const Container = () => {
  let myobj = [
    {
      albumId: 1,
      id: 1,
      title: "заголовок",
      url: "https://img.freepik.com/premium-photo/man-opened-magic-book-with-growing-lights-magic-powder-learning-education-concept_34168-1926.jpg?w=2000",
    },
    {
      albumId: 2,
      id: 2,
      title: "заголовок",
      url: "https://media.istockphoto.com/photos/magical-sparks-fly-from-open-book-picture-id496928078?k=20&m=496928078&s=170667a&w=0&h=yPDgdzm4cBF96I1HEVaAU_3C0kjPzPOk2wxZ-8W39XM=",
    },
    {
      albumId: 3,
      id: 3,
      title: "заголовок",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSvvBsCbrMytbhYMkAPm5o4OFTw_j_47l3A&usqp=CAU",
    },
  ];
  return (
    <div>
      { myobj.map((el) => {
        return (
          <div className="Container">
            <IdCard id={el.id} />
            <ImgCard url={el.url} />
            <TitleCard title={el.title} />

          </div>
        );
      })}
    </div>
  );
};

export default Container;
