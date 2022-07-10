import { spawn } from "child_process";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from "./work";
import Image from "next/image";

// @ts-ignore
const Works = () => <TileWrapper numOfPages={3} children>
    {/* 
// @ts-ignore */}
    <TileBackground children><WorkBackground /></TileBackground>
{/* 
// @ts-ignore */}
    <TileContent children>
    
        <Tile page={0} renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We build</div>
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                        <WorkLink href="https://makeyourideareal.herokuapp.com/">ReactJS apps</WorkLink>
                    </div>                
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image src="/assets/work/react1.png" layout="responsive" width={1250} height={1500} alt="app" />
                </WorkRight>
            </WorkContainer>
        )}></Tile>

        <Tile page={1} renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We build</div>
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                        <WorkLink href="https://makeyourideareal.herokuapp.com/">HTML, CSS & JS sites</WorkLink>
                    </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image src="/assets/work/htm.png" layout="responsive"  width={1250} height={1500} alt="app" />
                </WorkRight>
            </WorkContainer>
        )}></Tile>

        <Tile page={2} renderContent={({progress}) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We build</div>
                    <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                        <WorkLink href="https://makeyourideareal.herokuapp.com/">NextJS apps</WorkLink>
                    </div>
                    <div className="text-xl md:text-2xl tracking-tight pt-2">Like this one!</div>
                </WorkLeft>
                <WorkRight progress={progress}>
                    <Image src="/assets/work/next.png" layout="responsive"  width={1250} height={1500} alt="app" />
                </WorkRight>
            </WorkContainer>
        )}></Tile>





    
    </TileContent>
</TileWrapper>

export default Works