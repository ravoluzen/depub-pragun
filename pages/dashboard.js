import { useState } from 'react'
import { useRouter } from "next/router";
import Button from '../components/Button'
import Container from '../components/wrappers/Container'
import FlexCol from '../components/wrappers/FlexCol'
import FlexRow from '../components/wrappers/FlexRow';

function Dashboard() {
  const [author, setAuthor] = useState(false)
  const router = useRouter()
  return (
    <Container>
        {author ? (
            <Container>
                <FlexCol className="gap-8">
                    <h1 className="text-6xl font-bold">
                        Welcome, 
                        <span className="text-[#319AE5]">0xAc...456</span>
                    </h1>
                    <h3 className="text-4xl font-bold">My Chapters</h3>
                    <FlexRow className="">
                        <div className="w-12 h-20 text-3xl font-bold border border-dashed border-black">
                            +
                        </div>
                        <h3 className="text-4xl font-bold">New Chapter</h3>
                    </FlexRow>
                </FlexCol>

            </Container>
        ):(
            <FlexCol className="gap-4">
                <h1 className="mb-4 text-6xl font-bold">Author Dashboard</h1>
                <Button 
                    text="Connect Wallet"
                    onClick={() => setAuthor(true)}
                    className="px-4 py-2"
                 />
                 <h4 className="mt-4 text-3xl font-light cursor-pointer" onClick={() => router.push("/")}>Go Back</h4>
            </FlexCol>
        )}
    </Container>
  )
}

export default Dashboard