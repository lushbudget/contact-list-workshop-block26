// const ContactListUnordered = ({contactList}) => {
//   return (
//     <ul>
//       {
//         contactList.map((singleContact) => {
//           return <li key={singleContact.id}>{`Name: ${singleContact.name} Phone Number: ${singleContact.phone} Email Address: ${singleContact.email}`}</li>
//         })

//       }
//     </ul>
//   )
// }
const ContactListUnordered = ({contactList}) => {
  return (
    <>
      {
        contactList.map((singleContact) => {
          return (
          <ul>
            <li key={singleContact.id}>Name: {singleContact.name}</li>
            <li key={singleContact.id}>Phone Number: {singleContact.phone}</li>
            <li key={singleContact.id}>Name: {singleContact.name}</li>
          </ul>
          )
        })

      }
    </>
  )
}
export default ContactListUnordered;