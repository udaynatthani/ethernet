# Ethernet Configuration Web Interface

This project provides a responsive web-based interface for configuring Ethernet ports. It allows users to enable/disable ports, set IP settings, and validate user input, all within a sleek and user-friendly UI.

---

## 🔧 Features

- ✅ Configure Ethernet Port 1 & 2
- ✅ Enable/Disable individual ports
- ✅ Set **Static or DHCP IP Mode**
- ✅ Input:
  - IP Address
  - Subnet Mask
  - Default Gateway
  - DNS Server
- ✅ Priority and Route Settings
- ✅ Real-time Clock Display
- ✅ Input Validation (No Regex)
  - Ensures all fields are filled
  - Verifies valid IPv4 addresses
  - Validates subnet masks
- ✅ Styled with custom CSS for a clean modern layout

---

## 📁 File Structure

project/
│
├── index.html # Main HTML UI layout
├── styles.css # Styling for the interface
├── script.js # Input validation & time update logic
└── README.md # Project overview


---

## 🖥️ How to Use

1. Clone or download the project:
   ```bash
   git clone https://github.com/yourusername/ethernet-config-ui.git
   cd ethernet-config-ui

    Open index.html in your browser.

    Configure the desired Ethernet port.

    Click "Save Configuration".

⚠️ Input Validation Rules

    All fields must be filled before saving.

    IP Address and Subnet Mask must be valid IPv4 (e.g. 192.168.1.1, 255.255.255.0).

    Validation is done without regular expressions for simplicity.

🛠️ Technologies Used

    HTML5

    CSS3

    Vanilla JavaScript (No frameworks)

📸 Screenshot

✅ Future Improvements

    CIDR-based subnet mask validation

    Real-time inline validation with tooltips

    Save configurations locally or to backend

    Theme switch (light/dark mode)
