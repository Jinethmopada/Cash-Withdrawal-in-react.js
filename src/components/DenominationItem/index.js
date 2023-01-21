import './index.css'

const DenominationItem = props => {
  const {CashDetails, updateBalance} = props
  const {value} = CashDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-items">
      <button
        className="denomination-button"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
