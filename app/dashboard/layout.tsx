import {Nav} from "@/components/nav";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {UserNav} from "@/components/user-nav";

export default async function DashboardLayout({children}: {
    children: React.ReactNode
}) {

    const session = await getServerSession();

    if (!session) {
        redirect('/api/auth/signin');
        // return <p>You must be signed in...</p>
    }

    return (
        <div>
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <Nav  className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav />
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
