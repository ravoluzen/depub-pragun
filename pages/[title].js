import { useRouter } from "next/router";
import Link from "next/link"
import Button from '../components/Button'
import Publication from "../components/Publication";
import Container from '../components/wrappers/Container'
import FlexCol from '../components/wrappers/FlexCol'
import data from "../data/data.json"

function Details() {
  const router = useRouter();
  const {title} = router.query;
  return (
    <Container>
        <FlexCol>

        </FlexCol>
        <main className="gap-6 w-[30%] flex flex-col justify-around items-start">
            <div className="flex justify-between items-center w-full">
                <Link href="/explore">
                    <h4 className="mb-4 text-xl">Go Back</h4>
                </Link>
            </div>
            {data.publications.filter((publication) => publication.title === title).map((item) => (
              <Publication 
                title={item.title} 
                releaseDate={item.releaseDate}
                className="mb-8"
              />
            ))}
            <Button text="read" className="bg-[#c1c1c1] w-full p-3 text-lg font-bold rounded-md" />
            <Button onClick={() => router.push("/quiz")} text="read + stake" className="w-full p-3 text-lg font-bold rounded-md" />
        </main>
    </Container>
  )
}

export default Details