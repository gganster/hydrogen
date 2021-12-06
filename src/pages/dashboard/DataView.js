import {Card, Divider, Table} from "lib/components";

const DataView = () => {

  const data = [
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
    <Card>
      DataView
      <Divider className="mt-4" />
      <Table header={["id", "name", "surname", "actions"]}
             data={data}
             renderItem={renderItem} />
    </Card>
  )
}

export default DataView;