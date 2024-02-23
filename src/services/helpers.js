export const getDayMonthYear = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

 export const getTimeDayMonthYear = (timestamp , locale = 'en-US') => {
    const date = new Date(timestamp);
    return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} ${date.toLocaleString(locale === 'ar' ? 'ar' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
  }

 
  export const getTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = date.getHours() >= 12 ? 'pm' : 'am';
    return `${hours}:${minutes} ${amPm}`;
  }

  