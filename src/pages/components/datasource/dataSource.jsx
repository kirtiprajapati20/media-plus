import { useNavigate } from "react-router-dom";
import "../datasource/dataSource.css";

const DataSource = () => {
  const navigate = useNavigate();

  return (
    <div className="main-div">
      {/* <DynamicBreadcrumb /> */}

      <div className="row">
        <div className="col-md-6">
          <h3>Define your data source</h3>
          <p className="des">Select from the following options to continue</p>

          <div className="mb-3">
            <div className="card shadow w-75">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="/images/consumer.svg"
                    width="40"
                    alt="Statista Consumer Insights"
                  />
                  <span>Statista Consumer Insights</span>
                </div>
                <img
                  src="/images/icons/arrow.svg"
                  width={30}
                  height={16}
                  className="arrowicon"
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="card shadow w-75">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="/images/web.svg"
                    width="40"
                    alt="Global Web Index"
                  />
                  <span>Global Web Index</span>
                </div>
                <img
                  src="/images/icons/arrow.svg"
                  width={30}
                  height={16}
                  className="arrowicon"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="card shadow w-75">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img src="/images/tgi.svg" width="40" alt="TGI" />
                  <span>TGI</span>
                </div>
                <img
                  src="/images/icons/arrow.svg"
                  width={30}
                  height={16}
                  className="arrowicon"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="card shadow w-75">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="/images/brandIndex .svg"
                    width="40"
                    alt="YouGov BrandIndex "
                  />
                  <span>YouGov BrandIndex </span>
                </div>
                <img
                  src="/images/icons/arrow.svg"
                  width={30}
                  height={16}
                  className="arrowicon"
                />
              </div>
            </div>
          </div>

          <div className="d-flex gap-3">
            <button
              className="back-btn"
              onClick={() => {
                document
                  .querySelector(".main-div")
                  .classList.add("slide-out-right");
                setTimeout(() => navigate("/scope"), 200);
              }}
            >
              Back
            </button>
            <button className="next-btn">Next</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="images/data.svg" alt="Compass" className="compass-img" />
        </div>
      </div>
    </div>
  );
};
export default DataSource;
