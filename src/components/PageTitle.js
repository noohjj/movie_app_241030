import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | PNFLIEX</title>
    </Helmet>
  );
};

export default PageTitle;
