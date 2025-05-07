// Global variable to store applied events
let appliedEvents = JSON.parse(localStorage.getItem('appliedEvents')) || [];

async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:8080/events');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const events = await response.json();
        console.log(events);
        displayEvents(events);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

function displayEvents(events) {
    const eventsContainer = document.getElementById('events');
    
    if (!eventsContainer) {
        console.error('Events container not found');
        return;
    }
    
    eventsContainer.innerHTML = ''; 
    events.forEach(event => {
        // Check if this event is already applied for
        const isApplied = appliedEvents.some(appliedEvent => appliedEvent.id === event.id);
        
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card'; 
        eventCard.innerHTML = `
            <h3>${event.eventName}</h3>
            <p class="event-date">Date: ${event.eventDate}</p>
            <p class="event-location">Location: ${event.eventLocation || 'N/A'}</p>
            <p>Paid: ${event.eventPaid ? 'Yes' : 'No'}</p>
            <p>Mode: ${event.eventMode}</p>
            <a href="#" class="button ${isApplied ? 'applied' : ''}" data-event-id="${event.id}"> 
                ${isApplied ? 'Applied' : 'Apply'} 
            </a>
        `;
        eventsContainer.appendChild(eventCard);
        
        // Add event listener to the button
        const applyButton = eventCard.querySelector('.button');
        applyButton.addEventListener('click', function(e) {
            e.preventDefault();
            handleApplyClick(event, applyButton);
        });
    });
}

function handleApplyClick(event, button) {
    // Check if already applied
    const eventId = event.id;
    const isAlreadyApplied = appliedEvents.some(e => e.id === eventId);
    
    if (!isAlreadyApplied) {
        // Add to applied events
        appliedEvents.push(event);
        // Save to localStorage
        localStorage.setItem('appliedEvents', JSON.stringify(appliedEvents));
        // Update button text and style
        button.textContent = 'Applied';
        button.classList.add('applied');
        
        // Optional: Show confirmation message
        alert(`You have successfully applied for: ${event.eventName}`);
    } else {
        // Optional: Show message that user already applied
        alert(`You have already applied for: ${event.eventName}`);
    }
}

// Function to display applied events on the applied events page
function displayAppliedEvents() {
    const appliedEventsContainer = document.getElementById('applied-events');
    
    if (!appliedEventsContainer) {
        return; // Not on the applied events page
    }
    
    if (appliedEvents.length === 0) {
        appliedEventsContainer.innerHTML = '<p class="no-events">You have not applied to any events yet.</p>';
        return;
    }
    
    appliedEventsContainer.innerHTML = '';
    appliedEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card'; 
        eventCard.innerHTML = `
            <h3>${event.eventName}</h3>
            <p class="event-date">Date: ${event.eventDate}</p>
            <p class="event-location">Location: ${event.eventLocation || 'N/A'}</p>
            <p>Paid: ${event.eventPaid ? 'Yes' : 'No'}</p>
            <p>Mode: ${event.eventMode}</p>
            <a href="#" class="button cancel" data-event-id="${event.id}">Cancel Application</a>
        `;
        appliedEventsContainer.appendChild(eventCard);
        
        // Add event listener to cancel button
        const cancelButton = eventCard.querySelector('.button.cancel');
        cancelButton.addEventListener('click', function(e) {
            e.preventDefault();
            cancelApplication(event.id);
        });
    });
}

function cancelApplication(eventId) {
    // Remove from applied events
    appliedEvents = appliedEvents.filter(event => event.id !== eventId);
    // Save to localStorage
    localStorage.setItem('appliedEvents', JSON.stringify(appliedEvents));
    // Refresh the displayed list
    displayAppliedEvents();
    
    // Optional: Show confirmation message
    alert('Application cancelled successfully');
}

// Initialize page based on current URL
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index5.html') || currentPage.endsWith('/')) {
        fetchEvents();
    } else if (currentPage.includes('applied-events.html')) {
        displayAppliedEvents();
    }
});