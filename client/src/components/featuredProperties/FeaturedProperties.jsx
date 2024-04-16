import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="/IMG/Home/misato.jpg" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
      </div>

      <div className="fpItem">
        <img src="/IMG/Home/misato1.jpg" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
      </div>

      <div className="fpItem">
        <img src="/IMG/Home/misato3.jpg" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
      </div>

      <div className="fpItem">
        <img src="/IMG/Home/misato2.jpg" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
      </div>
    </div>
  );
};

export default FeaturedProperties;
