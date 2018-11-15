# React Native Calendar

## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```bash
git clone https://github.com/soheilwaysee/Calendar.git
cd Calendar
```

**2. Install all of the dependencies:**

```bash
npm install
```

**3. Start to run it:**

```bash
npm run start  # start the server
npm run ios  # Running ios simulator
npm run android # Running android project
```

> Note: If you see any issue for running ios project probably you have proxy conflict port and run flowing command then run project from xcode

```bash
open ios/Calendar.xcodeproj
```

> Note: before running the npm run android you should run android emulator

## NPM Script Commands

> Note you can use yarn or npm

| `npm run <script>` | Description                            |
| ------------------ | -------------------------------------- |
| `start`            | Run your app on the development server |
| `ios`              | Run your app on ios                    |
| `android`          | Run your app on ios                    |
| `clean`            | clean project cache and other task     |
| `eslint`           | Lint all `.js`                         |

## App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── .vscode                          # share vscode config between developers
│   └── launch.json
├── app                             # App source code
│   ├── assets                      # App assets
│   │   ├── fonts                   # App fonts
│   │   ├── images                  # App images
│   ├── components                  # Reusable components
│   ├── screens                      # Screen components
│   ├── app                         # App root component
│   ├── redux
│   │   ├── reducers                # redux reducers
│   │   ├── actionTypes             # Redux actions
│   │   ├── configureStore          # Redux create store
│   ├── utils
|   |   ├──  theme                 # App-wide utils
|   |   ├──  helpers                # App-wide helpers
|   |   ├──  validation             # App-wide validation
│   ├── App.js                      # App bootstrap
│   ├── RootNavigation.js           # Root of navigation
├── ios                             # ios project
├── android                         # android project
├── native-base-theme               # native base override theme
```
