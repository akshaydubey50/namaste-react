import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/**
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - SearhInput
 *  - ResturantContainer
 * Footer
 *  - CopyRight
 *  - Footer Links
 *  - Address
 */
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
          alt="food"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Section</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const resObJ = {
  info: {
    id: "262",
    name: "Anand Sweets",
    cloudinaryImageId: "sslqxrdr6e93xwwqldao",
    locality: "Kodihalli",
    areaName: "Indiranagar",
    costForTwo: "₹300 for two",
    cuisines: ["Sweets", "Chaat", "Snacks", "Desserts", "North Indian"],
    avgRating: 4.5,
    veg: true,
    feeDetails: {
      restaurantId: "262",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4500,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4500,
    },
    parentId: "11509",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "22 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-10-24 22:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {},
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(props);
  return (
    <div className="restaurant-card-container">
      <div className="restaurant-image">
        {/* Restaurant Img */}
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
          alt="food-image"
        />
      </div>
      <div className="restaurant-detail">
        <h3>{resData.info.name}</h3>
        <h4>
       <span>{resData.info.cuisines.join(", ")}</span>
        </h4>
        <h4>{resData.info.costForTwo}</h4>
       <div className="time-rating-wrapper">
       <h5>{resData.info.avgRating}stars</h5>
        <h5>{resData.info.sla.deliveryTime} Min</h5>
       </div>
      </div>
    </div>
  );
};

const BodyLayout = () => {
  return (
    <div className="">
      <div className="">
        Search Container
        <input type="text" />
      </div>
      <section className="card-wrapper">
        <RestaurantCard resData={resObJ} />
        <RestaurantCard resData={resObJ} />
        <RestaurantCard resData={resObJ} />
      </section>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <BodyLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
