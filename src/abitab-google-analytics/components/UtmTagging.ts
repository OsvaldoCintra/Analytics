import ReactGA from "react-ga4";

const UTM_SOURCE = "twitter";
const UTM_MEDIUM = "paid-social";
const UTM_CAMPAIGN = "blog-posts";
const UTM_TERM = "ages_21-34";
const UTM_CONTENT = "image-1";
const UTM_TAGGING = `?${UTM_SOURCE}&${UTM_MEDIUM}&${UTM_CAMPAIGN}`;

// export const utmTagging = (eventName: string, eventCategory: string) => {
//   ReactGA.event({
//     category: eventCategory,
//     action: eventName,
//   });
// };
