"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageCard from "../../components/image-card";

const councils = [
  {
    title: "Garreth",
    image: "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
  },
  {
    title: "Pauletta",
    image: "http://dummyimage.com/220x100.png/5fa2dd/ffffff",
  },
  {
    title: "Hamlin",
    image: "http://dummyimage.com/196x100.png/5fa2dd/ffffff",
  },
  {
    title: "Blake",
    image: "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
  },
  {
    title: "Alejandro",
    image: "http://dummyimage.com/112x100.png/cc0000/ffffff",
  },
  {
    title: "Jackelyn",
    image: "http://dummyimage.com/207x100.png/dddddd/000000",
  },
];

const associates = [
  {
    title: "Thomasin",
    image: "http://dummyimage.com/250x100.png/ff4444/ffffff",
  },
  {
    title: "Torr",
    image: "http://dummyimage.com/205x100.png/dddddd/000000",
  },
  {
    title: "Perry",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    title: "Wilhelmine",
    image: "http://dummyimage.com/201x100.png/ff4444/ffffff",
  },
  {
    title: "Grace",
    image: "http://dummyimage.com/200x100.png/ff4444/ffffff",
  },
  {
    title: "Karim",
    image: "http://dummyimage.com/205x100.png/5fa2dd/ffffff",
  },
];

export default function page() {
  return (
    <>
      <Tabs defaultValue="council" className="w-full  h-[18.75rem] bg-black relative">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="council">Councils</TabsTrigger>
          <TabsTrigger value="associates">Associates</TabsTrigger>
        </TabsList>
        <TabsContent value="council" className="flex flex-wrap absolute left-0 right-0 bottom-[-173%] m-auto">
          {councils.map((council) => (
            <ImageCard image={council.image} title={council.title} />
          ))}
        </TabsContent>
        <TabsContent value="associates" className="flex flex-wrap absolute left-0 right-0 bottom-[-173%] m-auto">
          {associates.map((associate) => (
            <ImageCard image={associate.image} title={associate.title} />
          ))}
        </TabsContent>
      </Tabs>
    </>
  );
}
