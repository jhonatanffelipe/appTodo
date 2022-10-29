import moment from "moment";

import { IDateProvider } from "../IDateProvider";

class MomentDateProvider implements IDateProvider {
  anValidRetunTime(
    endDate: Date,
    quantity: number,
    typeCompare: moment.unitOfTime.DurationConstructor
  ): boolean {
    const limitDate = moment().add(quantity, typeCompare);

    if (moment(endDate) < limitDate) {
      return false;
    }

    return true;
  }

  dateNow(): Date {
    const date = moment().toDate();
    return date;
  }

  compareInHours(initialDate: Date, finalDate: Date): number {
    const compare = moment(initialDate).diff(moment(finalDate), "hours");
    return compare;
  }

  compareInDays(initialDate: Date, finalDate: Date): number {
    const compare = moment(initialDate).diff(moment(finalDate), "days");
    return compare;
  }

  addDay(days: number): Date {
    const date = moment().add(days, "days").toDate();
    return date;
  }

  addHours(hours: number): Date {
    const date = moment().add(hours, "hours").toDate();
    return date;
  }

  compareIfBefore(comparedDate: Date, currentDate: Date): boolean {
    return moment(comparedDate).isBefore(moment(currentDate));
  }
}

export { MomentDateProvider };
