# material-ui-banner
This is a simple Material-UI Banner Implementation. This implementation was made using Type Script.

To call this react component you just need to import it and define one boolean attribute to open it and a function to be called once the button is pressed, just like the example below:

```jsx
<Banner text='This is the banner message to be showed' open={this.state.showBanner} onClose={this.onCloseBanner}/>       

```

The button label can also be defined using the property 'buttonLabel'. It is showed using a "Collapse Down" transition.

Banner illustration:
![alt text](https://raw.githubusercontent.com/plabrao/material-ui-banner/master/banner.png)
