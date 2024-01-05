import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from 'next/navigation';
import { RedirectType } from "next/dist/client/components/redirect";


const  createNewUser = async () =>{
    
        const user = await currentUser();
    
        const match = await prisma.user.findUnique({
            where : {
                clerkId : user!.id as string,
            }
        });

        if(!match){
            const newUser = await prisma.user.create({
                data : {
                    clerkId : user!.id as string,
                    email : user!.emailAddresses[0].emailAddress
                }
            })
        }
    
   
        redirect("/journal")
    
}

const NewUser = async () =>{
    await createNewUser();
    return (<div><p>loading...</p></div>)
}

export default NewUser;