document.getElementById('calculate-btn').addEventListener('click', function() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const coats = parseInt(document.getElementById('coats').value);
  
    if (length && width && height && coats) {
      const area = 2 * (length * height + width * height + length * width);
      const paintNeeded = (area / 350) * coats; // Assuming 350 sq ft per gallon
      document.getElementById('paint-needed').textContent = paintNeeded.toFixed(2);
    } else {
      alert("Please fill all fields correctly.");
    }
  });
  