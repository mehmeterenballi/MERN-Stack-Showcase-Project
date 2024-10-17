"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function NavbarContainer() {
    return (
        <div className="relative w-full flex items-center justify-center z-50">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Airtnt">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Bilet Al</HoveredLink>
                        <HoveredLink href="/flight-check">PNR Sorgulama</HoveredLink>
                        <HoveredLink href="/assistant">Airtnt Asistan</HoveredLink>
                        <HoveredLink href="/feedback">Öneri ve Şikayet</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Uçuşlarım">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Qatar Airways"
                            href="https://www.qatarairways.com/"
                            src="https://www.aviationtoday.com/wp-content/uploads/2023/02/screen-shot-2023-02-07-at-6-50-54-pm-768x442.png"
                            description="Qatar Airways olarak faaliyet gösteren Qatar Airways Company Q.C.S.C..."
                        />
                        <ProductItem
                            title="Singapore Airlines"
                            href="http://www.singaporeair.com/"
                            src="https://martinroll.com/wp-content/uploads/Singapore-Airlines-%E2%80%93-An-Excellent-Iconic-Asian-Brand-Martin-Roll.jpg"
                            description="Singapur Havayolları, merkezi Singapur'da bulunan Singapur'un bayrak taşıyıcısıdır."
                        />
                        <ProductItem
                            title="Pan Am"
                            href="https://www.panam.org/"
                            src="https://www.planepictures.net/a/175/69/1726825920.jpg"
                            description="Pan American World Airways, ilk olarak Pan American Airways olarak kurulmuştur."
                        />
                        <ProductItem
                            title="Emirates"
                            href="emirates.com/uk/english/"
                            src="https://images.moneycontrol.com/static-mcnews/2022/09/EMIRATES-770x433.jpg"
                            description="Emirates, Birleşik Arap Emirlikleri'nin iki bayrak taşıyıcısından biridir."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Profil">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/account" className="flex items-center space-x-2">
                            <Avatar className="min-w-fit">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1252300497513480195/rufQDkkx_400x400.jpg" />
                                <AvatarFallback>Eren Ballı</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">Eren Ballı</span>
                        </HoveredLink>
                        <HoveredLink href="/checkout">Sepetim</HoveredLink>
                        <HoveredLink href="/orders">Siparişlerim</HoveredLink>
                        <HoveredLink href="/logout">Oturumu kapat</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
