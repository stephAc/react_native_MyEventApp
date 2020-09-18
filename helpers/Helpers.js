import moment from 'moment';

export default class Helpers {
  static getActualDate() {
    return moment().format('YYYY-MM-DDTh:mm:ss');
  }
  static extracDayFromDate(date) {
    return moment(date).format('DD');
  }
  static extracMonthFromDate(date) {
    return moment(date).format('MMM');
  }
  static extracParentCategory(category) {
    return category.substr(0, category.indexOf('->'));
  }
  static getEndOfWeek() {
    let today = moment();
    return today.endOf('week').format('YYYY-MM-DDTh:mm:ss');
  }
}
