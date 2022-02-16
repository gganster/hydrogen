import {Calendar, Card, Divider, Table, LineChart} from "lib/components";
import { useState } from "react";

const DataView = () => {

  const [dateData, ] = useState([
    {title: "slot 1", start: new Date(1638782970000), end: new Date(1638793770000)}
  ])
  const tableData = [
    {uid: 0, name: "Guilian", surname: "Guilian"},
    {uid: 1, name: "Bastien", surname: "Thomas"},
    {uid: 2, name: "Coureau", surname: "Curtis"},
    {uid: 3, name: "Bellanger", surname: "Nathan"},
  ];

  const renderItem = (item) => (
    <tr key={item.uid}>
      <th>{item.uid}</th>
      <td>{item.name}</td>
      <td>{item.surname}</td>
      <td></td>
    </tr>
  )

  return (
    <>
      <Card>
        TableView
        <Divider className="mt-4" />
        <Table header={["id", "name", "surname", "actions"]}
              data={tableData}
              renderItem={renderItem} />
      </Card>
      <Card className="mt-6">
        CalendarView
        <Divider className="mt-4" />
        <Calendar height={500}
                  events={dateData}/>
      </Card>
      <Card className="mt-6">
        LineChartView
        <Divider className="mt-4" />
        <LineChart categories={["L", "M", "M", "J", "V"]}
                   series={[{name: "test", data: [3, 4, 2, 7, 5, 8]}]}
                   forceYStartTo0={false} />
      </Card>
    </>
  )
}

export default DataView;