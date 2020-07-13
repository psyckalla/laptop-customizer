function CurrencyFormat(props) {
    const { amount } = props;
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });      
    return USCurrencyFormat.format(amount)
}

export default CurrencyFormat;