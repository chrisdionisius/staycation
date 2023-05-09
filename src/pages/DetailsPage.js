import FeaturedImage from "parts/FeaturedImage";
import PageDetailTitle from "parts/PageDetailTitle";
import Header from "parts/header";
import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "parts/Footer";
import Testimony from "parts/Testimony";
import Activities from "parts/Activities";
import BookingForm from "parts/BookingForm";
import PageDetailDescription from "parts/PageDetailDescription";
import { fetchPage } from "store/actions/page";
import { Fade } from "react-awesome-reveal";

function DetailsPage({}) {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const { id } = useParams();

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const fnLoadPage = useCallback(
    async (id) => {
      if (!page[id]) {
        const response = dispatch(fetchPage(`/detail-page/${id}`, id));
        document.title = `Staycation | ${response.title}`;
      }
    },
    [dispatch, page]
  );

  // useEffect akan berjalan ketika ada perubahan nilai parameter
  useEffect(() => {
    window.scrollTo(0, 0);
    fnLoadPage(id);
  }, [id, fnLoadPage]); //contoh parameternya adalah id dimana ketika [id] berubah maka akan di trigger

  if (!page[id]) return null;

  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} />
      <FeaturedImage />
      <section className="container">
        <div className="row">
          <div className="col-12 col-lg-7 pr-5">
            <Fade bottom triggerOnce>
              <PageDetailDescription data={page[id]} />
            </Fade>
          </div>
          <div className="col-12 col-lg-5">
            <Fade bottom triggerOnce>
              <BookingForm />
            </Fade>
          </div>
        </div>
      </section>
      <Activities data={page[id].activityId} />
      <Testimony data={page[id].testimonial} />
      <Footer />
    </>
  );
}

export default DetailsPage;
