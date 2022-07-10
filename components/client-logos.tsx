import React from "react";
import Image from 'next/image';
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
    <>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image src="/assets/trustedby/reactlogo.png" width={150} height={75} objectFit="contain" />
            </SliderItem>

            <SliderItem width={150}>
                <Image src="/assets/trustedby/htmllogo.png" width={150} height={75} objectFit="contain" />
            </SliderItem>

            <SliderItem width={150}>
                <Image src="/assets/trustedby/taillogo.png" width={150} height={75} objectFit="contain" />
            </SliderItem>

            <SliderItem width={150}>
                <Image src="/assets/trustedby/bslogo.webp" width={150} height={75} objectFit="contain" />
            </SliderItem>

            <SliderItem width={150}>
                <Image src="/assets/trustedby/csslogo.png" width={150} height={75} objectFit="contain" />
            </SliderItem>    

            <SliderItem width={150}>
                <Image src="/assets/trustedby/nextlogo.png" width={150} height={75} objectFit="contain" />
            </SliderItem>    

            <SliderItem width={150}>
                <Image src="/assets/trustedby/jslogo.png" width={150} height={75} objectFit="contain" />
            </SliderItem>  

            <SliderItem width={150}>
                <Image src="/assets/trustedby/nodelogo.webp" width={150} height={75} objectFit="contain" />
            </SliderItem>  
        </SliderContainer>
        
    </>
)

export default ClientLogos