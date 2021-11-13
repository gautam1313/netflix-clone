import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Transaction History</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://im.rediff.com/sports/2016/mar/12nico.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nico Rosberg</span>
          </td>
          <td className="widgetLgDate">1 November 2021</td>
          <td className="widgetLgAmount">$200,000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://im.rediff.com/sports/2016/mar/12nico.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nico Rosberg</span>
          </td>
          <td className="widgetLgDate">1 November 2021</td>
          <td className="widgetLgAmount">$200,000</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://im.rediff.com/sports/2016/mar/12nico.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nico Rosberg</span>
          </td>
          <td className="widgetLgDate">1 November 2021</td>
          <td className="widgetLgAmount">$200,000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://im.rediff.com/sports/2016/mar/12nico.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Nico Rosberg</span>
          </td>
          <td className="widgetLgDate">1 November 2021</td>
          <td className="widgetLgAmount">$200,000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
