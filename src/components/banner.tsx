import { Link } from "react-router-dom";
import { useBannerStore } from "src/utilities/store";

import { HiX } from "react-icons/hi";

const Banner = () => {
  const { banner, enabled, setEnabled } = useBannerStore();

  return enabled && banner.length > 0 ? (
    <div className="banner">
      <span>
        {banner.map((item, index) => (
          <BannerText key={index} {...item} />
        ))}
      </span>
      <HiX
        onClick={() => {
          localStorage.setItem("bannerEnabled", "false");
          setEnabled(false);
        }}
        className="close"
      />
    </div>
  ) : null;
};

const BannerText = (props: BannerItem) =>
  props.type === "text" ? props.text : <Link to={props.to}>{props.text}</Link>;

export default Banner;
