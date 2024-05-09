import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/Mail.List";
import Footerr from "../../components/footer/Footer";
import React, { useState, useEffect } from "react";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import HotelRule from "./hotelRule/HotelRule";
import { useParams } from "react-router-dom";
import axios from "axios";
const Hotels = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  //Lấy dữ liệu ks
  useEffect(() => {
    const fetchHotelDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3030/v2/api/hotel/detail/${id}`
        );
        setHotel(response.data.metadata.hotel);
        console.log(hotel);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu khách sạn:", error);
      }
    };

    fetchHotelDetail();
  }, [id]);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499873746.jpg?k=1371aa53da917d471a0dc30c3a50354afed0d074a8198670a40d0b9d033f9254&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/521259718.jpg?k=02bb7f3f4a9f4a29a20b29aa7cf67d96a1141c25bdbe5f5e0f2cfa77401a9089&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353019098.jpg?k=3beb07bc739e46674c68f2739c5abe970d07acb06e064a9ca3191fd3b3e0580a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357638688.jpg?k=31905867c855f7780710fa4fa1be6d7bbbe422b748180e7baa5356493a093a1a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353019105.jpg?k=0fccf1b3fb942f7b35de91745bcff66cebf53eaa623f948752bf9a4582104409&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357642217.jpg?k=194ad42880d94b85857a2f54a524cc9adde1bb0fca768154d3dead1db83335cf&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div className="a">
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider" onClick={() => setOpen(false)}>
            <FontAwesomeIcon
              icon={faXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faLeftLong}
              className="arrow"
              onClick={(e) => {
                e.stopPropagation();
                handleMove("l");
              }}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faRightLong}
              className="arrow"
              onClick={(e) => {
                e.stopPropagation();
                handleMove("r");
              }}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Đặt ngay</button>
          <h1 className="hotelTitle">LENS HOTEL</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>36 To Hien Thanh, DaLat,VietNam</span>
          </div>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in heart of DaLat</h1>
              <p className="hotelDesc">
                Nằm ở Đà Lạt, cách Công viên Yersin 19 phút đi bộ, RAON Bazan
                Hotel - STAY 24H cung cấp chỗ nghỉ có khu vườn, chỗ đậu xe riêng
                miễn phí và phòng chờ chung. Khách sạn 3 sao này có dịch vụ
                phòng và dịch vụ tiền sảnh. Chỗ nghỉ cung cấp lễ tân 24/24, dịch
                vụ đưa đón sân bay, bếp chung và Wi-Fi miễn phí ở toàn bộ chỗ
                nghỉ.
                <br></br>
                <br></br>
                Tại khách sạn, tất cả các phòng có bàn làm việc, TV màn hình
                phẳng, phòng tắm riêng, ga trải giường và khăn tắm. Các căn đều
                có minibar.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Điểm nổi bật của chỗ nghỉ</h1>
              <span>
                Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,9 điểm)
              </span>
              <span>Có bãi đậu xe riêng miễn phí ở khách sạn này</span>
              <button>Đặt ngay!</button>
            </div>
          </div>
          <div className="hotelUbility">
            <h1 style={{ fontSize: "15px" }}>
              Các tiện nghi được ưa chuộng nhất
            </h1>
            <div className="Ubility-content">
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faSquareParking}
                  style={{ color: "green" }}
                />
                <span style={{ fontWeight: "500", fontSize: "12px" }}>
                  Chỗ đỗ xe miễn phí
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faWifi} style={{ color: "green" }} />
                <span style={{ fontWeight: "500", fontSize: "12px" }}>
                  Wifi miễn phí
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hotel-Available">
          <h1 style={{ fontSize: "25px", paddingTop: "10px" }}>Đặt phòng</h1>
          <div className="ht-table">
            <div className="table-Content-title">
              <span style={{ flex: "2" }}>Chi tiết phòng</span>
              <span style={{ flex: "2" }}>Loại phòng</span>
              <span style={{ flex: "1" }}></span>
            </div>
            <div className="table-Content">
              <span style={{ flex: "2" }}>
                <p style={{ color: "#0071c2", fontWeight: "500" }}>
                  Phòng Deluxe giường đôi có ban công
                </p>
                <p>một giường đôi cực lớn</p>
              </span>
              <span
                style={{
                  flex: "2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Deluxe
              </span>
              <span
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    padding: "10px",
                    backgroundColor: "#0071c2",
                    color: "white",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Đặt ngay
                </p>
              </span>
            </div>
            <div className="table-Content">
              <span style={{ flex: "2" }}>
                <p style={{ color: "#0071c2", fontWeight: "500" }}>
                  Phòng Standard giường đôi
                </p>
                <p>một giường đôi </p>
              </span>
              <span
                style={{
                  flex: "2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Standard
              </span>
              <span
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    padding: "10px",
                    backgroundColor: "#0071c2",
                    color: "white",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Đặt ngay
                </p>
              </span>
            </div>
          </div>
        </div>

        <HotelRule />

        <MailList />
        <Footerr />
      </div>
    </div>
  );
};

export default Hotels;
