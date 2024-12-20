import { styled } from "styled-components";
import { mainStyle } from "../../../GlobalStyled";
import { ORIGINAL_URL } from "../../../constant/imgUrl";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat
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
    font-size: 18px;
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

const Banner = ({ data }) => {
  return (
    <MainBanner $coverImg={data[0]?.backdrop_path}>
      <TitleWrap>
        <h3>{data[0]?.title}</h3>
        <p>{data[0]?.overview.slice(0, 100) + "..."}</p>
      </TitleWrap>
    </MainBanner>
  );
};

export default Banner;
