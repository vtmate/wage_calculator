
const SalaryForm = ({ changeName, changePrice, salary }) => {

  const handleName = (event) => {
    changeName(salary.id, event.target.value);
  }

  const handlePrice = (event) => {
    changePrice(salary.id, event.target.value);
  }

  const percentageChanger = (p) => {
    const newPrice = parseInt(salary.price) + parseInt(salary.price * parseInt(p) / 100);
    changePrice(salary.id, Math.round(newPrice));
  }


  if(salary === null){
    return "nincs kiválasztott háztartásbeli"
  } else {
    return (
      <>
        <form 
          className="w-80"
          onSubmit={(event) => {
            event.preventDefault();
          }}>
          <label htmlFor="username">Családtag neve:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="username"
            name="username"
            value={salary.name}
            onChange={(event) => {
              handleName(event);
            }}
            />
          <label htmlFor="price">Bruttó keresete:</label>
          <input
            className="input input-bordered w-full max-w-xs mb-2"
            type="number"
            id="price"
            name="price"
            value={salary.price}
            onChange={(event) => {
              handlePrice(event);
            }}
            />
            <input
              className="range range-xs mb-2"
              type="range"
              id="slider"
              name="slider"
              min="0"
              max="1000000"
              value={salary.price}
              onChange={(event) => {
                handlePrice(event);
              }}
              />
            <div className="flex justify-between px-6">
              <button className="btn btn-neutral btn-sm" onClick={() => {percentageChanger(-5)}}>{"<< "}-5%</button>
              <button className="btn btn-neutral btn-sm" onClick={() => {percentageChanger(-1)}}>{"< "}-1%</button>
              <button className="btn btn-neutral btn-sm" onClick={() => {percentageChanger(1)}}>1%{" >"}</button>
              <button className="btn btn-neutral btn-sm" onClick={() => {percentageChanger(5)}}>5%{" >>"}</button>
            </div>
        </form>
      </>
    );
  }
};

export default SalaryForm;
