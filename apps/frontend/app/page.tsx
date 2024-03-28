
import { Link } from "@nextui-org/link";
import {currentUser} from "@clerk/nextjs";
export default async function Home() {
	const user = await currentUser();
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<main>
				{!user ? (
					<Link href="/sign-in">Sign In page</Link>
				) : (
					<div>
						<h1>{user.username}</h1>
						<img src={user.imageUrl} width={50} alt="avatar"/>
						<p>Username: {user.username}</p>
						<pre>
							{JSON.stringify(user, null, 2)}
						</pre>
					</div>
				)}
			</main>
		</section>
	);
}
