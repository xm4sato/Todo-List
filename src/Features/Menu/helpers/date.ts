type item = { itemID: number; itemValue: string | number; itemTitle: string };
type TimeType = "year" | "month" | "day";

export const getDate = (timeType: TimeType): item[] => {
  const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1, // أشهر JavaScript تبدأ من 0، لذا نضيف 1
    day: new Date().getDate(),
  };

  switch (timeType) {
    case "year": {
      let startYear = 2050;
      let yearsArray: item[] = [];
      let id = 0;

      while (startYear >= date.year) {
        id++;
        yearsArray.push({
          itemID: id,
          itemValue: startYear,
          itemTitle: String(startYear),
        });
        startYear--;
      }
      return yearsArray;
    }

    case "month": {
      let monthArray: item[] = [];
      // الشهور ثابتة دائماً من 1 إلى 12
      for (let m = 1; m <= 12; m++) {
        monthArray.push({
          itemID: m,
          itemValue: m,
          itemTitle: String(m).padStart(2, '0'), // تحويل 1 إلى 01 لشكل أجمل
        });
      }
      return monthArray;
    }

    case "day": {
      let daysArray: item[] = [];
      // توليد أيام الشهر (سنفترض 31 يوماً كبداية)
      for (let d = 1; d <= 31; d++) {
        daysArray.push({
          itemID: d,
          itemValue: d,
          itemTitle: String(d),
        });
      }
      return daysArray;
    }
    
    default:
      return [];
  }
};