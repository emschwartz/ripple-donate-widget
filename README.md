ripple-checkout
===============

An embeddable widget for paying with Ripple.

See [http://emschwartz.github.io/ripple-checkout/](http://emschwartz.github.io/ripple-checkout/) for a live demo.

### How to include the widget in a webpage:

Copy the `ripple-checkout.js` script into your page's directory and include the following elements in the page:

```html
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
    // dom_id: 'ripple-checkout', // Defaults to 'ripple-checkout'
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

### How it works:

Clicking on the button will pop the user out to a version of the `ripple-client` that has a pre-filled payment form. 


The widget uses a WebSocket connection to listen to the Ripple Network transaction stream. Once the transaction has been processed and the funds have been confirmed in the `dst_address` account, the `callback` function registered with `addButton({...})` will be called with the details of the transaction.
