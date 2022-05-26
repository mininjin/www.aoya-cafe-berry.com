import { DATE_SPLITTER, DATE_TIME_SPLITTER, TIME_SPLITTER } from "@/constants";

export type DatePayload = [number, number, number];

export default {
  getDatePayload: (date: Date): DatePayload => [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ],
  getDateFromPayload: ([year, month, date]: DatePayload) =>
    new Date(year, month - 1, date),
  isEqualDate: (data: Date, str: string) => {
    const [year, month, date] = str.split(DATE_SPLITTER);
    return (
      data.getFullYear() == parseInt(year) &&
      data.getMonth() + 1 == parseInt(month) &&
      data.getDate() == parseInt(date)
    );
  },
  getDateString: ([year, month, date]: DatePayload) =>
    [
      ("0" + year).slice(-4),
      ("0" + month).slice(-2),
      ("0" + date).slice(-2),
    ].join(DATE_SPLITTER),
  getMonthStringFromDate: (str: String) =>
    str.split(DATE_SPLITTER).slice(0, 2).join(DATE_SPLITTER),
  getDateFromDateTime: (str: string) => {
    const [date] = str.split(DATE_TIME_SPLITTER);
    return date;
  },
  getTimeStampFromDate: (date: string) => {
    const now = new Date();
    const time = [now.getHours(), now.getMinutes()]
      .map((v) => ("0" + v).slice(-2))
      .join(TIME_SPLITTER);
    return [date, time].join(DATE_TIME_SPLITTER) + "Z";
  },
  isGraterThan: (
    [year0, month0, date0]: DatePayload,
    [year1, month1, date1]: DatePayload
  ) =>
    year0 > year1 ||
    (year0 == year1 && month0 > month1) ||
    (year0 == year1 && month0 == month1 && date0 > date1),
  convertToImage: async (file: File) => {
    return new Promise<string | undefined>((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", ({ target }) =>
        res(target?.result as string)
      );
      reader.addEventListener("error", ({ target }) => rej(target?.error));
    });
  },
};
