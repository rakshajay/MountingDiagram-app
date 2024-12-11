# 📀 LED Screen Mounting Diagram Tool

Welcome to the **LED Screen Mounting Diagram Tool** — a React-based interactive application designed to generate **customized installation diagrams** for LED screens. The app is user-friendly, robust, and built to support installation teams in their workflow.

---

## 🎯 **Overview**

This tool lets users:

- Select equipment (LED screen model, mount type, media player, and power outlet box).
- Generate accurate **installation diagrams** based on user selections.
- Configure settings such as:
   - Horizontal or vertical screen orientation.
   - Niche or flat wall installation.
   - Floor-to-screen center distance.
- Visualize all updates **in real-time**.
- Download the diagram as a **PDF** file.

### Why This Tool?
This app solves a real-world challenge by simplifying installation processes. It empowers teams to create accurate diagrams effortlessly, reducing errors and saving time.

---

## 🚀 **Features**

### 🎨 **User-Friendly Interface**
- Clean and intuitive UI with dropdowns for easy equipment selection.
- Real-time diagram updates as users make changes.

### 🛠️ **Configuration Options**
- Toggle **horizontal/vertical** orientation.
- Choose between **flat wall** or **niche** installation.
- Customize **floor-to-screen distance** and **niche depth**.

### 🔢 **Dynamic Drawing**
- Automatically displays:
   - Screen size and dimensions.
   - Power outlet locations (dashed box).
   - Accurate measurements.
- Seamlessly adjusts based on user selections.

### 📄 **PDF Export**
- Download installation diagrams as PDF files using `jspdf` and `html2canvas`.

---

## 📦 **Tech Stack**

- **React**: Component-based UI rendering.
- **Vite**: Fast build tool for modern JS apps.
- **JavaScript**: Core scripting language.
- **HTML2Canvas**: Capture diagrams for export.
- **JSPDF**: Generate PDF outputs.
- **SweetAlert2**: User-friendly notifications.
- **XLSX**: Parse equipment data from spreadsheets.
- **Sass**: Customizable styling.

---

## 🛠️ **Installation**

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd mountingdiagram-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

---

## 📊 **Usage**

### 1. Equipment Selection
- Choose **LED screen model**, **mount type**, **media player**, and **power outlet box** from the dropdown menus.

### 2. Configure Installation
- Select:
   - Screen orientation: **Horizontal** or **Vertical**.
   - Installation type: **Niche** or **Flat Wall**.
   - Distance from the floor to the screen center.

### 3. Update Drawing
- Observe real-time updates to the diagram:
   - Dimensions and measurements.
   - Power outlet positioning (dashed box).
   - Accurate spacing adjustments.

### 4. Download PDF
- Click the **"Download as PDF"** button to export the drawing.

---

## 📅 **Screenshots and GIFs**

Here’s a sneak peek of the app in action:

### App Walkthrough:
![GIF Placeholder](https://www.kapwing.com/videos/67592a863ce4b31a2a190ebb)

### Equipment Selection:
![Screenshot Placeholder](https://github.com/rakshajay/MountingDiagram-app/blob/main/src/assets/images/screenshot.png)

---

## 🔬 **Testing**

- Tested for responsive design across various screen sizes.
- Verified the accuracy of measurements and spacing.
- PDFs generated were validated for correctness.

---

## 🔗 **Known Issues**
- Adjust niche depth manually for custom screens.
- Precision might vary slightly depending on the browser.

---

## 🎯 **Future Enhancements**
1. Add the ability to **save projects** for later use.
2. Include **multi-language support**.
3. Allow users to draw custom annotations on the diagram.

---

## 📤 **Contributing**

We’d love to hear your thoughts! If you have suggestions or spot any bugs, feel free to:

1. Fork this repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your description here"
   ```
4. Push and open a Pull Request.

---

## 📄 **License**

This project is licensed under the MIT License. Feel free to use, modify, and share it.

---

## 📢 **Feedback**

Your feedback is incredibly important! Whether it’s about usability or a feature request, let’s connect:

- **Email**: rakshashettyhs@gmail.com 
- **LinkedIn**: [https://www.linkedin.com/in/rakshajay/](#)  

---

With this app, LED screen installations just got simpler, faster, and more reliable. I hope this tool enhances productivity and makes a real difference in the field. 🚀
