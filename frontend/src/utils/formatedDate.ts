export const formatRelativeTime = (isoDateString: string) => {

  const date = new Date(isoDateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units = [
    { name: "year", seconds: 60 * 60 * 24 * 365 },
    { name: "month", seconds: 60 * 60 * 24 * 30 },
    { name: "day", seconds: 60 * 60 * 24 },
    { name: "hour", seconds: 60 * 60 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const value = Math.floor(diffInSeconds / unit.seconds);
    /*
        Let's say if the difference is 8 months = 8 * 30 * 24 * 60 * 60.
        -> divided by 60 * 60 * 24 * 365 < 1
        -> divided by 60 * 60 * 24 * 30 > 1
    */
    if (value > 0) {
      return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
    }
  }

  return " just now";
};
