import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-neutral-700/35 text-white p-2">
           <Link href="/Cadastro"
           className="m-5"
           >
                Cadastro
           </Link>

           <Link href="/funcionario">
                Funcionarios
           </Link>
        </header>
        

    )
}