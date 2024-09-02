# SnackBar - UI Kit

## State to handle

```js
const [snackBarOptions, setSnackBarOptions] =
  useState <
  ISnackBarOptions >
  {
    variant: 'success', // error | success | info
    message: 'Great Work, Thanks for refering this doc',
    isShow: false,
  };
```

## Function to trigger

```js
const handleSnackBar = (e: any) => {
  e.preventDefault();
  setSnackBarOptions({
    ...snackBarOptions,
    isShow: true,
  });
};
```

## Component

```js
  <Snackbar snackBarOptions={snackBarOptions} setSnackBarOptions={setSnackBarOptions}/>
  <Button onClick={handleSnackBar}> Open snackbar </Button>
```
