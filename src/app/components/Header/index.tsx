import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemMenu } from "./ItemMenu";

const menuItems = [
    {
        url: '/',
        title: 'Home',
        dropdown: false
    },
    {
        url: '/',
        title: 'Products',
        dropdown: true
    },
    {
        url: '/',
        title: 'Resources',
        dropdown: true
    },
    {
        url: '/',
        title: 'Pricing',
        dropdown: false
    },
]

export function Header() {
    return (
        <header className="sticky top-0 w-full h-[5rem] z-50 bg-white border-b border-b-gray-100 flex items-center">
            <GridContainer className="flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <Image src="/logo.svg" width={142} height={32} alt="Logo untitled UI" />
                    <nav className="flex items-center gap-8">
                        {menuItems.map((menuItem, index) => (
                            <ItemMenu key={index} title={menuItem.title} url={menuItem.url} hasDropdown={menuItem.dropdown} />
                        ))}
                    </nav>
                </div>
                <div>
                    <Image src={"/avatar.jpg"} width={40} height={40} alt="Avatar" className="rounded-full" priority={true} />
                </div>
            </GridContainer>
        </header>
    )
}