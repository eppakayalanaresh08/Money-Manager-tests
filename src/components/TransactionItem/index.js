import './index.css'

const TransactionItem = props => {
  const {listObjectItem, onClickEachDelete} = props
  const {title, amount, optionId, id} = listObjectItem

  const onClickDelete = () => {
    onClickEachDelete(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{optionId}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
