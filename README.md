ripple-checkout
===============

An embeddable widget for paying with Ripple.

See [http://emschwartz.github.io/ripple-checkout/](http://emschwartz.github.io/ripple-checkout/) for a live demo.

### How to include the widget in a webpage:

Copy the `ripple-checkout.js` script and the `ripple-checkout-button.png` image into your page's directory and include the following `<script>` elements in the page:

```html
<script type='text/javascript' src='./ripple-checkout.js'></script>
<script type='text/javascript' id='ripple-checkout'>

  var checkout = RippleCheckout({
    dst_address: 'r4nkJpL9se94ASQut4eXRRtnBPtDpY2PZ6',
    server: {
      host: 's_west.ripple.com',
      port: '443',
      secure: true
    }
  });

  checkout.addButton({
    dst_amount: {
      value: '20',
      currency: 'XRP',
      issuer: ''
    },
    dst_tag: 123,
    callback: function(err, confirmed) {
      var scriptElem = document.getElementById('ripple-checkout');
      var message = document.createElement('div');
      message.innerHTML = err || 'Confirmed!';
      scriptElem.parentNode.insertBefore(message, scriptElem.nextSibling);
    }
  });

</script>
```
