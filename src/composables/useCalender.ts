import { ref, computed } from "vue";
import type { CalenderDate } from "@/plugins/api/types";
import utils, { DatePayload } from "@/plugins/utils";
import { WEEK_LENGTH, DATE_SPLITTER } from "@/constants";
import api from "@/plugins/api";

export type WeekElement = {
  start: DatePayload;
  dates: DateElement[];
};

export type DateElement = {
  date: DatePayload;
  isToday: boolean;
  dateIndex: number;
  data?: CalenderDate;
};

type DateIndexes = { weekIndex: number; dateIndex: number };

export default () => {
  const today = new Date();
  const todayPayload = utils.getDatePayload(today);
  const displayStartDate = ref(
    utils.getDatePayload(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay()
      )
    )
  );
  const loading = ref(false);
  let between: [DatePayload, DatePayload] | undefined = undefined;
  const getDateBetween = (): [DatePayload, DatePayload] => {
    const [year, month, date] = displayStartDate.value;
    return [
      utils.getDatePayload(new Date(year, month - 1, date - WEEK_LENGTH * 7)),
      utils.getDatePayload(
        new Date(year, month - 1, date + (WEEK_LENGTH + 1) * 7)
      ),
    ];
  };
  const weeks = ref<WeekElement[]>([]);
  let dateDatum: CalenderDate[] = [];
  const setWeeks = async () => {
    //
    loading.value = true;
    if (
      between == undefined ||
      utils.isGraterThan(between[0], displayStartDate.value) ||
      utils.isGraterThan(displayStartDate.value, between[1])
    ) {
      between = getDateBetween();
      const { data } = await api.getCalenderDatum(
        between.map((v) => utils.getDateString(v)) as [string, string]
      );
      dateDatum =
        (data?.listCalenderDates?.items.filter(
          (v) => v != undefined
        ) as CalenderDate[]) || [];
    }
    //
    const weekElements = [];
    const date = utils.getDateFromPayload(displayStartDate.value);
    for (let _ = 0; _ < WEEK_LENGTH; _++) {
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
        };
        weekElement.dates.push(dateElement);
        date.setDate(date.getDate() + 1);
      }
      weekElements.push(weekElement);
    }
    weeks.value = weekElements;
    loading.value = false;
  };
  const changeStartDate = async (direction: 1 | -1) => {
    const date = utils.getDateFromPayload(displayStartDate.value);
    date.setDate(date.getDate() + 7 * direction);
    displayStartDate.value = utils.getDatePayload(date);
    await setWeeks();
    const { weekIndex, dateIndex } = displayDateIndexes.value;
    setDisplayDateIndexes({ weekIndex: weekIndex - direction, dateIndex });
  };
  const displayDateIndexes = ref<DateIndexes>({
    weekIndex: 0,
    dateIndex: today.getDay(),
  });
  const setDisplayDateIndexes = (payload: DateIndexes) =>
    (displayDateIndexes.value = payload);
  const displayDate = computed<DateElement | undefined>(() => {
    const { weekIndex, dateIndex } = displayDateIndexes.value;
    return weeks.value[weekIndex]?.dates[dateIndex];
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
    weeks,
    setWeeks,
    displayStartDate,
    changeStartDate,
    displayDate,
    displayDateIndexes,
    setDisplayDateIndexes,
    today,
    loading,
    updateDateData,
  };
};
