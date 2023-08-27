import { ref, computed } from "vue";
import type { CalenderDate } from "@/plugins/api/types";
import utils, { DatePayload } from "@/plugins/utils";
import { DATE_SPLITTER, FETCH_MONTH_LENGTH } from "@/constants";
import api from "@/plugins/api";

export type WeekElement = {
  start: DatePayload;
  dates: DateElement[];
};

export type DateElement = {
  date: DatePayload;
  month: number;
  isToday: boolean;
  dateIndex: number;
  data?: CalenderDate;
};

type DateIndexes = { weekIndex: number; dateIndex: number };

export default () => {
  const today = new Date();
  const todayPayload = utils.getDatePayload(today);
  const year = ref(todayPayload[0]);
  const month = ref(todayPayload[1]);
  const loading = ref(false);
  let between: [DatePayload, DatePayload] | undefined = undefined;
  const getDateBetween = (): [DatePayload, DatePayload] => {
    return [
      utils.getDatePayload(
        new Date(year.value, month.value - FETCH_MONTH_LENGTH, 1)
      ),
      utils.getDatePayload(
        new Date(year.value, month.value + FETCH_MONTH_LENGTH + 1, 1)
      ),
    ];
  };
  const weeks = ref<WeekElement[]>([]);
  let dateDatum: CalenderDate[] = [];
  const setWeeks = async () => {
    //
    loading.value = true;
    const thisMonth: DatePayload = [year.value, month.value, 1];
    if (
      between == undefined ||
      utils.isGraterThan(between[0], thisMonth) ||
      utils.isGraterThan(thisMonth, between[1])
    ) {
      between = getDateBetween();
      const { data } = await api.getCalenderDatum(
        between.map((v) => utils.getDateString(v)) as [string, string],
        100
      );
      let nextToken = data?.listCalenderDates?.nextToken;
      dateDatum =
        (data?.listCalenderDates?.items.filter(
          (v) => v != undefined
        ) as CalenderDate[]) || [];
      for (let i = 0; i < 10; i++) {
        if (!nextToken) break;
        const { data } = await api.getCalenderDatum(
          between.map((v) => utils.getDateString(v)) as [string, string],
          100,
          nextToken
        );
        nextToken = data?.listCalenderDates?.nextToken;
        dateDatum = dateDatum.concat(
          (data?.listCalenderDates?.items.filter(
            (v) => v != undefined
          ) as CalenderDate[]) || []
        );
      }
    }
    //
    const weekElements = [];
    const date = utils.getDateFromPayload(thisMonth);
    date.setDate(date.getDate() - date.getDay());
    for (let _ = 0; _ < 6; _++) {
      const weekElement: WeekElement = {
        start: utils.getDatePayload(date),
        dates: [],
      };
      for (let dateIndex = 0; dateIndex < 7; dateIndex++) {
        const dateElement: DateElement = {
          date: utils.getDatePayload(date),
          data: dateDatum.find((v) => utils.isEqualDate(date, v.date)),
          isToday: utils.isEqualDate(date, todayPayload.join(DATE_SPLITTER)),
          dateIndex,
          month: date.getMonth() + 1,
        };
        weekElement.dates.push(dateElement);
        date.setDate(date.getDate() + 1);
      }
      weekElements.push(weekElement);
      if (date.getMonth() + 1 != month.value) break;
    }
    weeks.value = weekElements;
    loading.value = false;
  };
  const changeMonth = async (direction: 1 | -1) => {
    const nextMonth = month.value + direction;
    if (nextMonth <= 0) {
      year.value--;
      month.value = 12;
    } else if (nextMonth > 12) {
      year.value++;
      month.value = 1;
    } else {
      month.value = nextMonth;
    }
    await setWeeks();
    setDisplayDateIndexes(undefined);
  };
  const displayDateIndexes = ref<DateIndexes | undefined>({
    weekIndex: Math.floor(
      (today.getDate() +
        utils.getDateFromPayload([year.value, month.value, 1]).getDay() -
        1) /
        7
    ),
    dateIndex: today.getDay(),
  });
  const setDisplayDateIndexes = (payload?: DateIndexes) =>
    (displayDateIndexes.value = payload);
  const displayDate = computed<DateElement | undefined>(() => {
    if (displayDateIndexes.value) {
      const { weekIndex, dateIndex } = displayDateIndexes.value;
      return weeks.value[weekIndex]?.dates[dateIndex];
    } else return undefined;
  });
  const updateDateData = async (data: CalenderDate) => {
    const index = dateDatum.findIndex((v) => v.id == data.id);
    if (index >= 0) {
      dateDatum.splice(index, 1, data);
    } else {
      dateDatum.push(data);
    }
    await setWeeks();
  };

  return {
    year,
    month,
    weeks,
    setWeeks,
    changeMonth,
    displayDate,
    displayDateIndexes,
    setDisplayDateIndexes,
    today,
    loading,
    updateDateData,
  };
};
