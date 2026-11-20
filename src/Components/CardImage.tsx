import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardAction,
     CardDescription,
       CardFooter,
      CardHeader,
       CardTitle, } from "./ui/card"
import { CarouselDemo } from "./CardCarusel"


export function CardImage({e,name,desc,images,status,setElem}) {
  return (
    <Card className="relative mx-auto w-full max-w-md pt-0">
        <div className="flex justify-center">

      <CarouselDemo images={images}/>
        </div>
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
      {/* <img
        src={image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      /> */}
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{status?"Active":"Inactive"}</Badge>
        </CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
         {desc}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-[50%]">View Event</Button>
        <Button onClick={()=>setElem(e)} className="w-[50%]">Edit</Button>
      </CardFooter>
    </Card>
  )
}
