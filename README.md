# FitKnock UI Kit

`fitknock-ui-kit` is a customizable React UI component library that provides a set of essential components such as Button, Textbox, Card, Checkbox, Date Picker, Dropdown, Icon, RadioButton, Snackbar, Spinner, and Theme Switch. It helps developers build user interfaces quickly and efficiently.

## Installation

Install the `fitknock-ui-kit` package using npm:

```bash
npm install fitknock-ui-kit
```

## Usage

To use the components provided by `fitknock-ui-kit`, you need to import them into your React project.

### Importing Components

You can import components individually as needed:

```javascript
import { Button, Textbox, Card, Checkbox, Date, Dropdown, Icon, RadioButton, Snackbar, Spinner, ThemeSwitch } from "fitknock-ui-kit";
```

### Wrapping with ThemeProvider

To use any of the components, you must wrap your application with the `ThemeProvider` provided by `fitknock-ui-kit`. This ensures that the components have access to the necessary theme configurations.

You should import `ThemeProvider` and `ThemesConfig` from `fitknock-ui-kit` and wrap them around your root component (e.g., `App`) in your main entry file (`main.jsx` or `index.jsx`).

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, ThemesConfig } from "fitknock-ui-kit";

ReactDOM.render(
  <ThemeProvider themeValues={ThemesConfig.themes}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```

### Using Components

After wrapping your application with `ThemeProvider`, you can start using the components in your project:

```javascript
import React from "react";
import { Button, Textbox, Checkbox, Dropdown } from "fitknock-ui-kit";

const MyComponent = () => {
  return (
    <div>
      <Button color="primary" value="Click Me" />
      <Textbox placeholder="Enter your text here" />
      <Checkbox checked={true} label="Agree to terms" />
      <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
    </div>
  );
};

export default MyComponent;
```

## Available Components

The following components are available in `fitknock-ui-kit`:

- **Button**: A customizable button component.
- **Textbox**: A component for text input.
- **Card**: A container component to display content.
- **Checkbox**: A component for toggling options.
- **Date**: A date picker component.
- **Dropdown**: A component for selecting options from a dropdown list.
- **Icon**: A component for displaying icons.
- **RadioButton**: A component for selecting options.
- **Snackbar**: A component for displaying brief messages.
- **Spinner**: A loading spinner component.
- **ThemeSwitch**: A component to switch between themes.

## Props and Customization

All components come with various props that you can use to customize their behavior and appearance. Some common props include:

- **`value`**: Sets the value of the component.
- **`color`**: Defines the color of the component (e.g., "primary", "secondary").
- **Other Props**: Each component may have specific props for further customization. Refer to the component documentation for details.

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) to submit a pull request or report an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This `README.md` provides clear instructions for installation, usage, and a description of each component and its props. Adjust the content as needed based on your specific requirements or additional details you want to include.