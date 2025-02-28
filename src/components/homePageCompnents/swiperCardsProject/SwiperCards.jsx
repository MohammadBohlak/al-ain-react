import React, { useEffect, useState } from "react";
import CardProject from "../cardProject/CardProject";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css/pagination";
import "swiper/css";
import styled from "styled-components";
import api from "../../../api/axios";

function SwiperCards() {
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    api.get("/ar/browsable-projects/")
    .then((res)=>{
      setProjects(res.data)
    })
  },[])
  return (
    <>
      <Swiper
        pagination={{
            clickable: true,
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {projects.map((e, index)=>(
          <SwiperSlide key= {index}>

            <CardProject image={e.image} />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}

export default SwiperCards;
