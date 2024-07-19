const HouseholdSummary = ({salaries, salary, countNetto}) => {

  const sumPrice = () => {
    var count = 0;
      salaries.map((member) => (
        count += parseInt(countNetto(member))
    ))
    return count
  }

  return (
    <>
    <h1>Háztartás összesített jövedelme</h1>
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">Családtag neve</th>
          <th className="px-4 py-2 text-left">Nettó bér</th>
        </tr>
      </thead>
      <tbody>
        {salaries.map((member, index) => (
          <tr key={index} className={salary ? (member.id === salary.id ? 'bg-gray-400' : 'bg-gray-300') : 'bg-gray-300'}>
            <td className="border px-4 py-2 text-zinc-900">{
            member.name == "" ? "-" : member.name
            }</td>
            <td className="border px-4 py-2 text-zinc-900">{countNetto(member)} Ft</td>
          </tr>
        ))}
        <tr className="bg-gray-300">
          <td className="border px-4 py-2 text-zinc-900">Összesen:</td>
          <td className="border px-4 py-2 text-zinc-900">{sumPrice()} Ft</td>
        </tr>
      </tbody>
    </table>
    </>
  )
};

export default HouseholdSummary;
