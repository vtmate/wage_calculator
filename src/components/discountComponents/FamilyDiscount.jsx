const FamilyDiscount = ({salary, setDiscount}) => {
  const handleEltartottChange = (amount) => {
    if(salary.eltartott + amount >= 0){
      setDiscount(salary.id, "eltartott", salary.eltartott + amount)
      if(salary.eltartott + amount <= salary.kedv){
        setDiscount(salary.id, "kedv", salary.eltartott + amount)
      }
    }
  };
  
  const handleKedvChange = (amount) => {
    if(salary.kedv + amount >= 0 && salary.kedv + amount <= salary.eltartott && salary.kedv + amount <= 3){
      setDiscount(salary.id, "kedv", salary.kedv + amount)
    }
  };

  return (
    <div>
      <button className='mx-1' onClick={() => handleEltartottChange(-1)}>-</button>
      <p className='inline-block'>{salary.eltartott}</p>
      <button onClick={() => handleEltartottChange(1)}>+</button>
      <p className='inline-block mx-1'>Eltarott, ebből kedvezményezett</p>
      <button className='mx-1' onClick={() => handleKedvChange(-1)}>-</button>
      <p className='inline-block'>{salary.kedv}</p>
      <button onClick={() => handleKedvChange(1)}>+</button>
    </div>
  );
};

export default FamilyDiscount;