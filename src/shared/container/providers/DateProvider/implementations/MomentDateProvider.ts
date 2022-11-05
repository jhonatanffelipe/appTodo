import moment from 'moment';

import { IDateProvider, IResponseCheckDate } from '../IDateProvider';

class MomentDateProvider implements IDateProvider {
  anValidRetunTime(endDate: Date, quantity: number, typeCompare: moment.unitOfTime.DurationConstructor): boolean {
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
    const compare = moment(initialDate).diff(moment(finalDate), 'hours');
    return compare;
  }

  compareInDays(initialDate: Date, finalDate: Date): number {
    const compare = moment(initialDate).diff(moment(finalDate), 'days');
    return compare;
  }

  addDay(days: number): Date {
    const date = moment().add(days, 'days').toDate();
    return date;
  }

  addHours(hours: number): Date {
    const date = moment().add(hours, 'hours').toDate();
    return date;
  }

  compareIfBefore(comparedDate: Date, currentDate: Date): boolean {
    return moment(comparedDate).isBefore(moment(currentDate));
  }

  checkDate(date: Date, type: string): IResponseCheckDate {
    if (type === 'D') {
      return {
        initialDate: moment(date).startOf('day').toDate(),
        finalDate: moment(date).endOf('day').toDate(),
      };
    } else if (type === 'W') {
      return {
        initialDate: moment(date).startOf('week').toDate(),
        finalDate: moment(date).endOf('week').toDate(),
      };
    } else if (type === 'M') {
      return {
        initialDate: moment(date).startOf('month').toDate(),
        finalDate: moment(date).endOf('month').toDate(),
      };
    } else if (type === 'Y') {
      return {
        initialDate: moment(date).startOf('year').toDate(),
        finalDate: moment(date).endOf('year').toDate(),
      };
    }

    return {
      initialDate: moment().startOf('day').toDate(),
      finalDate: moment().endOf('day').toDate(),
    };
  }
}

export { MomentDateProvider };
