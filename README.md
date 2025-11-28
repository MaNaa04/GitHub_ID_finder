# GitHub Profile Finder

A beautiful and responsive GitHub profile viewer built with React and Tailwind CSS. Search for any GitHub username and explore their profile information in an elegant, modern interface.

## 🌟 Features

- **Real-time Search**: Instantly search for GitHub users by username
- **Beautiful UI**: Modern dark theme with gradient effects and smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Comprehensive Profile Data**: View avatar, bio, repositories, followers, following, and more
- **External Links**: Direct links to user's GitHub profile, website, and social media
- **Error Handling**: Graceful error messages for invalid usernames or API issues
- **Loading States**: Smooth loading animations for better user experience

## 🚀 Live Demo

Visit the live application: [GitHub Profile Finder](https://gorgeous-zabaione-d7b6e6.netlify.app)

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server
- **GitHub API** - Fetching user profile data

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-profile-finder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

1. Enter a GitHub username in the search field
2. Click the "Search" button or press Enter
3. View the user's profile information including:
   - Profile picture and name
   - Bio and location
   - Repository count
   - Followers and following count
   - Company and website links
   - Join date

## 📝 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server on `http://localhost:5173`

### `npm run build`
Builds the app for production to the `dist` folder

### `npm run preview`
Serves the production build locally for testing

### `npm run lint`
Runs ESLint to check for code quality issues

## 🏗️ Project Structure

```
github-profile-finder/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── main.jsx            # Application entry point
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the appearance by:
- Modifying the color scheme in `src/App.jsx`
- Updating Tailwind configuration in `tailwind.config.js`
- Adding custom CSS in `src/index.css`

### API Integration
The app uses the GitHub REST API v3. No authentication is required for basic user information, but you may hit rate limits with heavy usage.

## 🌐 Deployment

The application is deployed on Vercel. To deploy your own version:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- GitHub API for providing user data
- Tailwind CSS for the utility-first CSS framework
- Lucide React for the beautiful icons
- Pexels for the background image

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact the maintainer.

---

Made with ❤️ using React and Tailwind CSS
