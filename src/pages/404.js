import React from "react";

import Layout from "../components/Layout/layout";
import Seo from "../components/seo";
import Footer from "../components/Footer/footer";

import "../styles/index.scss";

const infoStyle = {
  witdh: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flex: 1,
};

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo />
      <div style={infoStyle}>
        <p className="up-and-down">This page doesn't exist</p>
      </div>
      <Footer />
    </Layout>
  );
};

export default NotFoundPage;
