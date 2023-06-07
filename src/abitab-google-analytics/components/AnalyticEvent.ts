import ReactGA from "react-ga4";

export const analyticEvent = (eventName: string, eventCategory: string) => {
  ReactGA.event({
    category: eventCategory,
    action: eventName,
  });
};
