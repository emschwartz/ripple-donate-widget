ripple-checkout
===============

An embeddable widget for paying with Ripple.

See [http://emschwartz.github.io/ripple-checkout/](http://emschwartz.github.io/ripple-checkout/) for a live demo.

### How to include the widget in a webpage:

Copy the `ripple-checkout.js` script into your page's directory and include the following elements in the page:

```html
<body>

<div id='ripple-checkout'></div>
<script type='text/javascript' src='./ripple-checkout.js'></script>
<script type='text/javascript'>

  var checkout = RippleCheckout({
    dst_address: 'rLpq5RcRzA8FU1yUqEPW4xfsdwon7casuM',
    server_url: 'wss://s_west.ripple.com'
  });

  checkout.addButton({
    dst_amount: {
      value: '10',
      currency: 'XRP',
      issuer: '' // Issuer can be left blank or specified for non-XRP currencies
    },
    dst_tag: Math.floor(Math.random() * 4294967294),
    // button_type: 'pay', // Defaults to 'pay', other option is 'donate'
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
