//TIME

// Get the real-time data element
const realTimeDataElement = document.querySelector('[data-testid="real-time-data"]');
// Function to update real-time data (you can replace this with your actual data source)
function updateRealTimeData() {
    const currentTime = new Date().toLocaleTimeString();
    realTimeDataElement.textContent = `Current Time: ${currentTime}`;
}
// Update real-time data every second
setInterval(updateRealTimeData, 1000);

//DATE

// Get the current date
const currentDateElement = document.querySelector('[data-testid="current-date"]');
// Function to update the current date
function updateCurrentDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    currentDateElement.textContent = formattedDate;
}

// Update the current date when the page loads
updateCurrentDate();
