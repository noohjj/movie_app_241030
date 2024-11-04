import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import Loading from "../../components/Loading";
import Banner from "./components/Banner";
import "swiper/css";
import Movies from "./components/Movies";

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

              <Movies data={nowData} title="현재 상영중" />
              <Movies data={popData} title="인기영화" />
              <Movies data={topData} title="랭킹 영화" />
              <Movies data={upData} title="개봉 예정 영화" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

// https://image.tmdb.org/t/p/original
