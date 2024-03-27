import MoreInfoUnordered from "./moreInfo"

const ContactListUnordered = ({ contactList }) => {

  return (
    <>
    {
      contactList.map((singleContact, index) => {
        return (
          <tr key={singleContact.id}>
            <td onClick={()=> {
              console.log(singleContact)
              MoreInfoUnordered(singleContact);
            }}>{singleContact.name}</td>
            <td>{singleContact.phone}</td>
            <td>{singleContact.email}</td>
          </tr>
        )
      })
    }


    </>
  )
}
export default ContactListUnordered;