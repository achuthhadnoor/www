import Container from "@/components/Container";
import Image from "next/image";

const Fetcher = ()=>{
    return (
        <Container>
            <Image
            alt="Achuth Hadnoor"
            src="/images/pages/apps/fetcher.png"
            width={96} height={96} 
            priority="true"
            className="mt-5"
            />
        </Container>
    )
}

export default Fetcher;