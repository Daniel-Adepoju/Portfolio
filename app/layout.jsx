
import './styles/css/styles.css'
import Nav from './components/nav';
import Footer from './components/footer';
import { signal } from '@preact/signals-react';
import Backdrop from './components/backdrop';
export const metadata = {
  title: "ubiquitous",
};

export default function RootLayout({children}) {
  return ( 
    <html lang="en"> 
      <body>    
        <Nav />
     <Backdrop>
      {children}
     </Backdrop>
      
      <Footer />  
        </body>  
    </html> 
  ); 
}
