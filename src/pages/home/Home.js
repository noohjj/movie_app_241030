import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import { styled } from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { ORIGINAL_URL } from "../../constant/imgUrl";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}}) no-repeat
    center/cover;
  padding: 0 ${mainStyle.moPadding};
  position: relative;
  @media screen and (max-width: 450px) {
    padding: 0 ${mainStyle.moPadding};
  }
`;

const TitleWrap = styled.div`
  max-width: 100%;
  position: absolute;
  bottom: 150px;
  left: 0;
  padding: 0 ${mainStyle.pcPadding};
  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    opacity: 0.7;
  }
  @media screen and (max-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
    width: 60%;
    h3 {
      font-size: 35px;
    }

    p {
      font-size: 14px;
      line-height: 30px;
    }
  }
`;

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

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <MainBanner $coverImg={nowData[0]?.backdrop_path}>
          <TitleWrap>
            <h3>{nowData[0]?.title}</h3>
            <p>{nowData[0]?.overview.slice(0, 100) + "..."}</p>
          </TitleWrap>
        </MainBanner>
      )}
    </div>
  );
};

export default Home;

// https://image.tmdb.org/t/p/original
