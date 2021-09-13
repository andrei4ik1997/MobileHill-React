function currDate() {
    let currentDate = new Date();
    function addingZero(number) {
      if (number > 9) return number;
      else return `0${number}`;
    }
    return `${addingZero(currentDate.getFullYear())}-${addingZero(
      currentDate.getMonth() + 1
    )}-${addingZero(currentDate.getDate())}`;
  }
  
  export default currDate;