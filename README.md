# IOA Ticketing System

## Description
The IOA Ticketing System is a ticket purchasing and ride selection web application for Universal Orlando's Islands of Adventure theme park. The app allows users to purchase tickets, choose whether to add an Express Pass, and select rides after buying tickets. Users with an Express Pass can skip the simulated ride queue.

## Features
- Purchase tickets for a selected date.
- Option to add an Express Pass to skip ride lines.
- Ride selection with a simulated wait time or instant access depending on the ticket type.
- Videos showcasing the ride experience.

## Technologies Used
- **Frontend**: React.js, CSS
- **Backend**: Java (Spring Boot), Node.js (Express) - planned for future updates
- **Routing**: React Router
- **Styling**: Custom CSS, Bootstrap

## Installation Instructions
To run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/lego5858joren/IOATS.git
   cd IOATS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the frontend application**
   ```bash
   npm start
   ```

4. **Run the backend application**
   Navigate to the `src/main/java` folder and run the Spring Boot application from your IDE or using the command line:
   ```bash
   ./mvnw spring-boot:run
   ```

5. **Open in your browser**
   The app should be accessible at `http://localhost:3000`

## Usage
1. **Welcome Page**: Start by visiting the welcome screen that introduces the park.
2. **Ticket Purchase**: Select the date you plan to visit and choose whether to add an Express Pass for quicker ride access.
3. **Ride Selection**: Once the ticket is purchased, select from various rides. If you have an Express Pass, you skip the line simulation.

## Future Updates
This project will be incrementally updated to include:
- Backend integration using Java and Node.js to store ticket and ride data.
- Enhanced ride information and user experience.
- Improved styling and mobile responsiveness.

## Contributing
Feel free to fork this repository, make enhancements, and submit a pull request. Any contributions are welcome to improve the project!

## License
This project is open-source and available under the [MIT License](LICENSE).



