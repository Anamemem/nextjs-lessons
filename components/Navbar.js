import Link from 'next/link'
import Image from 'next/image';


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Image src='/Group 2.png' width={100} height={77}  alt="logo" />
                </div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ninjas">Ninja </Link>
            </nav>
        </div>
     );
}
 
export default Navbar;