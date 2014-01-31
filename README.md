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
    dst_address: 'rLpq5RcRzA8FU1yUqEPW4xfsdwon7casuM',
    // server: {
    //   host: 's_west.ripple.com',
    //   port: '443',
    //   secure: true
    // }
  });

  checkout.addButton({
    dst_amount: {
      value: '10',
      currency: 'XRP',
      issuer: '' // Issuer can be specified for non-XRP currencies or left blank
    },
    dst_tag: Math.floor(Math.random() * 4294967294),
    callback: function(err, confirmed_transaction) {
      if (err) {
        alert('Error: \n\n' + err);
      } else {
        alert('Transaction Confirmed: \n\n' + JSON.stringify(confirmed_transaction));
      }
    }
  });

</script>
```
