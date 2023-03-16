import './index.css'

const MoneyDetails = props => {
  const {yourBalance, Income, expenses} = props
  return (
    <ul className="container-lists-money">
      <li className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-money"
        />
        <div className="container-name">
          <p className="name-list">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            RS {yourBalance}
          </p>
        </div>
      </li>
      <li className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-money"
        />
        <div>
          <p className="name-list">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            RS {Income}
          </p>
        </div>
      </li>
      <li className="expense-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-money"
        />
        <div>
          <p className="name-list">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
