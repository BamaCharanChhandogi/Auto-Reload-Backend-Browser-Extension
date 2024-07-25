document.getElementById('startBtn').addEventListener('click', () => {
    chrome.runtime.sendMessage({action: 'start'}, (response) => {
        if (response.error) {
            showError(response.error);
        } else {
            hideError();
            updateButtonStates(true);
        }
    });
});

document.getElementById('stopBtn').addEventListener('click', () => {
    chrome.runtime.sendMessage({action: 'stop'}, () => {
        updateButtonStates(false);
    });
});

function showError(message) {
    let errorDiv = document.getElementById('error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error';
        errorDiv.style.color = 'red';
        errorDiv.style.marginTop = '10px';
        document.body.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function hideError() {
    const errorDiv = document.getElementById('error');
    if (errorDiv) {
        errorDiv.textContent = '';
    }
}

function updateButtonStates(isConnected) {
    document.getElementById('startBtn').disabled = isConnected;
    document.getElementById('stopBtn').disabled = !isConnected;
    
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.getElementById('statusText');
    
    if (isConnected) {
        statusDot.classList.remove('disconnected');
        statusDot.classList.add('connected');
        statusText.textContent = 'Connected';
    } else {
        statusDot.classList.remove('connected');
        statusDot.classList.add('disconnected');
        statusText.textContent = 'Disconnected';
    }
}

// Update button states based on current connection status
chrome.runtime.sendMessage({action: 'getStatus'}, (response) => {
    updateButtonStates(response.isConnected);
});