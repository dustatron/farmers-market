import farmersMarketReducer from "../../reducers/farmers-market-reducer";
import MarketSchedule from "../../components/Data/MarketSchedule";

describe("farmersMarketReducer", () => {
  let action;
  const dailyLocation = {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
    img: "pioneer.jpg",
    id: 1
  };

  const currentState = {
    1: {
      day: "Sunday",
      location: "Lents International",
      hours: "9:00am - 2:00pm",
      booth: "4A",
      img: "lents.jpg",
      id: 1
    },
    2: {
      day: "Monday",
      location: "Pioneer Courthouse Square",
      hours: "10:00am - 2:00pm",
      booth: "7C",
      img: "pioneer.jpg",
      id: 2
    }
  };

  test("should return default state if there is no action type passed into the reducer", () => {
    expect(farmersMarketReducer({}, { type: null })).toEqual({});
  });

  test("should successfully add new market data to dailyLocation", () => {
    const { day, locaion, hours, booth, img, id } = dailyLocation;
    action = {
      type: "ADD_MARKET",
      day: day,
      locaion: locaion,
      hours: hours,
      booth: booth,
      img: img,
      id: id
    };

    expect(farmersMarketReducer({}, action)).toEqual({
      [id]: {
        day: day,
        locaion: locaion,
        hours: hours,
        booth: booth,
        img: img,
        id: id
      }
    });
  });

  test("should successfully delete a dailyLocation", () => {
    action = {
      type: "DELETE_MARKET",
      id: 1
    };
    expect(farmersMarketReducer(currentState, action)).toEqual({
      2: {
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00am - 2:00pm",
        booth: "7C",
        img: "pioneer.jpg",
        id: 2
      }
    });
  });
});

/*

1. add market / Update
2. delete market

------- Market Example --------
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
    img: "pioneer.jpg"
  }

*/
