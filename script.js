function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    document.getElementById("current-time").textContent = `Current Time: ${timeStr}`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
 
  function isValidIP(ip) {
    const parts = ip.split(".");
    if (parts.length !== 4) return false;
    for (const part of parts) {
      const num = Number(part);
      if (part === "" || isNaN(num) || num < 0 || num > 255) return false;
    }
    return true;
  }
  
  
  function isValidSubnet(subnet) {
    const validSubnets = [
      "128.0.0.0", "192.0.0.0", "224.0.0.0", "240.0.0.0", "248.0.0.0", "252.0.0.0",
      "254.0.0.0", "255.0.0.0", "255.128.0.0", "255.192.0.0", "255.224.0.0", "255.240.0.0",
      "255.248.0.0", "255.252.0.0", "255.254.0.0", "255.255.0.0", "255.255.128.0", "255.255.192.0",
      "255.255.224.0", "255.255.240.0", "255.255.248.0", "255.255.252.0", "255.255.254.0", "255.255.255.0",
      "255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248",
      "255.255.255.252", "255.255.255.254", "255.255.255.255"
    ];
    return validSubnets.includes(subnet);
  }
  
 
  document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
  
    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const inputs = form.querySelectorAll("input[type='text'], input[type='number'], select");
        let allFilled = true;
  
        let ipField = null;
        let subnetField = null;
  
        inputs.forEach((input) => {
          input.style.borderColor = ""; 
          if (input.placeholder === "Enter IP address" && input.closest("label").textContent.includes("IP Address")) {
            ipField = input;
          }
          if (input.placeholder === "Enter subnet mask") {
            subnetField = input;
          }
          if (input.value.trim() === "") {
            allFilled = false;
            input.style.borderColor = "red";
          }
        });
  
        if (!allFilled) {
          alert("Please fill all the fields before saving configuration.");
          return;
        }
  
        if (ipField && !isValidIP(ipField.value.trim())) {
          ipField.style.borderColor = "red";
          alert("Please enter a valid IP address (e.g., 192.168.1.1).");
          return;
        }
  
        if (subnetField && !isValidSubnet(subnetField.value.trim())) {
          subnetField.style.borderColor = "red";
          alert("Please enter a valid subnet mask (e.g., 255.255.255.0).");
          return;
        }
  
        alert("Configuration saved successfully!");
      });
    });
  });
  