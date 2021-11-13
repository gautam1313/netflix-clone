import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$4,346</span>
          <span className="featuredMoneyRate">
            -12.5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$5,346</span>
          <span className="featuredMoneyRate">
            -11.3 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$1,000</span>
          <span className="featuredMoneyRate">
            +4.23 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
