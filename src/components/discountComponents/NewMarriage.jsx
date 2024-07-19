import { useState } from "react";

const NewMarriage = ({salary, setDiscount}) => {

    const [valid, setValid] = useState(false)

    function isValidDateFormat(input) {
      const regex = /^\d{4}\/\d{2}\/\d{2}$/;
      return regex.test(input);
    }

    const handleInput = (event) => {
      if(isValidDateFormat(event.target.value)){
          setValid(true)
      } else {
        setValid(false)
      }
    }

    function handleButtonClick() {
      const input = document.getElementById('inputField').value;
      checkDate(input)
  }

    function checkDate(input) {
      const [year, month, day] = input.split('/').map(Number);
      const targetDate = new Date(year, month - 1, day);
      const currentDate = new Date();

      const difference = (targetDate - currentDate) / (1000 * 60 * 60 * 24);

      if(difference > 30 && difference < 365 * 2){
        setDiscount(salary.id, "marriage", true)
      } else {
        setDiscount(salary.id, "marriage", false)
      }
    }

    return (
        <>
        <dialog id="modal" className="modal">
        <div className="modal-box">
            <p>A kedvezmény először a házasságkötést követő hónapra vehető igénybe és a házassági életközösség alatt legfeljebb 24 hónapon keresztül jár</p>
            <p className="py-4 font-bold">Add meg a házasságkötés dátumát:</p>
            <form method="dialog">
                <input
                    type="text"
                    id="inputField"
                    placeholder="YYYY/MM/DD"
                    onChange={(event) => {
                      handleInput(event);
                    }}
                />
              <div className="modal-action">
                <button id="modalButton" disabled={!valid} className="btn" onClick={handleButtonClick}>Mentés</button>
              </div>
            </form>
        </div>
        </dialog>
    </>
  )
}

export default NewMarriage