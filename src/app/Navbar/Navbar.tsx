import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./userMenuButton";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/options";

async function searchProducts(formData:FormData){
    "use server";

    const searchQuery = formData.get("searchQuery")?.toString();

    if(searchQuery){
        redirect("/search?query=" + searchQuery);
    }
}

export default async function Navbar(){
    const session = await getServerSession(authOptions);
    const cart = await getCart();

    return(
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link className="btn btn-gosht text-xl normal-case" href="/">
                        <Image src={logo} height={40} width={40} alt="Sergistore logo"/>
                        Sergistore
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input name="searchQuery"
                            placeholder="Search"
                            className="input input-bordered w-full min-w-[100px]">
                            </input>
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart}/>
                    <UserMenuButton session={session}/>
                </div>
            </div>
        </div>
    )
}