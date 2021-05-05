import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing2/Hero";
import Brands from "../sections/landing2/Brands";
import Categories from "../sections/landing2/Categories";
import Content1 from "../sections/landing2/Content1";
import FeaturedJobs from "../sections/landing2/FeaturedJobs";
import Content2 from "../sections/landing2/Content2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <Brands />
        <Categories />
        <Content1 />
        <FeaturedJobs />
        <Content2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
