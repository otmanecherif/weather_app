const convertTo24HourFormat = (timeString) => {
    // Split the time string into hours, minutes, and AM/PM parts
    const [time, period] = timeString.split(' ');

    // Split hours and minutes
    const [hours, minutes] = time.split(':');

    // Convert hours to 24-hour format
    let convertedHours = parseInt(hours, 10);
    
    // Handle special case of 12 AM and 12 PM
    if (period.toUpperCase() === 'AM' && convertedHours === 12) {
        convertedHours = 0;
    } else if (period.toUpperCase() === 'PM' && convertedHours !== 12) {
        convertedHours += 12;
    }

    // Format the result as a string with leading zeros
    const formattedHours = String(convertedHours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    // Return the result in 24-hour format
    return `${formattedHours}:${formattedMinutes}`;
}

export default convertTo24HourFormat;