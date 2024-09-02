const colors = {
  primary: "#3185f9",
  primaryDark: "#2B67BA",
  primaryDim: "#81adea",
  secondary: "#3bc67a",
  secondaryDark: "#2d975d",
  secondaryDim: "#39c67899",
  tertiary: "#f94040",
  tertiaryDark: "#c63535",
  teriaryDim: "#f93e3e99",
  mud: "#4f4949",
  mudDim: "#4f4a4a99",
  darkModePrimaryBg: "#1a1c1e",
  darkModeSecondaryBg: "#282c31",
  darkModePrimaryTextColor: "#ffffff",
  darkModeSecondaryTextColor: "#b4b7bf",
  lightModePrimaryBg: "#fbfbfb",
  lightModeSecondaryBg: "#edf0f0",
  lightModePrimaryTextColor: "#272b2f",
  lightModeSecondaryTextColor: "#c4c0c0",
  white: "#ffffff",
  black: "#1A1C1E",
};

const themes = {
  dark: {
    secondaryBg: {
      backgroundColor: colors.darkModeSecondaryBg,
      color: colors.darkModePrimaryTextColor,
    },
    font: { color: colors.white },
    icon: { backgroundColor: "black", color: "white" },
    layoutCard: { backgroundColor: colors.darkModeSecondaryBg },
    card: { backgroundColor: colors.darkModePrimaryBg },
    button: {
      primary: {
        backgroundColor: colors.primaryDark,
        color: colors.white,
      },
      secondary: {
        backgroundColor: colors.secondaryDark,
        color: colors.white,
      },
      tertiary: {
        backgroundColor: colors.tertiaryDark,
        color: colors.white,
      },
      default: {
        backgroundColor: colors.darkModeSecondaryBg,
        color: colors.white,
      },
    },
    checkBox: {
      color: colors.white,
      backgroundColor: colors.primaryDark,
    },
    textbox: {
      input: { backgroundColor: "#282C31", color: "#939598" },
      label: { color: colors.white },
    },
    dropdown: {
      backgroundColor: "#282C31",
      color: "#939598",
      isFocused: "#6a6868",
      label: { color: colors.white },
    },
    snackBar: {
      icon: { color: colors.white },
      info: {
        backgroundColor: colors.primaryDark,
        color: colors.white,
      },
      success: {
        backgroundColor: colors.secondaryDark,
        color: colors.white,
      },
      error: {
        backgroundColor: colors.tertiaryDark,
        color: colors.white,
      },
    },
    colors: { ...colors },
  },
  light: {
    secondaryBg: {
      backgroundColor: colors.lightModeSecondaryBg,
      color: colors.lightModePrimaryTextColor,
    },
    font: { color: colors.black },
    icon: { backgroundColor: "white", color: "black" },
    layoutCard: { backgroundColor: colors.lightModeSecondaryBg },
    card: { backgroundColor: colors.lightModePrimaryBg },
    button: {
      primary: {
        backgroundColor: colors.primary,
        color: colors.white,
      },
      secondary: {
        backgroundColor: colors.secondary,
        color: colors.white,
      },
      tertiary: {
        backgroundColor: colors.tertiary,
        color: colors.white,
      },
      default: {
        backgroundColor: colors.lightModeSecondaryBg,
        color: colors.black,
      },
    },
    textbox: {
      input: { backgroundColor: "white", color: "#4F4949" },
      label: { color: colors.black },
    },
    checkBox: {
      color: colors.black,
      backgroundColor: colors.primary,
    },
    dropdown: {
      backgroundColor: "white",
      color: "#4F4949",
      isFocused: "#f5f5f5",
      label: { color: colors.black },
    },
    snackBar: {
      icon: { color: colors.white },
      info: {
        backgroundColor: colors.primary,
        color: colors.white,
      },
      success: {
        backgroundColor: colors.secondary,
        color: colors.white,
      },
      error: {
        backgroundColor: colors.tertiary,
        color: colors.white,
      },
    },
    colors: { ...colors },
  },
};

export default {
  themes,
  colors,
};
