"use client";
import { CalendarIcon, Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createContact } from "@/lib/actions/contact.actions";
import { useRouter } from "next/navigation";
export const Contact1 = () => {
  const [date, setDate] = useState<Date | undefined >(new Date());
  const [firstName, setFirstname] = useState<String>(new String());
  const [lastName, setLastname] =  useState<String>(new String());
  const [email, setEmail] = useState<String>(new String());
  const [message, setMessage] = useState<String>(new String());
  const router = useRouter();

  async function createContactUs(){
  try {
    const newConatct = await createContact({
      date,
      firstName,
      lastName,
      email,
      message,
    })
    if (newConatct){
      router.push(`/`)
    }
    console.log("New contact created successfully:", newConatct);
  } catch (error) {
    console.log(error);
  }
  }

  return (
    <div className="w-full py-20 lg:py-40 px-4 mt-12">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Talk To Memow Expert
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                 We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Schedule a meet</p>
                <p className="text-muted-foreground text-sm">
                  G-meet
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Give a call</p>
                <p className="text-muted-foreground text-sm">
                +91 87777 29704, +91 8240772369
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Mail to get responce</p>
                <p className="text-muted-foreground text-sm">
                connect@memowries.com
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md w-[100%] md:w-[75%] flex flex-col border p-8 gap-4">
              <p>Book a meeting</p>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="picture">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full max-w-sm justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" type="text" onChange={(e) => {setFirstname(e.target.value)}} required/>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" type="text" onChange={(e) => {setLastname(e.target.value)}} required/>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="picture">Email</Label>
                <Input id="picture" type="email" onChange={(e) => {setEmail(e.target.value)}} required/>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="picture">Message</Label>
                <Textarea id="Message" onChange={(e) => {setMessage(e.target.value)}} required/>
              </div>

              <Button className="gap-4 w-full" type="submit" onClick={createContactUs}>
                Book the meeting <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};