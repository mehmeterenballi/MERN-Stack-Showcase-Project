"use client";
import { Boxes } from "./ui/background-boxes";

export const BackgroundBoxes = (props: any) => {
    return (
        (<div
            className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg" style={{position: "relative", zIndex: "1"}}>
            <div
                className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
        </div>)
    );
}
