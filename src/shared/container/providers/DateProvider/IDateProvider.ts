interface IResponseCheckDate {
  initialDate: Date;
  finalDate: Date;
}

interface IDateProvider {
  anValidRetunTime(endDate: Date, quantity: number, typeCompare: moment.unitOfTime.DurationConstructor): boolean;
  dateNow(): Date;
  compareInHours(initialDate: Date, finalDate: Date): number;
  compareInDays(initialDate: Date, finalDate: Date): number;
  addDay(days: number): Date;
  addHours(hours: number): Date;
  compareIfBefore(comparedDate: Date, currentDate: Date): boolean;
  checkDate(date: Date, type: string): IResponseCheckDate;
}

export { IDateProvider, IResponseCheckDate };
