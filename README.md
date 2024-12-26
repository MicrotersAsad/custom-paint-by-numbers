# Custom Paint by Numbers

**Custom Paint by Numbers** is a lightweight, intuitive web application designed to calculate the amount of paint required to cover a vehicle or similar structure. It accounts for the structure's dimensions (length, width, and height) and the number of coats needed, providing a real-time calculation of paint in gallons.

## Overview

The application is ideal for:
- Estimating paint requirements for vehicles.
- Quick calculations for small-scale projects.
- Providing a clear and easy-to-use interface for general users.

## Features

- **Interactive Input Fields**: Users can input length, width, height, and number of coats.
- **Dynamic Calculations**: The required amount of paint is displayed instantly based on inputs.
- **Customizable Design**: The CSS and JavaScript are simple and easy to modify for other applications.
- **Responsive Layout**: Designed for use on both desktop and mobile devices.

---

## Application Structure

### 1. Files Included
- **`popup.html`**: Contains the main structure and layout of the calculator.
- **`popup.css`**: Provides styling for the user interface, ensuring a clean and professional appearance.
- **`popup.js`**: Handles user inputs, calculations, and updates the results dynamically.

### 2. How It Works
1. **Input Dimensions**: Enter the length, width, and height of the object (in feet).
2. **Select Number of Coats**: Use the dropdown to specify the desired number of paint coats.
3. **Click Calculate**: Press the **Calculate** button to see the required amount of paint in gallons.
4. **View Results**: The calculated amount is displayed in the results section.

---

## Formula

The calculator uses the following formula to estimate the required paint:

```plaintext
Area = 2 * (Length * Height + Width * Height + Length * Width)
Paint Needed (in gallons) = (Area / 350) * Coats
