import React from 'react'

const AddNewMember = ({addNewMember}) => {

    const generateUniqueId = () => {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 10000);
        return `${timestamp}-${random}`;
    };

    const sendNewMember = () => {
        addNewMember({
            id: generateUniqueId(),
            name: "Példa Pál",
            price: "340000",
            szja: false,
            marriage: false,
            marriageToggle: false,
            adokedv: false,
            eltartott: 0,
            kedv: 0,
            familyToggle: false,
            netto: 0
        })
    }

  return (
    <button className="btn btn-square btn-outline" onClick={() => {sendNewMember()}}>+</button>
  )
}

export default AddNewMember