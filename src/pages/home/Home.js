import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import Loading from "../../components/Loading";
import Banner from "./components/Banner";
import { Link } from "react-router-dom";
import { W500_URL } from "../../constant/imgUrl";
import { styled } from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Container = styled.section`
  padding: 0 ${mainStyle.moPadding};
  @media screen and (min-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
  }
`;

const Title = styled.div`
  margin: 50px 0;
  font-size: 22px;
  font-weight: 400;
`;

const Con = styled.div``;

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: now } = await nowPlaying();
        const { results: pop } = await popular();
        const { results: top } = await topRated();
        const { results: up } = await upComing();

        setNowData(now);
        setPopData(pop);
        setTopData(top);
        setUpData(up);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  const params = {
    spaceBetween: 10,
    slidesPerView: 3.3,
    breakpoints: {
      1024: {
        spaceBetween: 20,
        slidesPerView: 5.5,
      },
      640: {
        spaceBetween: 15,
        slidesPerView: 4.5,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 3.5,
      },
    },
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowData && (
            <div>
              <Banner data={nowData} />
              <Container>
                <Title>현재 상영중</Title>
                <Swiper {...params}>
                  {nowData.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <Con>
                        <Link to={`/detail/${movie.id}`}>
                          <img
                            src={W500_URL + movie.poster_path}
                            alt={movie.title}
                          />
                        </Link>
                      </Con>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Container>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

// https://image.tmdb.org/t/p/original
