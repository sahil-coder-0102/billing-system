// Load existing settings from localStorage or set default values
function loadSettings() {
    const taxRate = localStorage.getItem('taxRate') || '10';
    const discountLimit = localStorage.getItem('discountLimit') || '20';
    const currency = localStorage.getItem('currency') || 'USD';
    const userManagement = localStorage.getItem('userManagement') === 'true';

    document.getElementById('taxRate').value = taxRate;
    document.getElementById('discountLimit').value = discountLimit;
    document.getElementById('currency').value = currency;
    document.getElementById('userManagement').checked = userManagement;

    updateSettingsDisplay();
}

// Save the settings to localStorage
function saveSettings() {
    const taxRate = document.getElementById('taxRate').value;
    const discountLimit = document.getElementById('discountLimit').value;
    const currency = document.getElementById('currency').value;
    const userManagement = document.getElementById('userManagement').checked;

    localStorage.setItem('taxRate', taxRate);
    localStorage.setItem('discountLimit', discountLimit);
    localStorage.setItem('currency', currency);
    localStorage.setItem('userManagement', userManagement);

    updateSettingsDisplay();
    alert("Settings saved successfully!");
}

// Update the display section with current settings
function updateSettingsDisplay() {
    const settingsList = document.getElementById('currentSettingsList');
    settingsList.innerHTML = `
        <li><strong>Tax Rate:</strong> ${localStorage.getItem('taxRate')}%</li>
        <li><strong>Max Discount:</strong> ${localStorage.getItem('discountLimit')}%</li>
        <li><strong>Currency:</strong> ${localStorage.getItem('currency')}</li>
        <li><strong>User Management:</strong> ${localStorage.getItem('userManagement') === 'true' ? 'Enabled' : 'Disabled'}</li>
    `;
}

// Load settings when the page loads
window.onload = loadSettings;
