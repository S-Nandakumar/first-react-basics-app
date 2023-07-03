import { tours } from "../data";
import Title from "./Title";

const Tour = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title black="featured" blue="tours" />

        <div className="section-center featured-center">
          {tours.map((data) => {
            const { id, images, date, title, info, location, duriation, cost } =
              data;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={images} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {location}
                    </p>
                    <p>{duriation}</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Tour;
