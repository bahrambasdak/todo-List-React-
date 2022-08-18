const TodosHeader = () => {
  const time = new Date();
  const day = () => {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][time.getDay()];
  };

  const month = () => {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][time.getMonth()];
  };

  // Use a different header image depending on the time of day
  const getHeaderImageClass = (hour) => {
    if (hour >= 6 && hour < 16) {
      // Day time - 06:00 to 16:00
      return "bg-todo-header-day";
    } else if (hour >= 16 && hour < 20) {
      // Afternoon - 16:00 to 20:00
      return "bg-todo-header-afternoon";
    } else if (hour >= 20 || hour <= 5) {
      // Night time - 20:00 to 05:00
      return "bg-todo-header-night";
    }
  };

  return (
    <div className={`todos-header ${getHeaderImageClass(time.getHours())}`}>
      <div className="day">{day()}</div>
      <div className="month">{month()}</div>
    </div>
  );
};

export default TodosHeader;
