export const IMAGE_DIR = "/img/";
export const LUNCH_IMAGE_PATH = IMAGE_DIR + "lunches/";
export const ACCESSORIES_IMAGE_PATH = IMAGE_DIR + "accessories/";
export const TOP_IMAGE_PATH = IMAGE_DIR + "top/";
export const VEGETABLES_IMAGE_PATH = IMAGE_DIR + "vegetables/";
export const BENTO_IMAGE_PATH = IMAGE_DIR + "bentos/";
export const LINK_IMAGE_PATH = IMAGE_DIR + "links/";
export const LOADING_ANIMATION_DOM = import.meta.env.VITE_LOADING_ANIMATION_ID;
export const LOADING_PROGRESS_BAR_ID = import.meta.env
  .VITE_LOADING_PROGRESS_BAR_ID;
export const FONT_FAMILIES = ["Zen Maru Gothic", "Potta One", "Klee One:600"];
export const LOGIN_URL = import.meta.env.VITE_AUTH_URL;
export const COPYRIGHT = import.meta.env.VITE_COPYRIGHT;
export const DATE_SPLITTER = "-";
export const TIME_SPLITTER = ":";
export const DATE_TIME_SPLITTER = "T";
export const WEEK_LENGTH = 3;
export const WEEKEND = [0, 6];
export const DAY_LABELS = ["日", "月", "火", "水", "木", "金", "土"];
export const NORMAL_DAY_DESCRIPTION = "通常営業です！";
export const REST_DAY_DESCRIPTION = "お休み";
export const UNUSUAL_OPENING_DESCRIPTION = "時短営業です！";
export const ARTICLE_LIMIT = 2;
export const ARTICLE_LIMIT_MONTHLY = 10;
export const TITLE_MAX_LENGTH = 30;
export const CONTENT_MAX_LENGTH = 500;
export const DATE_FORMAT = new RegExp(
  `^[0-9]{4}${DATE_SPLITTER}[0-9]{2}${DATE_SPLITTER}[0-9]{2}$`
);
export const MONTHS = Array(12)
  .fill(null)
  .map((_, i) => i + 1);
export const FETCH_MONTH_LENGTH = 6;
