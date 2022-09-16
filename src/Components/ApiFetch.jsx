// import "./App.css";
// // import ContactCard from "./Components/ContactCard";


// //simple way of craeting a local APi in react

// const App = () => {
//   const localContacts = [
//     {
//       image:
//         "https://media.istockphoto.com/photos/excited-young-indian-man-winner-using-smartphone-isolated-on-yellow-picture-id1365310330?k=20&m=1365310330&s=612x612&w=0&h=rXW0BrMCcd05o-SkKhhAPZWHqOhWWcrI_h9GD4yyAhE=",
//       name: "Inyang Kufre",
//       email: "kunyang@gmail.com",
//       age: 35,
//     },
//     {
//       image:
//         "https://media.istockphoto.com/photos/portrait-of-happy-mature-man-wearing-spectacles-and-looking-at-camera-picture-id1331257339?k=20&m=1331257339&s=612x612&w=0&h=cEaz1BNERrqTrIvuznB_YFgi24RH6afwb0bs2d2-LOo=",
//       name: "Essia Obong",
//       email: "Essia@gmail.com",
//       age: 62,
//     },
//     {
//       image:
//         "https://media.istockphoto.com/photos/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run-picture-id1347431090?k=20&m=1347431090&s=612x612&w=0&h=dR9y9JGuhbmxgVFof1kC-phxJFyzGGftasI3JUbtk0Q=",
//       name: "Abass Essia",
//       email: "ikpoket@gmail.com",
//       age: 25,
//     },
//     {
//       image:
//         "https://media.istockphoto.com/photos/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run-picture-id1347431090?k=20&m=1347431090&s=612x612&w=0&h=dR9y9JGuhbmxgVFof1kC-phxJFyzGGftasI3JUbtk0Q=",
//       name: "Atim Edet",
//       email: "atyeddy@gmail.com",
//       age: 25,
//     },
//     {
//       image:
//         "https://media.istockphoto.com/photos/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run-picture-id1347431090?k=20&m=1347431090&s=612x612&w=0&h=dR9y9JGuhbmxgVFof1kC-phxJFyzGGftasI3JUbtk0Q=",
//       name: "Tina Codesz",
//       email: "teecodez@gmail.com",
//       age: 25,
//     },
//   ];

//   return (
//     <div className="App">
//       {localContacts.map((contact, index) => {
//         return (
//           <ContactCard key = {index}
//             image={contact.image}
//             name= {contact.name}
//             email={contact.email}
//             age= {contact.age}/>
//         );
//       })}
//       {/* //using props to render */}
//       {/* <ContactCard
//         image="https://media.istockphoto.com/photos/excited-young-indian-man-winner-using-smartphone-isolated-on-yellow-picture-id1365310330?k=20&m=1365310330&s=612x612&w=0&h=rXW0BrMCcd05o-SkKhhAPZWHqOhWWcrI_h9GD4yyAhE="
//         // image = {<images/> }
//         name="Inyang Kufre"
//         email="kunyang@gmail.com"
//         age="35"
//       /> */}

//       {/* using the normal props method */}
//       {/* <ContactCard
//         image="https://media.istockphoto.com/photos/portrait-of-happy-mature-man-wearing-spectacles-and-looking-at-camera-picture-id1331257339?k=20&m=1331257339&s=612x612&w=0&h=cEaz1BNERrqTrIvuznB_YFgi24RH6afwb0bs2d2-LOo="
//         name="Essia Obong"
//         email="Essia@gmail.com"
//         age="62"
//       />
//       <ContactCard
//         image="https://media.istockphoto.com/photos/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run-picture-id1347431090?k=20&m=1347431090&s=612x612&w=0&h=dR9y9JGuhbmxgVFof1kC-phxJFyzGGftasI3JUbtk0Q="
//         name="Abass Essia"
//         email="ikpoket@gmail.com"
//         age="25"
//       /> */}
//     </div>
//   );
// };

// export default App;
