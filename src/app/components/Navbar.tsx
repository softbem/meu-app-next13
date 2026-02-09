import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
    return (
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-200'>
            <Link
                href='/'
                className='uppercase font-bold text-md h-12 flex items-center'
            >
                SE7
            </Link>
            <div className="flex items-center gap-8">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="rounded-md text-white px-3 py-2 uppercase border">FAZER LOGIN</button>
                    </SignInButton>

                </SignedOut>
            </div>
        </nav>
    );
};

export default Navbar;