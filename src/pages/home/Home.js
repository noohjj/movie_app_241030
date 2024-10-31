import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  console.log(popData);
  console.log(topData);
  console.log(upData);

  return (
    <>
      <h2>Home</h2>
    </>
  );
};

export default Home;

// 동기화
// 비동기화
