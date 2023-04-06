import dayjs from "dayjs";

class ManagerDate {
  now = dayjs()
  year = this.now.year()
  month = String(this.now.month() + 1).padStart(2, '0')
  day = String(this.now.date()).padStart(2, '0')

  getNow(): dayjs.Dayjs {
    return this.now
  }

  getNowDate(): string {
    return `${this.year}-${this.month}-${this.day}`
  }

  workingDays(date: string): number {
    return this.now.diff('2022-08-17', 'day')
  }

  workingMonth(date: string): number {
    return this.now.diff('2022-08-17', 'month')
  }

}

export default new ManagerDate()