import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-slate-700 text-white p-2">
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