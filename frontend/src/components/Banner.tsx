import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, MapPinIcon, UserIcon } from "lucide-react"

export function Banner() {
    return (
        <div className="w-screen z-30">
            <div className="filter backdrop-blur-sm w-full">
                <header className="top-0 left-0 right-0 bg-transparent text-white p-7">
                    <nav className="container mx-auto flex justify-between items-center">
                        <div className="text-2xl font-bold">Airtnt</div>
                        {/* <div className="space-x-4">
                        <a href="#" className="hover:underline">Uçak Bileti</a>
                        <a href="#" className="hover:underline">Otel</a>
                        <a href="#" className="hover:underline">Otobüs</a>
                        <a href="#" className="hover:underline">Araç</a>
                        <a href="#" className="hover:underline">Transfer</a>
                        <a href="#" className="hover:underline">Yardım</a>
                        </div> */}
                        <div className="flex items-center space-x-4">
                            {/* <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                            Uygulamayı indir
                            </Button> */}
                            <Select>
                                <SelectTrigger className="w-[80px] bg-transparent text-white border-white">
                                    <SelectValue placeholder="TRY" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="try">TRY</SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                                Giriş yap
                            </Button>
                        </div>
                    </nav>
                </header>
                <main className="container mx-auto pt-16 pb-16">
                    <h1 className="text-4xl font-bold text-white mb-8 text-center">Uçak biletlerinizi Airtnt güvencesiyle alın</h1>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <div className="mb-4">
                            <RadioGroup defaultValue="one-way" className="flex space-x-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="one-way" id="one-way" />
                                    <Label htmlFor="one-way">Tek yön</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="round-trip" id="round-trip" />
                                    <Label htmlFor="round-trip">Gidiş-dönüş</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="multi-city" id="multi-city" />
                                    <Label htmlFor="multi-city">Çoklu uçuş</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="relative">
                                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input className="pl-10" placeholder="Nereden" />
                            </div>
                            <div className="relative">
                                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input className="pl-10" placeholder="Nereye" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        <span>Gidiş Tarihi</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar />
                                </PopoverContent>
                            </Popover>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        <span>Dönüş Ekle</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar />
                                </PopoverContent>
                            </Popover>
                            <div className="relative">
                                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Select>
                                    <SelectTrigger className="w-full pl-10">
                                        <SelectValue placeholder="Yolcu Sayısı, Kabin" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="1">1 Yolcu</SelectItem>
                                        <SelectItem value="2">2 Yolcu</SelectItem>
                                        <SelectItem value="3">3 Yolcu</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox" />
                                <span>Aktarmasız</span>
                            </label>
                            <Button className="bg-green-500 hover:bg-green-600 text-white">Ucuz bilet bul</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}