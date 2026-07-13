import Image from "next/image";
import Header from "./components/Header"


export default function Home() {
  return (
    <div>
      <Header />
      <main style={ { 
        display: "flex", justifyContent: "center", alignItems:"center",
        height: "80vh", flexDirection: "column"
       } }>
      <h2>Bem vindo ao RHbits</h2>
      </main>
      </div>
   
  );
}
