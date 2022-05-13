import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faXmark,
  faCircleDown,
  faPhoneFlip,
  faFax,
  faCaretLeft,
  faCaretRight,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "./FontAwesomeIcon.vue";

library.add(
  faBars,
  faXmark,
  faCaretLeft,
  faCaretRight,
  faCircleDown,
  faPhoneFlip,
  faFax,
  faInstagramSquare,
  faFacebook,
  faArrowDown
);

export { FontAwesomeIcon };
