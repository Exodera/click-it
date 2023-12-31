import Hero from "../components/hero";
import Head from "next/head";

export default function Index(){
    return(
        <div>
            <Head>
                <title>Want it - Click-it</title>
            </Head>
            <Hero heading='Planetery Marketplace' message='Best planets at the best price'/>
        </div>
    )
}