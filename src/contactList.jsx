
// const ContactListUnordered = ({contactList}) => {
//   return (
//     <>
//       {
//         contactList.map((singleContact) => {
//           return (
//           <ul>
//             <li key={singleContact.id}>Name: {singleContact.name}</li>
//             <li key={singleContact.id}>Phone Number: {singleContact.phone}</li>
//             <li key={singleContact.id}>Email Address: {singleContact.email}</li>
//           </ul>
//           )
//         })

//       }
//     </>
//   )
// }

const ContactListUnordered = ({contactList}) => {
  return (
    <>
      {
        contactList.map((singleContact) => {
          return (
          <tr>
            <td key={singleContact.id}>{singleContact.name}</td>
            <td key={singleContact.id}>{singleContact.phone}</td>
            <td key={singleContact.id}>{singleContact.email}</td>
          </tr>
          )
        })

      }
    </>
  )
}
export default ContactListUnordered;