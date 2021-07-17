import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Mission from "./Mission";
import Products from "./Products";
import Top from "./Top";


function Main() {
    return (
        <div>
<Top/>
<Mission/>
<Products/>
<AboutUs/>
<ContactUs/>
        </div>
    );
}

export default Main;







// import React from 'react';
// import { useQuery, gql } from '@apollo/client';


// //types

// interface MainInterface {
//     text: String,
//     data: {} | undefined,
// }

// const GET_MAIN_DATA = gql`
// query{
//   allMain {
//     headingRaw
//   }
// }
// `

// function Main() {
//     const { loading, data } = useQuery<MainInterface | undefined>(GET_MAIN_DATA)
//     console.log(data)
//     return (
//         <div>
//             <h3>Story Squad is the world’s first “creativity arcade” built around kids’ original handwritten stories and drawing.</h3>
//         </div>
//     );
// }

// export default Main