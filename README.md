# Online Abuse Protection Guide Blog

This project is a single-page application (SPA) that functions as a multi-page blog about online abuse protection. It's built using Alpine.js for interactivity and Tailwind CSS for styling, both loaded via CDN for simplicity.

## Overview

The Online Abuse Protection Guide provides educational resources about online abuse, prevention strategies, and reporting mechanisms. Built as a lightweight, client-side application, it demonstrates modern web development techniques without requiring complex build tools or server-side infrastructure.

## Features

### Multi-Page Architecture
- Single HTML file with multiple "pages" controlled via Alpine.js state management
- Seamless navigation without page reloads
- Clean URL structure through state-based routing

### Responsive Design
- Mobile-first approach using Tailwind CSS utility classes
- Hamburger menu for small screens and expanded navigation for larger screens
- Optimized layout across all device sizes

### Dark/Light Mode
- User-togglable theme preference
- Theme preference saved to localStorage
- Automatic theme application on page reload

### Interactive Elements
- Expandable FAQ section with smooth animations
- Contact form with client-side validation
- Social sharing functionality
- Interactive navigation components

## Technical Implementation

### Core Technologies
- **Alpine.js** - Lightweight JavaScript framework for declarative interactivity
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### Performance Considerations
- No build step required
- Minimal dependencies - only Alpine.js and Tailwind CSS via CDN
- Optimized transitions and animations for smooth user experience
- Progressive enhancement approach

### Accessibility
- Semantic HTML structure
- Keyboard navigable interface
- Contrast compliant color choices
- Screen reader friendly implementation

## Pages

1. **Home** - Introduction to online abuse types and impacts
2. **Prevention Tips** - Strategies to secure accounts and privacy
3. **Reporting Guide** - Step-by-step instructions for reporting abuse on major platforms

## Getting Started

1. Clone this repository
2. Open `index.html` in any modern web browser
3. No server or build tools required!

## Future Enhancements

Potential improvements for this project:

- Add local storage for form data persistence
- Implement more advanced routing with browser history API
- Add content search functionality
- Create printable versions of guides
- Enhance animations and transitions

## License

MIT License - Feel free to use and modify for your own projects.

## Credits

Developed as a demonstration of lightweight web application architecture using modern JavaScript techniques and utility-first CSS.

For questions or contributions, please open an issue or submit a pull request.
